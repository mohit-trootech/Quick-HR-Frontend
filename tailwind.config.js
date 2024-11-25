/** @type {import('tailwindcss').Config} */
import { themes } from "./src/utils/contants";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: themes,
  },
};
