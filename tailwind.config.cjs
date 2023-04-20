/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Century Gothic", "sans-serif"],
      },
      colors: {
        brand: "#fdfbf6",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
