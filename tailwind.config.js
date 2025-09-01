/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5016",
        secondary: "#8B6F47",
        accent: "#E07B39",
        surface: "#F5F2E8",
        background: "#FDFCF8",
        success: "#4A7C59",
        warning: "#D4A574",
        error: "#C73E1D",
        info: "#6B8E7F"
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}