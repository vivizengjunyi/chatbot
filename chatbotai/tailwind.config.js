/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
    height: {
      '500': '500px',
      '25': '25px',
      '400': '400px',
      '100vh': '100vh',
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover'], // this enables group-hover for opacity
    },
  },
  plugins: [],
};
