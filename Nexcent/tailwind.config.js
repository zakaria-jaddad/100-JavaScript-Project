/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'heading-grey': '#4D4D4D', 
        'line-grey': '#717171', 
        'sub-line-grey': '#89939E', 
        'primary': '#4CAF4F', 
        'secondary': '#263238', 
        'silver': '#F5F7FA'
      }, 
      height: {
        301: "301px",
      },
      width: {
        480: '480px'
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
