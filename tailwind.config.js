/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F4EE',
          100: '#C0E4D4',
          200: '#97D3B9',
          300: '#6DC19E',
          400: '#4DB389',
          500: '#2D8B61', // Primary color
          600: '#277A55',
          700: '#1F6347',
          800: '#184D38',
          900: '#10372A',
        },
        secondary: {
          50: '#E4ECF0',
          100: '#BCCED7',
          200: '#90AFBC',
          300: '#6390A1',
          400: '#427A8C',
          500: '#1A5F7A', // Secondary color
          600: '#17556C',
          700: '#13485B',
          800: '#0F3A4A',
          900: '#0A2C39',
        },
        accent: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800', // Accent color
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};