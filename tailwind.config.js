module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'gotham': [ 'Montserrat', 'sans-serif']
            },
            height: {
                '128': '30rem',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}