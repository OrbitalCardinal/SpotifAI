import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeItemComponent } from '@components/theme-item/theme-item.component';
import { ITheme } from "@interfaces/models";

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule, ThemeItemComponent],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss'
})
export class ThemePickerComponent {

  public themes: ITheme[] = [];

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
      },
      {
        name: "Test",
        class: "hulk",
        bg: "#1C1C1C",
        primary: "#B821FF",
        secondary: "#1DB96E"
      }
    ];
  }

  public isOpen: boolean = false;
}
