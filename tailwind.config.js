/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        dark:"#00000A",
        secondary:'#EF5DA8',
        secondary_medium:'#F178B6',
        secondary_light:'#FCDDEC',
        primary_light:'#A5A6F6',
        primary_medium:'#7879F1',
        input_bg:'#0E0E14'
      },
    },
  },
  plugins: [],
};
