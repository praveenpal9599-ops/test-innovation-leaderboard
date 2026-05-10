/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#0284C7',
          indigo: '#6366F1',
          amber:  '#D97706',
          green:  '#059669',
          pink:   '#DB2777',
        },
        surface: {
          page:   '#EEF2FF',
          card:   '#FFFFFF',
          subtle: '#F8FAFC',
          border: '#E2E8F0',
          hover:  '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 .5h40M.5 0v40' stroke='%23C7D2FE' stroke-opacity='.35'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn .4s ease forwards',
        'slide-up':   'slideUp .4s ease forwards',
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
