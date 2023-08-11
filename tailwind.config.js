/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Noto Serif Lao", "serif"],
      },
      colors: {
        primary: "#02021D",
        ["primary-green"]: "#C1F651",
        secondary: "#C1F651",
        ["secondary-white-smoke"]: "#F2F2F2",
        ["secondary-steel"]: "#75869C",
        background: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
