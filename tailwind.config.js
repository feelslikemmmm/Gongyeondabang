/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '80px',
      },
      width: {
        lg: '960px',
      },
    },
  },
  plugins: [],
};
