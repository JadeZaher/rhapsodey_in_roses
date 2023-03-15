/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["century-gothic", "sans-serif"],
        display: ["Arizonia", "cursive"],
      },
      dropShadow: {
        colorShadow: [
          "2px 2px 2px #520503",
          "-1px -1px 3px rgba(225, 225, 225, 0.25)",
        ],
      },
      colors: {
        offWhite: "#F0F0F0",
        offBlack: "#1E050B",
        roseRed: "#E74C3C",
      },
      fontSize: {
        sm: "1rem",
        base: "clamp(.8rem, 1vw, 1.2rem)",
        xl: "clamp(1rem, 3vw, 1.5rem)",
        "2xl": "clamp(1.5rem, 4vw, 5rem)",
        "3xl": "clamp(1.8rem, 4vw, 5rem)",
        "4xl": "clamp(2rem, 4vw, 6rem)",
      },
      screens: {
        sm: "980px",
      },
    },
  },
  plugins: [],
};
