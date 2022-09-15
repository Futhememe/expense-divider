import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  ExpenseDTO,
  useExpenseStore,
  editExpense as generalEditExpense,
  useConfigStore,
} from "../store";
import { useEffect } from "react";

interface ExpenseModalProps extends Omit<ModalProps, "children"> {
  selectedId?: string;
  mode?: "edit" | "idle";
}

export const ExpenseModal = ({
  mode = "idle",
  selectedId,
  ...rest
}: ExpenseModalProps) => {
  const title = {
    edit: "Editar despesa",
    idle: "Nova despesa",
  };

  const [storageList, setExpenses] = useLocalStorage<ExpenseDTO[]>(
    "expenseList",
    []
  );

  const {
    config: { firstUser, secondUser },
  } = useConfigStore();

  const { addExpense, getExpenseById, editExpense, expenseList } =
    useExpenseStore();

  const schema = yup
    .object({
      name: yup.string().required(),
      amount: yup.number().required(),
    })
    .required();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (mode === "edit") {
      setValue("name", getExpenseById(selectedId ?? "")?.expenseName);
      setValue("amount", getExpenseById(selectedId ?? "")?.total);
    } else if (mode === "idle") {
      reset({
        data: {
          name: "",
          amount: 0,
        },
      });
    }
  }, [mode]);

  const getValuePercentage = (amount: number, percentage: number) =>
    (percentage * amount) / 100;

  const onSubmit = ({ name, amount }: { name: string; amount: number }) => {
    const expense: ExpenseDTO = {
      id: crypto.randomUUID(),
      total: amount,
      expenseName: name,
      firstAmount: getValuePercentage(amount, firstUser.percentage),
      secondAmount: getValuePercentage(amount, secondUser.percentage),
    };

    if (mode === "idle") {
      addExpense(expense);
      setExpenses((prevState) => [...prevState, expense] as any);
    } else if (mode === "edit") {
      editExpense(selectedId ?? "", expense);
      setExpenses(generalEditExpense(storageList, selectedId ?? "", expense));
    }

    reset({
      data: {
        name: "",
        amount: 0,
      },
    });
    rest.onClose();
  };

  return (
    <Modal {...rest} size={["full", "md"]} motionPreset={"slideInBottom"}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <ModalHeader>{title[mode]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.name}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Insira o nome da despesa" />
                  )}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.amount}>
                <Controller
                  name="amount"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                      >
                        $
                      </InputLeftElement>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Insira o valor"
                      />
                    </InputGroup>
                  )}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              type="button"
              onClick={() => {
                reset();
                rest.onClose();
              }}
            >
              Cancelar
            </Button>
            <Button colorScheme="green" type="submit">
              Adicionar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
