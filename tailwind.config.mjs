import { defineConfig } from 'tailwindcss';

export default defineConfig({
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  safelist: [
    'font-preahvihear',
    'font-plusjakarta',
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['Preahvihear', 'sans-serif'],
        plusjakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      }
    },
  },
  plugins: [],
});