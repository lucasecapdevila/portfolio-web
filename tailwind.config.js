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
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-185%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      boxShadow: {
        'logos': '0px 0px 15px 8px rgba(103,168,148,1)'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

