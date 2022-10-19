/** @type {import('tailwindcss').Config} */
module.exports = {
  // Prefix avoids conflicts with bootstrap
  // during the transition between the two.
  prefix: 'tw-',
  important: true,
  content: [
    './src/pages/**/*.{js, jsx}',
    './src/components/**/*.{js, jsx}',
    './src/features/**/*.{js, jsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#38FFA1',
        'primary-light': '#FF5C77',
        'gray-light': '#f2f2f2',
        'gray-dark': '#19191b',
        'gray-blue': '#f7f7fb',
        'gray-border': '#eae9f2',
      },
    },
  },
  plugins: [],
}
