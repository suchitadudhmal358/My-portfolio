/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px',
    },
   
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'redHeading' : '#FF4C25',
        'faintBlack' : '#121212',
        'blackish' :'#0E0E0E',
        'body-content' : '#858792',
        'header-content' : '#20222E',
        'subtitle' : '#797B86',
        'card' : '#1F1E1E',
        'black-card' : '#2A2C39',
      },
      
    },
  },
  plugins: [],
}
