import { EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { useConfigStore } from "../store";

interface PercentageProps {
  onClickEdit: () => void;
}

export const Percentage = ({ onClickEdit }: PercentageProps) => {
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
          onClick={onClickEdit}
        />
      </Flex>
    </Tooltip>
  );
};
