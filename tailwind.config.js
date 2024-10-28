/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
        xxs: '375px',
        md: '768px',
      },
      fontFamily: {
        Epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        blue: '#172339',
        grey: '#49566D',
        cream: '#F3EDE7',
        creamwhite: '#FAF8F6',
        purple: '#A060FF',
        pink: '#CB30E3',
        orange: '#FFA84E',
      },
    },
  },
  plugins: [],
}
