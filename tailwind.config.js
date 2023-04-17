/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      fontFamily: {
        poppins: ['Poppins'],
      }, 
      screens: {
        '2xl': '1320px',
        'lg': '879px',
      },
    },
  },
  plugins: [],
}
