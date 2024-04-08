/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
        cardbg:'rgba(17,17,25)',
        primary: "#5D5FEF",
        dark:"#00000A",
        secondary:'#EF5DA8',
        secondary_medium:'#F178B6',
        secondary_light:'#FCDDEC',
        primary_light:'#A5A6F6',
        primary_medium:'#7879F1',
        input_bg:'#0E0E14',
        input_light: '#222222',
        danger: '#921616'
      },
    },
  },
  plugins: [],
};
