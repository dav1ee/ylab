import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans]
      },
      colors: {
        dark: 'rgba(3, 7, 18, 0.72)',
        error: 'rgba(255, 37, 37, 1)'
      }
    }
  },
  plugins: []
};
