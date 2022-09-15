import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
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
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ConfigDTO, useConfigStore } from "../store";

interface SimpleConfigModalProps extends Omit<ModalProps, "children"> {}
interface ConfigSchema {
  firstName: string;
  firstPerc: number;
  secondName: string;
  secondPerc: number;
}

export const SimpleConfigModal = ({ ...rest }: SimpleConfigModalProps) => {
  const { editConfig } = useConfigStore();
  const [config, setConfig] = useLocalStorage<ConfigDTO>("config", {
    firstUser: {
      name: "Pessoa 1",
      percentage: 50,
    },
    secondUser: {
      name: "Pessoa 2",
      percentage: 50,
    },
  });

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

  const onSubmit = ({
    firstName,
    firstPerc,
    secondName,
    secondPerc,
  }: ConfigSchema) => {
    editConfig({
      firstUser: {
        name: firstName,
        percentage: firstPerc,
      },
      secondUser: {
        name: secondName,
        percentage: secondPerc,
      },
    });

    setConfig({
      firstUser: {
        name: firstName,
        percentage: firstPerc,
      },
      secondUser: {
        name: secondName,
        percentage: secondPerc,
      },
    });

    rest.onClose();
  };

  return (
    <Modal {...rest} size={["full", "xl"]} motionPreset={"slideInBottom"}>
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
            <Button mt="1rem" w="100%" type="button" colorScheme="green">
              Dividir por salário
            </Button>
            <Stack margin={2} />
            <Grid
              gap={2}
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              alignItems="flex-end"
            >
              <GridItem>
                <FormControl isInvalid={!!errors.firstName}>
                  <FormLabel>Sobre você</FormLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={config.firstUser.name}
                    render={({ field }) => (
                      <Input {...field} placeholder="Insira seu nome" />
                    )}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.firstPerc}>
                  <Controller
                    name="firstPerc"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={config.firstUser.percentage}
                    render={({ field }) => (
                      <InputGroup>
                        <InputRightElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                        >
                          $
                        </InputRightElement>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Porcentagem que você irá pagar"
                        />
                      </InputGroup>
                    )}
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Divider marginY={4} />
            <Grid
              gap={2}
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              alignItems="flex-end"
            >
              <GridItem>
                <FormControl isInvalid={!!errors.secondName}>
                  <FormLabel>Sobre seu parceiro[a]</FormLabel>
                  <Controller
                    name="secondName"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={config.secondUser.name}
                    render={({ field }) => (
                      <Input {...field} placeholder="Insira o nome dele[a]" />
                    )}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.secondPerc}>
                  <Controller
                    name="secondPerc"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={config.secondUser.percentage}
                    render={({ field }) => (
                      <InputGroup>
                        <InputRightElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                        >
                          $
                        </InputRightElement>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Porcentagem que ele[a] irá pagar"
                        />
                      </InputGroup>
                    )}
                  />
                </FormControl>
              </GridItem>
            </Grid>
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
