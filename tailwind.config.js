/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3cd6b7",
        lightprimary: "#C4F2E9",
        secondary: "#3ab2ab",
        third: "#D1F7D1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
