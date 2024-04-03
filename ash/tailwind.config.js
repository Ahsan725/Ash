/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan JSX files for Tailwind CSS classes
  theme: {
    extend: {
      // Define your custom theme colors here
      colors: {
        ash: {
          primary: "#f7f1db",
          secondary: "rgb(128, 103, 182)",
          accent: "rgb(157, 126, 222)",
          neutral: "#f7f1db",
          info: "#8067b6",
          success: "#adffc0",
          warning: "#ff8",
          error: "#FF795C",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
