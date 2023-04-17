/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 80,
  singleAttributePerLine: true,
  semi: false,
}

module.exports = config
