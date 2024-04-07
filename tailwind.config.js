/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "280px",
      sm: "480px",
      mm: "550px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1840px",
    },
    colors: {
      Lightgreen: "#7ED9E2",
      purple: "#583FBC",
      Darkblue: "#242A41",
      gray: "#585F6F",
      white: "#EBECF0",
      black: "#000000",
      grey2: "#585F6F",
      lightgrey: "#EDF0F9",
      lightperpule: "#6878AC",
      skyblue: "#63B8E7",
      card: "#585F6F",
      superWhite: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      abc: ["Atkinson ", "sans-serif"],
    },
    fontWeight: {
      thin: 300,
      regular: 400,
      bold: 700,
      SemiBold: 600,
    },
    mode: "jit",

    important: true,
    extend: {},
  },
  plugins: [],
};
