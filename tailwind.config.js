/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{tsx,ts,}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
