/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 80,
  semi: false,
  endOfLine: "lf",
}

module.exports = config
