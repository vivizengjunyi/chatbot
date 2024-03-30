/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    height: {
      '400': '500px',
      '25': '25px',
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover'], // this enables group-hover for opacity
    },
  },
  plugins: [],
};
