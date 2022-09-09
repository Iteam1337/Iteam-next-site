/** @type {import('tailwindcss').Config} */
module.exports = {
  // Prefix avoids conflicts with bootstrap
  // during the transition between the two.
  prefix: 'tw-',
  important: true,
  content: [
    './src/pages/**/*.{js, jsx}',
    './src/components/**/*.{js, jsx}',
    './src/sections/**/*.{js, jsx}',
  ],
  theme: {
    extend: { colors: { 'gray-light': '#f2f2f2', 'gray-dark': '#19191b' } },
  },
  plugins: [],
}
