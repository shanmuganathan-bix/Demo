/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bio: {
          bg: '#F8F9FA',         // 60% Dominant: Soft Light Gray
          white: '#FFFFFF',      // 60% Dominant: Pure White
          navy: '#0B1B3D',       // 30% Secondary: Deep Navy Blue
          navyDark: '#071229',   // 30% Secondary: Dark Navy Barrier
          teal: '#00A896',       // 10% Accent: Vibrant Cyan/Teal
          green: '#39FF14',      // 10% Accent: Bio-Luminescent Green
          cyan: '#00C4B4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
