/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    colors: {
      cyan: '#66E2DC',
      'orange-red': '#FA7453',
      'yellow-orange': '#FFB964',
      white: '#FCFAF9',
      black: '#191826',
    },
    fontFamily: {
      plexSans: ["IBMPlexSans-Regular", 'Arial', 'sans-serif'],
      plexBold: ["IBMPlexSans-bold", 'Arial', 'sans-serif']
    },
    fontSize: {
      sm: ['1rem', {
        lineHeight: '1.625',
        letterSpacing: '-0.18px'
      }],
      base: ['1.125rem', {
        lineHeight: '1.55'
      }],
      lg: ['1.25rem', {
        lineHeight: '1.7'
      }],
      xl: ['2rem', {
        lineHeight: '1.25'
      }],
      '2xl': ['2.5rem', {
        lineHeight: '1.2',
        letterSpacing: '-0.455px'
      }],
      '3xl': ['4rem', {
        lineHeight: '1',
        letterSpacing: '-0.727px'
      }],
      '4xl': ['5.5rem', {
        lineHeight: '1',
        letterSpacing: '-0.727px'
      }]
    },
    extend: {
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}