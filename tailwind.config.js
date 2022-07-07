
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292e',
          800: '#202024',
          900: '#121214',
        },
        green:{
          300: '#00B37E',
          500: '#00875F',
        },
        red:{
          300:'#F75A68'
        }
      },
      boxShadow: {
        '3xl': '0 0 0 2px',
      }
    },
  },
  plugins: [],
}
