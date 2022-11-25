/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkBlue1': '#170071',
        'darkBlue2':'#110a36',
        'active': '#ff781f',
        'textColor': '#2d2d2d',
        'backgroundColor': 'white',
      }
    },
  },
  plugins: [],
}
