/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#005ECE',
        'secondary': '#2488FF'
      },
      gridTemplateColumns: {
        'blog': '1fr 3fr'
      }
    },
  },
  plugins: [],
}