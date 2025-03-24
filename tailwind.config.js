/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        futuristic: ['Orbitron', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
