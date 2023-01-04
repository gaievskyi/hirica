/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Century Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
