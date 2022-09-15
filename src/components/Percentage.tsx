import { EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { useConfigStore } from "../store";

export const Percentage = () => {
  const {
    config: { firstUser, secondUser },
  } = useConfigStore();

  return (
    <Tooltip
      // label="Clique no icone ao lado para editar as porcentagens e nomes"
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
        <Text fontWeight="bold">
          🚧 {firstUser.name} -&gt; {firstUser.percentage}% | {secondUser.name}{" "}
          -&gt; {secondUser.percentage}%
        </Text>
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
