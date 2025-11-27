/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        dark: {
          100: '#1e1e2e',
          200: '#181825',
          300: '#11111b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(14, 165, 233, 0.5)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow': '0 0 40px rgba(14, 165, 233, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
