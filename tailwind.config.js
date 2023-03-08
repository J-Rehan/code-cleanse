/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#3AD6F9',
        blue: '#009BE0',
        dark: '#333333',
        dark2: '#666666',
        gray: '#eaeaea',
        green: '#008000',
      },
      boxShadow: {
        custom1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
