/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark': '#1E1E1E',
        'midDark': '#3E3E42',
        'bone': '#D9D9D9',
        'primary': '#007ACC',
      }
    },
  },
  plugins: [],
}
