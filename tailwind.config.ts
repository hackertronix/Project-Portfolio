import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#EFF2F6',
      },

      backgroundImage: {
        'halo-gradient':
          'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(252,245,234,1) 34%, rgba(252,245,234,1) 50%, rgba(255,255,255,1) 100%)',
        'line-gradient':
          'radial-gradient(circle, rgba(252,246,234,1) 0%, rgba(241,166,45,1) 39%, rgba(241,166,45,1) 57%, rgba(252,246,234,1) 100%);',
      },

      colors: {
        salmon: {
          '50': '#fef8ee',
          '100': '#fdf0d7',
          '200': '#f9d9a7',
          '300': '#f6c37b',
          '400': '#f1a046',
          '500': '#ed8422',
          '600': '#de6b18',
          '700': '#b85116',
          '800': '#934119',
          '900': '#8C7147',
          '950': '#401a0a',
        },
      },
    },
  },
  emmetCompletions: true,
  plugins: [],
};
export default config;
