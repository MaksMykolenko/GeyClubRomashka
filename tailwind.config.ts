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
        dark: {
          DEFAULT: '#07050D',
          surface: '#100A18',
          card: '#150E22',
          border: 'rgba(255, 42, 166, 0.15)',
        },
        neon: {
          pink: '#FF2AA6',
          purple: '#8A3DFF',
          blue: '#3485FF',
          yellow: '#FFC84A',
          red: '#FF5C68',
        },
        club: {
          text: '#FFF8FC',
          subtext: '#BEB3C9',
          muted: '#8A7B9B',
        },
      },
      fontFamily: {
        display: ['var(--font-unbounded)', 'sans-serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 42, 166, 0.4)',
        'neon-blue': '0 0 20px rgba(52, 133, 255, 0.4)',
        'neon-purple': '0 0 25px rgba(138, 61, 255, 0.4)',
        'neon-yellow': '0 0 15px rgba(255, 200, 74, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(7, 5, 13, 0.3) 0%, rgba(7, 5, 13, 0.85) 75%, #07050D 100%)',
        'pink-purple-glow': 'radial-gradient(circle, rgba(255,42,166,0.2) 0%, rgba(138,61,255,0.1) 50%, transparent 80%)',
        'blue-purple-glow': 'radial-gradient(circle, rgba(52,133,255,0.2) 0%, rgba(138,61,255,0.1) 50%, transparent 80%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        daisyRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'daisy-spin': 'daisyRotate 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
