/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        purple: '#7F54B3',
        green: '#7ad03a',
        red: '#a00',
        orange: '#ffba00',
        primary: '#2ea2cc',
        white: '#fff',
        secondary: '#e9e6ed',
        text: '#515151',
        highlight: '#777335',
        subtext: ' #767676'
      }
    },
  },
  plugins: [],
}

