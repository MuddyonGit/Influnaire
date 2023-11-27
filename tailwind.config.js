/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white": "#fff",
        "color-yellow": "#FFC069",
        "color-light-blue": "#0073B5",
        "color-dim-white": "#FFFBE6",
        "color-black": "#000",
        "color-gray": "#D9D9D9",
        "color-dim-black": "#505050",
        "color-gray-black": "#7E7E7E",
        "color-dodgerblue": "#1677FF",
        "color-dark-gray": "#6B6B6B",
        "color-dark-black": "#2A2A2A",
        "color-cyan": "#00E0FF",
        "color-orange": "#FFAB00",
        "color-blue-white": "#E6F5FF",
        "color-dark-blue": "#0F3E84",
        "color-141414": "#141414",
        "color-lift-blue": "#0081FE",
        "color-sky-blue": "#43A8F1",
        "color-light-gray": "#CAC4D0",
        "color-whitesmoke": "#EADDFF",
        "color-accent-blue-light": "#B9C8F3",
        "color-blue": "#0052F3",
        "color-light-cyan": "#78C1EB",
        "color-F5F5F5": "#F5F5F5",
        "color-636363": "#636363",
        "color-blue": "#3D66FB",
        "color-blueblack": "#033856",
        "color-light-whitesmoke": "#EFEFEF",
        "color-92CAFA": "#92CAFA",
        "color-4380C0": "#4380C0",
        "color-3C74A4": "#3C74A4",
        "color-08274D": "#08274D",
        "color-hot-blue": "#006EF3",
        "color-F2F2F2": "#F2F2F2",
        "color-969696": "#969696",
        "color-F7F7FB": "#F7F7FB",
        "color-royal-blue": "#2D7CC3",
      },
      fontFamily: {
        "font-source-sans-pro": "Source Sans Pro",
        "Clash-Display": ["Clash Display"],
        inter: ["Inter", "sans"],
        "segoe-ui": ["Segoe UI", "sans"],
        barlow: ["Barlow", "sans"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      width: {
        144: "36rem",
        120: "28rem",
        168: "42rem",
      },
      spacing: {
        120: "30rem",
      },
      left: {
        120: "30rem",
      },
      height: {
        120: "30rem",
        140: "40rem",
      },
      spacing: {
        75: "300px",
        17: "68px",
      },
      top: {
        75: "300px",
        17: "68px",
      },

      fontSize: {
        xxs: "10px",
      },
      margin: {
        120: "30rem",
        144: "36rem",
      },
      screens: {
        extraLargerDevices: "2000px",
        largerDevices: "1600px",
      },
    },
  },
  plugins: [],
};
