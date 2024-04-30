import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)', 'sans-serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      colors: {
        primary: {
          400: '#FBBF24',
          600: '#D97706',
        },
      },
      height: {
        30: '7.5rem',
      },
      lineHeight: {
        14: '3.5rem',
      },
    },
  },
  plugins: [],
}
export default config
