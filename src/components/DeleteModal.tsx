import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  useExpenseStore,
  removeExpense as generalRemoveExpense,
  ExpenseDTO,
} from "../store";

interface DeleteModalProps extends Omit<ModalProps, "children"> {
  expenseId?: string;
}

export const DeleteModal = ({ expenseId, ...rest }: DeleteModalProps) => {
  const [expenseList, setExpenses] = useLocalStorage<ExpenseDTO[]>(
    "expenseList",
    []
  );
  const { removeExpense } = useExpenseStore();

  const handleRemoveExpense = () => {
    setExpenses(generalRemoveExpense(expenseList, expenseId ?? ""));
    removeExpense(expenseId ?? "");
  };

  return (
    <Modal {...rest} size={["full", "md"]} motionPreset={"slideInBottom"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deletar despesa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Tem certeza que deseja apagar essa despesa, sei que é um alivio mas
            vai que você apertou por acidente
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            mr={3}
            type="button"
            onClick={() => {
              rest.onClose();
            }}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              handleRemoveExpense();
              rest.onClose();
            }}
          >
            Remover
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
