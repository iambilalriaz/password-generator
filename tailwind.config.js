/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aureolin: '#F8EF00',
        'bright-aqua': '#00F0FF',
        'artyclick-cool-red': '#FF003C',
        alabaster: '#FAFAFA',
        'neutral-400': '#BBBBBB',
        dark: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
