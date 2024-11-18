/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c_blue: "#0b2194",
        c_orange: "#fc853b"
      },
      fontFamily: {
        garet: ['Garet', 'sans-serif']
      },
    },
  },
  plugins: [],
}