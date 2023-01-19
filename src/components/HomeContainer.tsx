import { styled, Text } from "@expense-divider/react";

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$green100",

  h3: {
    color: "$purple600",
  },

  [`> ${Text}`]: {
    maxWidth: 386,
    textAlign: "center",
  },
});
