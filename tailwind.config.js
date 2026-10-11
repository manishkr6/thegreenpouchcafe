/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#09100B',
          900: '#0F1A12', // brand dark base
          850: '#142118',
          800: '#1A2C20',
          700: '#233C2C',
          600: '#2F4F3B',
          500: '#3F654D',
          400: '#5E886D',
        },
        lime: {
          50: '#F6FAEE',
          100: '#EBF5DC',
          200: '#D7EEB3',
          300: '#BEE283',
          400: '#A4D653',
          500: '#8DC63F', // brand primary
          600: '#71A32D',
          700: '#557F21',
          800: '#3C5C16',
        },
        cream: {
          50: '#FDFBF6',
          100: '#FBF7EA', // brand light base
          200: '#F5EEDB',
          300: '#EFE4C8',
          400: '#E2D3AB',
          500: '#C9B687',
        },
        gold: {
          300: '#F3D87D',
          400: '#E6C454',
          500: '#D4AF37',
          600: '#B89425',
          700: '#947417',
        },
        coffee: {
          100: '#EFE6E1',
          200: '#DCCAC0',
          400: '#8B624A',
          500: '#5C3D2E',
          600: '#472B1E',
          700: '#321D14',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(15, 26, 18, 0.08)',
        'lift': '0 20px 40px -15px rgba(15, 26, 18, 0.15)',
        'glow-lime': '0 0 35px -5px rgba(141, 198, 63, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
