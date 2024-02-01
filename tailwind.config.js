/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#ACADBC",
        gunmetal: "#293241",
      },
    },
  },
  daisyui: {
    themes: true,
  },
  plugins: [require("daisyui")],
};
