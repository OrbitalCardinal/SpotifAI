/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      dark: {
        "primary": "#1DB954",
        "primaryhover": "#199e48",
        "primaryactive": "#16873e",
        "secondary": "#21AFFF",
        "fcolor": "#FFFFFF",
        "bmain": "#1C1C1C",
        "customshadow": "rgba(255, 255, 255, 0.20)",
        "customhover": "#646464"
      },
      light: {
        "primary": "#21AFFF",
        "primaryhover": "#1c93d6",
        "primaryactive": "#187cb5",
        "secondary": "#1DB954",
        "fcolor": "#676767",
        "bmain": "#F8F8F8",
        "customshadow": "rgba(0, 0, 0, 0.30)",
        "customhover": "#E6E6E6"
      },
      hulk: {
        "primary": "#B821FF",
        "primaryhover": "#8c1bc2",
        "primaryactive": "#681391",
        "secondary": "#1DB96E",
        "fcolor": "#EDEDED",
        "bmain": "#090909",
        "customshadow": "rgba(255, 255, 255, 0.20)",
        "customhover": "#646464"
      }
    })
  ],
}

