import { styled } from "@expense-divider/react";

export const HeaderContainer = styled('div', {
  display: 'flex',
  width: '100%',

  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid $colors$purple900',

  padding: '$3 $6',

  '.logo': {
    cursor: 'pointer',
  }
})

export const ButtonsContainer = styled('div', {
  display: 'flex',

  gap: '$3'
})