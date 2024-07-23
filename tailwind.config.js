/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primaryColor: "#010642",
        secondaryColor: "#A24B4A",
        primaryText: "#464F50",
        headingPrimary: "#A24B4A",
        cardBg: "#e1e2e5",
        blackNav: "#12141e",
        blue: "#011946",
        gold: "#AD974F",
        darkbg: "#000000"
      },
      fontFamily:{
        'roboto': ['roboto', 'sans-serif']
      },

  },
  plugins: [],
}
}
