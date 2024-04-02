/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#175557",
        secondary: "#2c7d88",
        textOrange: "#f28500",
      },
    },
  },
  plugins: [],
};
