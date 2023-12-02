import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
  providers: [ThemeService]
})
export class ThemePickerComponent {
  public themeService = inject(ThemeService);

  public isOpen: boolean = false;
}
