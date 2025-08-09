/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design tokens as specified
        'primary-black': '#000000',
        'glitter-gold': '#F5C518',
        'glitter-gold-light': '#FFDF6B',
        'slight-blue': '#1E90FF',
        'card-dark': '#0a0a0a',
        // Additional utility colors
        'gold-gradient': 'linear-gradient(90deg, #F5C518, #FFDF6B)',
        'gold-shimmer': 'linear-gradient(90deg, #F5C518 0%, #FFDF6B 50%, #F5C518 100%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #F5C518, #FFDF6B)',
        'gold-shimmer': 'linear-gradient(90deg, #F5C518 0%, #FFDF6B 50%, #F5C518 100%)',
        'particle-bg': 'radial-gradient(circle at 50% 50%, rgba(245, 197, 24, 0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
}
