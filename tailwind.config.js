/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: '#272360',
          2: '#FEDB24',
          3: '#201F22',
          4: '#FFFFFF',
          5: '#2F2F2F',
          6: '#fff708',
          7: 'rgba(32, 31, 34, 0.5)',
          8: 'rgba(147, 147, 147, 0.8)',
          9: ' rgba(255, 255, 255, 0.3)',
        },
      },
    },
  },
  plugins: [],
};
