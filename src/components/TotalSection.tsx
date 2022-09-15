import {
  Divider,
  Flex,
  Heading,
  Highlight,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useConfigStore, useExpenseStore } from "../store";

import { formatToBRL, getValuePercentage } from "../utils/formatters";

export const TotalSection = () => {
  const { expenseList } = useExpenseStore();
  const {
    config: { firstUser, secondUser },
  } = useConfigStore();

  const getTotalFromExpenseList = (key: "total") => {
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
            query={formatToBRL(
              getValuePercentage(
                getTotalFromExpenseList("total"),
                firstUser.percentage
              )
            )}
            styles={{ color: "#59936D" }}
          >
            {`${firstUser.name} -> ${formatToBRL(
              getValuePercentage(
                getTotalFromExpenseList("total"),
                firstUser.percentage
              )
            )}`}
          </Highlight>
        </ListItem>
        <ListItem>
          <Highlight
            query={formatToBRL(
              getValuePercentage(
                getTotalFromExpenseList("total"),
                secondUser.percentage
              )
            )}
            styles={{ color: "#59936D" }}
          >
            {`${secondUser.name} -> ${formatToBRL(
              getValuePercentage(
                getTotalFromExpenseList("total"),
                secondUser.percentage
              )
            )}`}
          </Highlight>
        </ListItem>
      </UnorderedList>
      <Divider />
    </Flex>
  );
};
