// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        // black base with subtle green accents
        'skills-gradient': 'linear-gradient(38.73deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0) 50%), linear-gradient(141.27deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
      },
    },
  },
  plugins: [],
};