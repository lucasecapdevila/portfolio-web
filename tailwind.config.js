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
      lightColor: "#c7dfd8",
      mediumColor: "#97c3b6",
      textBlack: "#222222",
      textDarkColor: "#67a894",
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

