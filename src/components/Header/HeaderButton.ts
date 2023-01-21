import { styled } from "@expense-divider/react";

export const HeaderButton = styled('button', {
  all: 'unset',
  display: 'flex',
  backgroundColor: 'transparent',

  fontFamily: '$default',
  color: '$purple900',

  padding: '$3 $4',

  borderRadius: '$md',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$purple400'
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  transition: '0.4s',

  variants: {
    checked: {
      true: {
        backgroundColor: '$purple400',
      },

      false: {
        backgroundColor: 'transparent'
      }
    }
  },

  defaultVariants: {
    checked: false
  }
})