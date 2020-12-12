module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.vue',
    './public/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      test: ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#f21587'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true
  }
}
