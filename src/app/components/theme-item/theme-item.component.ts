import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ITheme } from '@interfaces/ITheme';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.scss'
})
export class ThemeItemComponent {

  @Input() theme!: ITheme;

  public themeService = inject(ThemeService);
}
