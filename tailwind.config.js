/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'ui-sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace'],
      },
      colors: {
        'primary-gray': {
          DEFAULT: '#F7F7FB',
          200: '#E8E8FB',
          300: '#BFBFE3',
        },
        yellow: {
          50: '#FFFDEB',
          100: '#FEFAD2',
          200: '#FEF5AA',
          300: '#FDF07C',
          400: '#FDEC54',
          500: '#FCE728',
          600: '#E7D103',
          700: '#AB9A02',
          800: '#746802',
          900: '#373201',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-hero': {
          'background-image': 'url(/hero.png)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        },
        '.shadow-skill': {
          'box-shadow': '0px 15px 40px rgba(0, 0, 0, 0.1)',
        },
      })
    }),
  ],
}
