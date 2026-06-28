import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717', muted: '#73716d', porcelain: '#f7f5f0', sand: '#ded5c7', graphite: '#242424'
      },
      fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'], display: ['var(--font-display)', 'Georgia', 'serif'] },
      boxShadow: { soft: '0 24px 80px rgba(23,23,23,.08)', card: '0 16px 48px rgba(23,23,23,.10)' },
      transitionTimingFunction: { luxury: 'cubic-bezier(.22,1,.36,1)' }
    }
  },
  plugins: []
};
export default config;
