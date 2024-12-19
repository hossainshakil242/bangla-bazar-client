/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      mytheme: {
        "main": "#4335A7",
        "lovely": "#80C4E9",
        "accent": "#FFF6E9",
        "neutral": "#FF7F3E",
      },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

