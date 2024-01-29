/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "620px",
          lg: "620px",
          xl: "620px",
          "2xl": "620px",
        },
      },
      colors: {
        transparent: "rgba(255, 255, 255, 0.2)",
        lowTransparent: "rgba(0, 0, 0, 0.4)",
        mainBgColor: "#3C3633",
        mainTextColor: "#EEEDEB",
        secondTextColor: "#1F1717",
        thirdTextColor: "#747264",
        eGray: "#EEEEEE", 
        efGray: "#EFEFEF"
      },
    },
  },
  plugins: [],
};
