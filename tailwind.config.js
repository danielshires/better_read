/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '1rem',
    },
    fontFamily: {
      sans: ['Fira Sans', 'Rubik', 'sans-serif'],
      serif: ['serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}