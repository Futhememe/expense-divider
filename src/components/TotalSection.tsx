import {
  Divider,
  Flex,
  Heading,
  Highlight,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useExpenseStore } from "../store";

import { formatToBRL } from "../utils/formatters";

export const TotalSection = () => {
  const { expenseList } = useExpenseStore();

  const getTotalFromExpenseList = (key: "total" | "esther" | "gustavo") => {
    return expenseList
      .map((el) => el[key])
      .reduce((prev, cur) => prev + cur, 0);
  };

  return (
    <Flex w="100%" flexDir="column">
      <Flex justifyContent="space-between">
        <Heading fontSize="2xl" mb="1rem">
          Total = &nbsp;
          <Highlight
            query={formatToBRL(getTotalFromExpenseList("total"))}
            styles={{ color: "#C39A47" }}
          >
            {formatToBRL(getTotalFromExpenseList("total"))}
          </Highlight>
        </Heading>
      </Flex>
      <UnorderedList fontWeight="medium" mb="1.5rem">
        <ListItem mb="0.5rem">
          <Highlight
            query={formatToBRL(getTotalFromExpenseList("esther"))}
            styles={{ color: "#59936D" }}
          >
            {`Esther -> ${formatToBRL(getTotalFromExpenseList("esther"))}`}
          </Highlight>
        </ListItem>
        <ListItem>
          <Highlight
            query={formatToBRL(getTotalFromExpenseList("gustavo"))}
            styles={{ color: "#59936D" }}
          >
            {`Gustavo -> ${formatToBRL(getTotalFromExpenseList("gustavo"))}`}
          </Highlight>
        </ListItem>
      </UnorderedList>
      <Divider />
    </Flex>
  );
};