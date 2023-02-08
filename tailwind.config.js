/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./nuxt.config.{js,ts}", "./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      it: {
        DEFAULT: "#2D569E", //It case-sensitive default != DEFAULT
        300: "#7794E4",
        200: "#BFD8FF",
        100: "#E7EFFF",
        50: "#F6F9FF",
      },
      dsba: {
        DEFAULT: "#6345A6",
        50: "#FDF5FF",
      },
      bit: {
        DEFAULT: "#A62245",
        100: "#FFE3E8",
        50: "#FFF3F5",
      },
      ai: {
        DEFAULT: "#188580",
        100: "#8EBFBD",
        50: "#CCE8E6",
      },
      warning: {
        dark: "#867555",
        DEFAULT: "#F2C74B",
        light: "FFEECA",
      },
      disable: {
        DEFAULT: "#A7AABD",
        100: "#BDC0C7",
        50: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
