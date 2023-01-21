import { styled, Text } from "@expense-divider/react";

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "$green100",

  h3: {
    color: "$purple600",
    fontSize: "$5xl",
  },

  h2: {
    fontSize: "$9xl",
  },

  "@media(max-width: 585px)": {
    h3: {
      color: "$purple600",
      fontSize: "$4xl",
    },

    h2: {
      fontSize: "$7xl",
      textAlign: "center",
    },
  },

  "@media(max-width: 770px)": {
    h3: {
      color: "$purple600",
      fontSize: "$4xl",
    },

    h2: {
      fontSize: "$8xl",
    },
  },
});

export const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  spacing: "1.5rem",
  width: "100%",
  height: "calc(100vh - 73px - 58px)",
  padding: "2rem 1rem",
  alignItems: "center",
  justifyContent: "center",

  [`> ${Text}`]: {
    maxWidth: 386,
    textAlign: "center",
  },
});
