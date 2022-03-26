module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'data-theme',
    theme: {
        fontFamily: {
            sans: ['Montserrat Alternates', 'sans-serif'],
            serif: ['Comic Neue', 'serif'],
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
}
