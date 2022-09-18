/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     width:{
     "49": "49%",
     "23": "23%",
     "31": "31%",
     },
    },
  },
  plugins: [],
};