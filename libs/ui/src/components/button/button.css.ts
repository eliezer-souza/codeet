import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../theme/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    lineHeight: '1.25',
    fontWeight: theme.font.style.bold,
    borderRadius: theme.shape.borderRadius,
    transition: '0.25s',

    ':focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
    },
  },

  variants: {
    type: {
      solid: {
        backgroundColor: theme.color.primary.main,
        color: theme.color.white,

        ':hover': {
          backgroundColor: theme.color.primary.light,
        },
      },
      outline: {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: theme.color.primary.main,
        color: theme.color.primary.main,

        ':hover': {
          backgroundColor: theme.color.primary.main,
          color: theme.color.white,
        },
      },
    },
    size: {
      xs: {
        height: '1.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        paddingLeft: '8px',
        paddingRight: '8px',
      },
      sm: {
        height: '2rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        paddingLeft: '12px',
        paddingRight: '12px',
      },
      md: {
        height: '2.5rem',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
      lg: {
        height: '3rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        paddingLeft: '24px',
        paddingRight: '24px',
      },
    },
    rounded: {
      true: { borderRadius: theme.shape.rounded },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        background: theme.color.gray.light,
        color: theme.color.gray.dark,
        cursor: 'not-allowed',
        borderColor: theme.color.gray.light,

        ':hover': {
          background: theme.color.gray.light,
          color: theme.color.gray.dark,
        },
      },
    },
  },

  defaultVariants: {
    type: 'solid',
    size: 'md',
  },
});
