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
        YinMnBlue: "#3D5A80",
      },
    },
  },
  daisyui: {
    themes: true,
  },
  plugins: [require("daisyui")],
};
