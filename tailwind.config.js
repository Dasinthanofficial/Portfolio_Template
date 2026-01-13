/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050505', // Main Background
        'space-dark': '#121212', // Card/Section Background
        'neon-purple': '#7C3AED', // Primary Accent (Electric Purple)
        'royal-blue': '#2563EB', // Secondary Accent (Royal Blue)
        'neutral-gray': '#A3A3A3', // Secondary Text
        'glass-white': 'rgba(255, 255, 255, 0.05)', // Subtle glass
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #7C3AED, #2563EB)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }, // Updated shadow color
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(124, 58, 237, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
