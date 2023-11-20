module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
          primary: '#333333',  
          secondary: 'rgb(114,114,114)',
          btnPrimary: 'rgb(40,69,186)',
          footerprimary: 'rgb(4,23,53)',
          textPrimary: 'rgb(155,155,155)',
          graylight:'#9B9B9B',
          btnsecondary:'rgb(34,34,34)',
          cartcol: 'rgb(122,198,77)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
