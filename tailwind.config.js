/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frappelight3: "#CAB9B9",
        frappelight2: "#978A8A",
        frappelight1: "#756B6B",
        frappebase: "#524949",
        frappedark1: "#413A3A",
        frappedark2: "#2F2626",
        frappedark3: "#161616",
        milk: "#FEFBF3",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
