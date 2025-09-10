/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-850": "#1f1f1f", // custom darker card color
      },
      backgroundImage: {
        "dark-leaves": "url('https://www.transparenttextures.com/patterns/dark-leaves.png')",
      },
    },
  },
  plugins: [],
};
