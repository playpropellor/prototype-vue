/** @type {import('tailwindcss').Config} */
const { colors, fontSize, spacing } = require('./tailwind.config.json')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors,
        fontSize,
        spacing,
        extend: {}
    },
    plugins: []
}
