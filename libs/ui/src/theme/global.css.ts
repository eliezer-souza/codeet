import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  fontFamily: theme.font.family,
  overscrollBehaviorY: 'none',
  backgroundColor: theme.color.background,
});
