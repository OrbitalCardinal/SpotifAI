import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemePickerComponent } from '@components/theme-picker/theme-picker.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public themeService = inject(ThemeService);

  ngOnInit(): void {
    let theme = localStorage.getItem("theme");
    if(theme) {
      this.themeService.changeTheme(theme);
    }
  }
  title = 'SpotifAI';

}
