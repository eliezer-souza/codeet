import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../theme/theme.css';

const inputStyle = style({
  backgroundColor: 'inherit',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  outline: 'none',
  fontFamily: theme.font.family,

  '::placeholder': {
    color: theme.color.gray.main,
  },
});

const input_wrapper = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: theme.color.white,
    borderRadius: theme.shape.borderRadius,
    padding: '12px',
  },

  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        height: '24px',
      },
      sm: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        height: '32px',
      },
      md: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        height: '40px',
      },
      lg: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        height: '48px',
      },
    },
    disabled: {
      true: {
        backgroundColor: theme.color.gray.light,
        cursor: 'not-allowed',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const input_action = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8px',
  paddingLeft: '8px',
  height: '100%',
  borderLeftWidth: '1px',
  borderColor: theme.color.gray.main,
  color: theme.color.gray.main,
});

const input_icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '8px',
  height: '100%',
  color: theme.color.gray.main,
});

const input_label = recipe({
  base: {
    color: theme.color.gray.dark,
    fontFamily: theme.font.family,
  },

  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
      },
      sm: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      },
      md: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
      },
    },
    uppercase: {
      true: { textTransform: 'uppercase' },
    },
    error: {
      true: { color: theme.color.pink },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const input = {
  style: inputStyle,
  wrapper: input_wrapper,
  action: input_action,
  icon: input_icon,
  label: input_label,
};
