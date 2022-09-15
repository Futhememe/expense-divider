import {
  Button,
  Divider,
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
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface SimpleConfigModalProps extends Omit<ModalProps, "children"> {}

export const SimpleConfigModal = ({ ...rest }: SimpleConfigModalProps) => {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      firstPerc: yup.number().max(100).required(),
      secondName: yup.string().required(),
      secondPerc: yup.number().max(100).required(),
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
            <Stack margin={2} />
            <Text>
              Caso você queira saber quanto cada um vai pagar proporcional ao
              salário de vocês é só apertar no botão abaixo
            </Text>
            <Button w="100%" type="button" colorScheme="teal">
              Dividir por salário
            </Button>
            <Stack margin={2} />
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Sobre você</FormLabel>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Insira seu nome" />
                  )}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.amount}>
                <Controller
                  name="firstPerc"
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
                        placeholder="Insira a porcentagem que você irá pagar"
                      />
                    </InputGroup>
                  )}
                />
              </FormControl>
            </Stack>
            <Divider marginY={4} />
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Sobre seu parceiro[a]</FormLabel>
                <Controller
                  name="secondName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Insira o nome dele[a]" />
                  )}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.amount}>
                <Controller
                  name="secondPerc"
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
                        placeholder="Insira a porcentagem que ele[a] irá pagar"
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
