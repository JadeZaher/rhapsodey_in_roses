/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Readex Pro", "sans-serif"],
        display: ["Arizonia", "cursive"],
      },
      dropShadow: {
        colorShadow: [
          "2px 2px 2px #520503",
          "-1px -1px 3px rgba(225, 225, 225, 0.25)",
        ],
      },
    },
  },
  plugins: [],
};
