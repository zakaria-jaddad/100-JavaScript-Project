/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: "#4CAF4F",
        brand: "#263238",
        neutralGray: "#4D4D4D",
        neutralBlack: "#263238",
        neutralLGray: "#89939E",
      },
      backgroundColor: {
        primary: "#4CAF4F",
        secondary: "#F5F7FA",
        tint: "#E8F5E9",
        naturalSilver: "#F5F7FA",
        neutralBlack: "#263238",
        iconbg: "#3B464C",
        defaultGray: "#515B60",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        bounceRight: "bounceRight 1.5s  infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        bounceRight: {
          "0%, 100%": { transform: "translateX(25%)" },
          "50%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
