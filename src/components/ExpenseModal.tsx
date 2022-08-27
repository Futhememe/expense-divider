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

export const ExpenseModal = ({ ...rest }: Omit<ModalProps, "children">) => {
  const schema = yup
    .object({
      name: yup.string().required(),
      amount: yup.number().required(),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getValuePercentage = (amount: number, percentage: number) =>
    (percentage * amount) / 100;

  const onSubmit = ({ name, amount }: { name: string; amount: number }) => {
    const expense = {
      total: amount,
      expenseName: name,
      esther: getValuePercentage(amount, 25),
      gustavo: getValuePercentage(amount, 75),
    };
    console.log(expense);
  };

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <ModalHeader>Nova Despesa</ModalHeader>
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
