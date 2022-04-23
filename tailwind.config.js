module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'gotham': [ 'Montserrat', 'sans-serif']
            },
            height: {
                '100':'26rem',
                '128': '30rem',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}