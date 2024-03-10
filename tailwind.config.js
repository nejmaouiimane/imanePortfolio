
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage :{
        'background' : "url('/src/assets/img/background.jpg')",
        'backgroundblack' : "url('/src/assets/img/blackbg.png')"
      }
    },
  },
  plugins: [],
}
