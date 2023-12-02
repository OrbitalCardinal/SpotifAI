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
        "secondary": "#21AFFF",
        "fcolor": "#FFFFFF",
        "bmain": "#1C1C1C",
        "customshadow": "rgba(255, 255, 255, 0.20)",
        "customhover": "#646464"
      },
      light: {
        "primary": "#21AFFF",
        "secondary": "#1DB954",
        "fcolor": "#676767",
        "bmain": "#F8F8F8",
        "customshadow": "rgba(0, 0, 0, 0.30)",
        "customhover": "#E6E6E6"
      }
    })
  ],
}

