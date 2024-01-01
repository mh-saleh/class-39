/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nun: ["Nunito", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        coral: "#FF5A3C",
        midnight: "#0A2C3D",
        slate: "#5C727D",
        mauve: "#5C5B7B",
        ebony: "#1D2022",
      },
      fontSize: {
        twentyTwo: "1.375rem",
        fourtyTwo: "2.625rem",
        fourtyFour: "2.625rem",
      },
      spacing: {
        container: "73.125rem",
        secondaryContainer: "120rem",
      },
    },
  },
  plugins: [],
};
