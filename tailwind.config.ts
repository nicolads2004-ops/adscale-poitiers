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
        primary: {
          DEFAULT: '#4285f4',
          light: '#699df6',
          dark: '#2b6dd9',
        },
        secondary: {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
          dark: '#0F766E',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
        neutral: {
          900: '#1F2937',
          700: '#374151',
          500: '#64748B',
          300: '#CBD5E1',
          100: '#F1F5F9',
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
        'gradient-brand': 'linear-gradient(135deg, #4285f4 0%, #0D9488 100%)',
        'gradient-cta': 'linear-gradient(135deg, #4285f4 0%, #699df6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
      },
    },
  },
}
