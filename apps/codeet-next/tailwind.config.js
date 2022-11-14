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
      colors: {
        ...colors,
        lightPrimary: '#2D0973',
        primary: '#24075b',
        darkPrimary: '#1B0543',
        yellow: '#FFD302',
        pink: '#FF0049',
        magenta: '#AD01B9',
        violet: '#5D00C2',
        bluedark: '#331CF2',
        blue: '#1143FC',
        bluelight: '#0097F0',
      },
    },
  },
  plugins: [],
};
