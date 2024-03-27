/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/modal.js",
    "./node_modules/@nextui-org/theme/dist/components/input.js",
    "./node_modules/@nextui-org/theme/dist/components/select.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],

}