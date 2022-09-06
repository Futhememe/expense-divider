import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    minHeight="100vh"
    py="2rem"
    px="1rem"
    alignItems="center"
    {...props}
  />
);
