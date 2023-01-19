import { styled, Text } from "@expense-divider/react";

export const FooterContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$purple900',
  width: '100%',
  padding: '$4',

  [`> ${Text}`]: {
    color: '$green100'
  }
})