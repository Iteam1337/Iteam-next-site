/** @type {import('tailwindcss').Config} */
module.exports = {
  // Prefix avoids conflicts with bootstrap
  // during the transition between the two.
  prefix: 'tw-',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
