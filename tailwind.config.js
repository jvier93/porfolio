/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image-5": "url('/image5.jpg')",
        "footer-wave": "url('/wave.svg')",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
        monserrat: "Monserrat, sans-serif",
      },
      colors: {
        darkpurple: "#26202B",
        darkgray: "#1D2027",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
