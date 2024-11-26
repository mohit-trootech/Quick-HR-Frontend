/** @type {import('tailwindcss').Config} */
import { themes } from "./src/utils/contants";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: themes,
  },
};
