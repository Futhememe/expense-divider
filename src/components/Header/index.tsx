import { ButtonsContainer, HeaderContainer } from "./styles";
import EDLogo from "../../assets/logo.svg";
import { HeaderButton } from "./HeaderButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href="/">
        <Image className="logo" src={EDLogo} alt="logo" />
      </Link>
      <ButtonsContainer>
        <Link href="/calculator">
          <HeaderButton checked={router.pathname === "/calculator"}>
            Calculadora
          </HeaderButton>
        </Link>
        <Link href="/expenses">
          <HeaderButton checked={router.pathname === "/expenses"}>
            Minhas contas
          </HeaderButton>
        </Link>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
