export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0F5D5D',
          'green-dark': '#0A4545',
          fresh: '#5F8F45',
          navy: '#16233C',
          cream: '#F7F4EC',
          mint: '#EDF3E9',
          gold: '#B9822E',
          amber: '#B9822E',
        },
        ink: {
        DEFAULT: '#16233C',
          soft: '#4A5568',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
    },
  },
}
