import { styled } from "@expense-divider/react";

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "$green100",
})

export const CalculatorContainer = styled('div', {
  display: 'flex',
  minHeight: 'calc(100vh - 73px)',
})