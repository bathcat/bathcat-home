import typography from '@tailwindcss/typography';
import elevation from 'tailwindcss-elevation';
import { colorVariables } from './src/logic/tailwind-plugins';
import tailwindcssOpentype from 'tailwindcss-opentype';


export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Special Elite', 'serif'],
      mono: ['Space Mono', 'sans-serif'],
    },
    extend: {
      typography() {
        return {
          DEFAULT: {
            // This removes quotes from inline code blocks
            // Info here:
            // - https://futurestud.io/tutorials/tailwind-css-remove-backticks-around-inline-code
            css: {
              'code::before': {
                content: 'none',
              },
              'code::after': {
                content: 'none',
              },
              'blockquote p:first-of-type::before': { content: 'none' },
              'blockquote p:first-of-type::after': { content: 'none' },
            },
          },
        };
      },
    },
  },
  plugins: [typography(), tailwindcssOpentype, elevation, colorVariables],
};
