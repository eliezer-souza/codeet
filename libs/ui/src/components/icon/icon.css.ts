import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../theme/theme.css';

export const iconStyle = recipe({
  base: {
    color: 'inherit',
  },

  variants: {
    primary: {
        true: { color: theme.color.primary.main },
    },
    sizes: {
      xs: { fontSize: '0.75rem', lineHeight: '1rem' },
      sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
      md: { fontSize: '1rem', lineHeight: '1.5rem' },
      lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
    },
  },

  defaultVariants: {
    primary: true,
    sizes: 'md'
  }
});

