import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemePickerComponent } from '@components/theme-picker/theme-picker.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ThemePickerComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [AuthService]
})
export class AuthComponent {

  public authService = inject(AuthService);

  constructor() { }

}
