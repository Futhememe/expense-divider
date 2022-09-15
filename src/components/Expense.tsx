import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Heading,
  Highlight,
  IconButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useConfigStore } from "../store";

import { formatToBRL } from "../utils/formatters";

interface IExpense {
  name: string;
  total: number;
  firstAmount: number;
  secondAmount: number;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export const Expense = ({
  name,
  total,
  firstAmount,
  secondAmount,
  onClickEdit,
  onClickDelete,
}: IExpense) => {
  const {
    config: { firstUser, secondUser },
  } = useConfigStore();

  return (
    <Flex w="100%" flexDir="column">
      <Flex justifyContent="space-between">
        <Heading fontSize="2xl" mb="1rem">
          {name} = &nbsp;
          <Highlight query={formatToBRL(total)} styles={{ color: "#C39A47" }}>
            {formatToBRL(total)}
          </Highlight>
        </Heading>
        <Flex>
          <IconButton
            colorScheme="transparent"
            aria-label="edit expense"
            icon={<EditIcon />}
            onClick={onClickEdit}
          />
          <IconButton
            colorScheme="transparent"
            aria-label="delete expense"
            onClick={onClickDelete}
            icon={<DeleteIcon />}
          />
        </Flex>
      </Flex>
      <UnorderedList fontWeight="medium" mb="1.5rem">
        <ListItem mb="0.5rem">
          <Highlight
            query={formatToBRL(firstAmount)}
            styles={{ color: "#59936D" }}
          >
            {`${firstUser.name} -> ${formatToBRL(firstAmount)}`}
          </Highlight>
        </ListItem>
        <ListItem>
          <Highlight
            query={formatToBRL(secondAmount)}
            styles={{ color: "#59936D" }}
          >
            {`${secondUser.name} -> ${formatToBRL(secondAmount)}`}
          </Highlight>
        </ListItem>
      </UnorderedList>
      <Divider />
    </Flex>
  );
};
