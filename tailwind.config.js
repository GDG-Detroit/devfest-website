/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: {
          DEFAULT: '#efb403',
          50: '#fefce8',
          100: '#fffac2',
          200: '#fff187',
          300: '#ffe243',
          400: '#ffcb05',
          500: '#efb403',
          600: '#ce8b00',
          700: '#a46204',
          800: '#884c0b',
          900: '#733e10',
          950: '#432005',
        },
      },
      fontFamily: {
        russell: ['Russell', 'cursive'],
      },
    },
  },
  plugins: [],
}
