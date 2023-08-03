/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Noto Serif Lao', 'serif'],
      },  
      colors: {
        primary: '#02021D',
        secondary: '#C1F651',
        background: '#F2F2F2',
      }
    },
  },
  plugins: [],
}