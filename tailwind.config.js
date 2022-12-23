/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-content-player': 'calc(100vh - 12rem)',
      }
    },
  },
  plugins: [],
}
