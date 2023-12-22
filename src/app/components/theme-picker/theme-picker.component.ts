import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { ThemeItemComponent } from '@components/theme-item/theme-item.component';
import { ITheme } from "@interfaces/models";
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule, ThemeItemComponent],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss'
})
export class ThemePickerComponent {

  public themes: ITheme[] = [];

  public themeService = inject(ThemeService);
  public isOpen: boolean = false;
  private elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target) && this.isOpen) {
      this.isOpen = !this.isOpen;
    }
  }

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
}
