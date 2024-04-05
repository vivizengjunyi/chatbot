/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'header-font': ['Barlow Condensed', 'sans-serif'],
      'para-font': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': '#EBF7E3',
        'title':"#1B3409",
        'features-background':"#66B032",
        'light-green': "#9BD770",
        'grass-green': "#375F1B",
        'preview-button': '#559E54'
      },
      spacing: {
        'message-height': 'calc(100vh - 300px)'
      }
    },
    height: {
      '500': '500px',
      '25': '25px',
      "30": '30px',
      '400': '400px',
      '100vh': '100vh',
      '90vh': '90vh',
      '10vh': '10vh'
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover'], 
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
};
