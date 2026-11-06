/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F7F5',
          100: '#E5EDE8',
          200: '#CADBD1',
          300: '#A4C2B2',
          400: '#739F8A',
          500: '#4D7F67',
          600: '#386450',
          700: '#2C4F40',
          800: '#233F34',
          900: '#1D352C',
          950: '#0F1E19',
        },
        surface: {
          50: '#FAF9F6',
          100: '#F4F3EF',
          200: '#EBE9E2',
          300: '#DCD9CF',
          800: '#1A1C20',
          850: '#141619',
          900: '#0E1013',
          950: '#08090A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
