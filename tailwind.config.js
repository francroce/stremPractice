/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryPurple: "#7b5bf5",
        disabledGrey: "#22203d",
        hoverGrey: "#a7a6b4",
        secondaryGreen: "#24b363",
      }
    },
  },
  plugins: [],
}

