import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeAct: string = "light";

  constructor() { }

  changeTheme(theme: string) {
    let html = document.getElementsByTagName("html");
    if (html) {
      html[0].classList.replace(this.themeAct, theme);
      this.themeAct = theme;
      localStorage.setItem("theme", theme);
    }
  }

  getTheme(): string {
    return this.themeAct;
  }
}
