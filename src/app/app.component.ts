import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@services/theme.service';
import { ApiModule } from '@spotifai-api/api.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApiModule],
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
