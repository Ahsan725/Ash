/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scan JSX files for Tailwind CSS classes
  theme: {
    extend: {
      daisyui: {
        // themes: ["cupcake", "dark", "cmyk"],
      },
      colors: {
        ash: {
          primary: '#FFFF00'
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
