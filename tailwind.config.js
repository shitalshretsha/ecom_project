/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(13,71,161)',
        'secondary': 'rgb(25,118,210)',
        'deepestB': 'rgb(13,71,161)',
        'slightLB': 'rgb(25,118,210)',
        'mediumB': 'rgb(66,165,245)',
        'lightB': 'rgb(144,202,249)',
        'veryLB': 'rgb(225,245,254)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'hero-start': 'rgb(25,118,210)',
        'hero-end': 'rgba(13, 71, 161, 0.85)',
      },
    },
  },
  plugins: [],
}