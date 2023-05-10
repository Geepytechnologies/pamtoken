/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(36,36,36)",
        light: "#e4ab86",
        mygreen: "#6b9c2f",
        primary: "#FFC107",
        secondary: "#2196F3",
        success: "#4CAF50",
        warning: "#FF9800",
        danger: "#F44336",
        info: "#607D8B",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      danc: ["Dancing Script", "cursive"],
      popp: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
