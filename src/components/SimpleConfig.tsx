import {
  Button,
  FormControl,
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
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface SimpleConfigModalProps extends Omit<ModalProps, "children"> {}

export const SimpleConfigModal = ({ ...rest }: SimpleConfigModalProps) => {
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

  const onSubmit = (data: any) => console.log(data);

  return (
    <Modal {...rest} size={["full", "md"]} motionPreset={"slideInBottom"}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <ModalHeader>Configurações</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Configure suas preferencias para separar suas contas com seu
              parceiro
            </Text>
            <Stack margin={4} />
            <Text>🚧 em breve</Text>
            {/* <Stack spacing={4}>
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
            </Stack> */}
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
