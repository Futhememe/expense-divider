import { EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";

export const Percentage = () => {
  return (
    <Tooltip
      label="Clique no icone ao lado para editar as porcentagens e nomes"
      placement="bottom-start"
    >
      <Flex
        w="100%"
        bgColor="#252525"
        py="0.25rem"
        px="1rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontWeight="bold">🚧 Esther -&gt; 25% | Gustavo -&gt; 75%</Text>
        <IconButton
          colorScheme="transparent"
          aria-label="edit expense"
          icon={<EditIcon />}
          onClick={() => {}}
        />
      </Flex>
    </Tooltip>
  );
};
