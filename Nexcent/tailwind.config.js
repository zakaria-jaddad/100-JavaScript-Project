/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        31: "31rem",
      },
      animation: {
        carusel: "carusel 08s linear infinite",
      },
      keyframes: {
        carusel: {
          "0%": { translate: "0%" },
          // "90%": { translate: "-100%" },
          "100%": { translate: "-100%" },
        },
      },
    },
  },
  plugins: [],
};
