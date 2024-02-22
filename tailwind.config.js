/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        50: '#f3f7fc',
        100: '#e6f0f8',
        200: '#c7e0f0',
        300: '#95c7e4',
        400: '#5ca8d4',
        500: '#378dc0',
        600: '#2874a6',
        700: '#215a83',
        800: '#1f4e6d',
        900: '#1e415c',
        950: '#142b3d'
      },
      'secondary': {
        50: '#f6f5f5',
        100: '#e7e6e6',
        200: '#d1d0d0',
        300: '#b0b0b0',
        400: '#888888',
        500: '#706f6f',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3c3c',
        950: '#262626'
      },
      'error' : {
        500: 'rgb(239 68 68)'
      },
      'success': {
        500: 'rgb(34 197 94)'
      }
    }
  },
  plugins: [],
}


