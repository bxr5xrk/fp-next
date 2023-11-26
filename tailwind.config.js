/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      "xxs": '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        50: '#f8f6f4',
        100: '#efebe5',
        200: '#dfd4c9',
        300: '#cdbcac',
        400: '#b49883',
        500: '#a4816b',
        600: '#97715f',
        700: '#7e5c50',
        800: '#674c45',
        900: '#553f39',
        950: '#2d211d',
      },
      secondary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fccee7',
        300: '#fba6d2',
        400: '#f76fb3',
        500: '#f04496',
        600: '#df2373',
        700: '#c21459',
        800: '#a01449',
        900: '#701236',
        950: '#520523',
      },
      ...colors,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
