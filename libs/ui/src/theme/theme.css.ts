import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme('body', {
  color: {
    primary: {
      main: '#24075b',
      light: '#1B0543',
      dark: '#2D0973',
    },
    yellow: '#FFD302',
    pink: '#FF0049',
    magenta: '#AD01B9',
    violet: '#5D00C2',
    blue: '#1143FC',
    white: '#FFFFFF',
    background: '#F3F4FD',
    gray: {
      main: '#a0aec0',
      light: '#cbd5e0',
      dark: '#718096',
    },
  },
  font: {
    family: '"Poppins", sans-serif',
    style: {
      bold: '600',
    },
  },
  shape: {
    borderRadius: '6px',
    rounded: '50%',
  },
});
