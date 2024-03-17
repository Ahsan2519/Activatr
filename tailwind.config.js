/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav':'#FF007F',
        'hero-bg': '#5BD7E8',
        'footer': '#0E0E0E'
      },
      dropShadow: {
        'custom': '-7px 0px 0px #4700FF;'
      }
    },
  },
  plugins: [],
}

