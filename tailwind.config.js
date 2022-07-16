/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem", //640px
        md: "2.5rem", //768px
        lg: "4rem", //1024px
        xl: "5rem", //1280px
        "2xl": "6rem", //1536px
      },
    },
    extend: {},
  },
  plugins: [],
};
