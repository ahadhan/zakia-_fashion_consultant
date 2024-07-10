/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primaryColor: "#051628",
        secondaryColor: "#A24B4A",
        primaryText: "#464F50",
        headingPrimary: "#A24B4A",
        cardBg: "#e1e2e5",
        blackNav: "#12141e",
      },
      fontFamily:{
        'roboto': ['roboto', 'sans-serif']
      },

  },
  plugins: [],
}
}
