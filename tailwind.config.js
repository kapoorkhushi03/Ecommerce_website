/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#B76E79",
        secondaty: "#DACOA8",
        golden: '#29BEBE',
      },
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm: "1rem",
         },
      },
    },
  },
  plugins: [],
}

