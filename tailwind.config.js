/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/templates/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/typography")],
};
