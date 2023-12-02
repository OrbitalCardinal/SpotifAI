import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

export interface IThemes {
  name: string;
  class: string;
  bg: string;
  primary: string;
  secondary: string;
}

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

  public themes: IThemes[] = [];

  constructor() {
    this.themes = [
      {
        name: "Claro",
        class: "light",
        bg: "#F8F8F8",
        primary: "#21AFFF",
        secondary: "#1DB954"
      },
      {
        name: "Oscuro",
        class: "dark",
        bg: "#1C1C1C",
        primary: "#1DB954",
        secondary: "#21AFFF"
      },
      {
        name: "Hulk",
        class: "hulk",
        bg: "#1C1C1C",
        primary: "#B821FF",
        secondary: "#1DB96E"
      }
    ];
  }

  public isOpen: boolean = false;
}
