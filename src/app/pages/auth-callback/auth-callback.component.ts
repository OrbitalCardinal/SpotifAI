import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { SpinnerService } from '@services/spinner.service';
import { UsersApiService } from '@spotifai-api/index';
import { environment } from "@environments/environment";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit {

  public spinnerService = inject(SpinnerService);

  private usersApiService = inject(UsersApiService);

  private activatedRoute = inject(ActivatedRoute);
  
  private httpClient = inject(HttpClient);

  private router = inject(Router);


  ngOnInit(): void {
    // Save user data
    const code = this.activatedRoute.snapshot.queryParamMap.get('code') ?? "";
    const url = 'https://accounts.spotify.com/api/token';
    // redirect_uri: environment.redirect_uri,
    const grant_type = 'authorization_code';
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + 
        btoa(environment.client_id + ':' + environment.client_secret)
        
    };


    const data = new URLSearchParams();
    data.append('code', code);
    data.append('redirect_uri', environment.redirect_uri);
    data.append('grant_type', grant_type);

    this.httpClient.post(url, data, {
      headers: headers,
    }).subscribe(response => {
      const creds: any = response;
      this.httpClient.get('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `${creds['token_type']} ${creds['access_token']}`
        }
      }).subscribe((userIdResponse: any) => {
        creds['id_user'] = userIdResponse['id'];
        this.usersApiService.usersPost(creds).subscribe((credsResponse:any) => {
          localStorage.setItem('spotifai-creds', JSON.stringify(credsResponse));
          this.router.navigate(['/main']);
        });
      })
      
    })
    
  }
}
