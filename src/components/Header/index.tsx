import { ButtonsContainer, HeaderContainer } from "./styles";
import EDLogo from "../../assets/logo.svg";
import { HeaderButton } from "./HeaderButton";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={EDLogo} alt="logo" />
      <ButtonsContainer>
        <HeaderButton>Calculadora</HeaderButton>
        <Link href="/expenses">
          <HeaderButton>Minhas contas</HeaderButton>
        </Link>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
