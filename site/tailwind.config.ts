import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandPurple: '#6A00F4',
        brandGold: '#F9B234',
        brandInk: '#11111F'
      },
      fontFamily: {
        display: ['Cairo', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
