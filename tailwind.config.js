/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other folder here
  ],
  theme: {
    extend: {
      keyframes: {
        rotateAnimation: {
          from: {transform: 'rotateY(0deg)'},
	        to: {transform: 'rotateY(360deg)'},
        }
      },
      animation: {
        rotateAnimation: 'rotateAnimation 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
