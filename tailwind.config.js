/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/template/*.{js,ts,jsx,tsx}",
    "./src/template/header/*.{js,ts,jsx,tsx}",
    "./src/template/footer/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mygray': '#323232',
        'menugray':'#2b2b2b',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        'spin-bounce': 'spin 1s infinite, bounce 1s infinite',
      },
    },
    fontFamily: {
      'WorkSans': 'WorkSans',
      'WorkSansSemiBold': 'WorkSansSemiBold',
    }
  },
  plugins: [],
}