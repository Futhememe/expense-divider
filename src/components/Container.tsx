import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "#191919", dark: "gray.900" };

  const color = { light: "white", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      minHeight={"100vh"}
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
