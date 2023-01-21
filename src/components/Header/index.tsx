import { ButtonsContainer, HeaderContainer } from "./styles";
import EDLogo from "../../assets/logo.svg";
import { HeaderButton } from "./HeaderButton";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={EDLogo} alt="logo" />
      <ButtonsContainer>
        <HeaderButton>Calculadora</HeaderButton>
        <HeaderButton>Minhas contas</HeaderButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
