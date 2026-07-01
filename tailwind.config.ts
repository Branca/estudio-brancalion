import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:        '#F5F2EC',
        orange:       '#FF5F1F',
        yellow:       '#F7E735',
        cyan:         '#00E5FF',
        ink:          '#1A1715',
        'gray-mid':   '#6B6864',
        'gray-light': '#B8B4AD',
        'gray-mist':  '#EDE9E2',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
