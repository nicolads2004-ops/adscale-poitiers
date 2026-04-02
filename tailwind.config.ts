import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Orange Brand
        primary: {
          DEFAULT: '#FF8C00',
          light: '#FFA500',
          dark: '#E07B00',
          glow: 'rgba(255,140,0,0.5)',
        },
        // Secondary Orange
        secondary: {
          DEFAULT: '#FFA500',
          light: '#FFB833',
          dark: '#E09100',
        },
        // Accent Gold/Orange
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFE533',
          dark: '#E0BD00',
        },
        // Dark Theme Backgrounds
        background: {
          DEFAULT: '#0a0a0a',
          surface: '#141414',
          elevated: '#1a1a1a',
        },
        // Dark Theme Text
        text: {
          primary: '#fafafa',
          secondary: '#a0a0a0',
          muted: '#737373',
        },
        // Dark Theme Borders
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          medium: 'rgba(255,255,255,0.1)',
          accent: 'rgba(255,140,0,0.2)',
        },
        // Legacy neutral colors for dark theme
        neutral: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
          600: '#262626',
          500: '#404040',
          400: '#525252',
          300: '#737373',
          200: '#a0a0a0',
          100: '#d4d4d4',
          50: '#fafafa',
        },
        success: '#16A34A',
        danger: '#DC2626',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        numbers: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)',
        'gradient-surface': 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(255,140,0,0.3)',
        'orange-glow-sm': '0 0 8px rgba(255,140,0,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
}
