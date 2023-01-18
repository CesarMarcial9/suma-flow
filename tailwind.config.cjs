/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "well-read": {
          DEFAULT: "#AD3C2F",
          50: "#E8B2AB",
          100: "#E4A39B",
          200: "#DB857B",
          300: "#D2675B",
          400: "#CA4A3B",
          500: "#AD3C2F",
          600: "#812D23",
          700: "#551D17",
          800: "#290E0B",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
