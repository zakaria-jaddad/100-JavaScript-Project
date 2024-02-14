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

        "main-bg-color": "var(--main-bg-color)",
        "main-text-color": "var(--main-text-color)",
        "second-text-color": "var(--second-text-color)",
        "third-text-color": "var(--third-text-color)",
        "active-button": "var(--active-button)",
        //
        // mainBgColor: "#0D0D0D",
        // mainTextColor: "#F2F2F2",
        // secondTextColor: "#A6A6A6",
        // thirdTextColor: "#737373",
        // "active-button": "#04BF7B",
        //
        // mainBgColor: "#232625",
        // mainTextColor: "#BFBFB8",
        // secondTextColor: "#35403A",
        // thirdTextColor: "#A4A69C",
        // "active-button": "#4C594F",

        eGray: "#EEEEEE",
        efGray: "#EFEFEF",
        "gray-ccc": "#CCCCCC",
      },
    },
  },
  plugins: [],
};
