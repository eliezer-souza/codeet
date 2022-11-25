const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { colors } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{app,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
    },
    fill: {
      none: 'none',
    },
    extend: {
      gridTemplateColumns: {
        'fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
      },
      colors: {
        ...colors,
        background: '#F3F4FD',
        lightPrimary: '#2D0973',
        primary: '#24075b',
        darkPrimary: '#1B0543',
        yellow: {
          main: '#FFD302',
          light: '#FFED9C',
          dark: '#CFAA00',
        },
        pink: {
          main: '#FF0049',
          light: '#FF9AB7',
          dark: '#CC003A',
        },
        magenta: {
          main: '#AD01B9',
          light: '#F355FE',
          dark: '#7E0186',
        },
        violet: {
          main: '#5D00C2',
          dark: '#45008F',
        },
        blue: {
          main: '#1143FC',
          light: '#0097F0',
          dark: '#0330D7',
        },
      },
    },
  },
  plugins: [],
};
