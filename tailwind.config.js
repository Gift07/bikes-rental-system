module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
      ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              'gotham': [ 'Montserrat', 'sans-serif']
          },
          height: {
              '100':'26rem',
              '128': '30rem',
              '130':'41rem',
          },
          flex: {
              '2': '2 2 0%'
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}