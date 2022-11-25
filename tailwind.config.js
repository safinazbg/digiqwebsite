/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'qBlue': '#170071',
        'qDarkBlue': '#110a36',
        'qPink': '#ff1772',
        'qLightPink': '#ffb8d4',
        'qOrange': '#ff781f',
        'qLightOrange': '#ffb98a',
        'textColor': '#2d2d2d',
        'backgroundColor': 'white',
      }
    },
  },
  plugins: [],
}
