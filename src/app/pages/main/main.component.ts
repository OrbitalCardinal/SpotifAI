import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public creds: any;
  public playlists: any;
  
  private http = inject(HttpClient);

  constructor() {
    this.creds = JSON.parse(localStorage.getItem('spotifai-creds') ?? '');
    console.log(this.creds);
  }
  ngOnInit(): void {
    const playlists_url = `https://api.spotify.com/v1/users/${this.creds['id_user']}/playlists?limit=50`;
    this.http.get(playlists_url, {
      headers: {
        'Authorization': `${this.creds['token_type']} ${this.creds['access_token']}`
      }
    }).subscribe((response:any) => {
      this.playlists = response['items'];
    })
  }
}
