const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      whiteBg: "#f4f4f4",
      reactLightBlue: "#61DBFB",
      reactDarkBlue: "#57C5E2",
      textBlack: "#222222",
      textWhite: "#F4F4F4",
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

