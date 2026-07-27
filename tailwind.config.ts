import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Refined Minimalist Editorial Palette (Section 4)
        background: {
          DEFAULT: '#090A0A',
          deep: '#050606',
        },
        surface: {
          DEFAULT: '#0D0F0F',
          raised: '#121414',
          hover: '#171919',
        },
        border: {
          DEFAULT: '#282B2B',
          strong: '#414545',
        },
        text: {
          primary: '#F5F5F2',
          secondary: '#AAAFAA',
          muted: '#727772',
        },
        accent: {
          DEFAULT: '#D90072',
          hover: '#F01888',
          muted: 'rgba(217, 0, 114, 0.14)',
        },
        success: '#67C58A',
        warning: '#D9AD5B',
        danger: '#E56B76',
        focus: '#9CC8FF',

        // Legacy utility aliases
        dark: {
          DEFAULT: '#090A0A',
          surface: '#0D0F0F',
          card: '#121414',
          border: '#282B2B',
        },
        neon: {
          pink: '#D90072',
          purple: '#A855F7',
          blue: '#3B82F6',
          yellow: '#D9AD5B',
          red: '#E56B76',
        },
        club: {
          text: '#F5F5F2',
          subtext: '#AAAFAA',
          muted: '#727772',
        },
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'Inter', 'sans-serif'],
        sans: ['var(--font-manrope)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.5)',
        accent: '0 0 15px rgba(217, 0, 114, 0.25)',
        neon: '0 0 15px rgba(217, 0, 114, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
