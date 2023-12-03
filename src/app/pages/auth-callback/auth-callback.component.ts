import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { AuthCallbackService } from '@services/auth-callback.service';
import { SpinnerService } from '@services/spinner.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss',
  providers: [AuthCallbackService]
})
export class AuthCallbackComponent implements OnInit {
  private authCallbackService = inject(AuthCallbackService);

  public spinnerService = inject(SpinnerService);


  ngOnInit(): void {
    // Save user data
    this.getData();
  }

  async getData() {
    let result = await this.authCallbackService.getData();
    console.log(result);
  }

}
