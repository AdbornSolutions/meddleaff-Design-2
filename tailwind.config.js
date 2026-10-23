export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D4ED8',
          'blue-dark': '#1E40AF',
          sky: '#2563EB',
          navy: '#16233C',
          white: '#FFFFFF',
          ice: '#93C5FD',
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
