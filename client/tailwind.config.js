/** @type {import('tailwindcss').Config} */
module.exports = {
  // Prefix avoids conflicts with bootstrap
  // during the transition between the two.
  prefix: 'tw-',
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { colors: { 'gray-light': '#f2f2f2', 'gray-dark': '#19191b' } },
  },
  plugins: [],
}
