import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { CalculatorContainer, Container } from "./styles";

const Calculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expense divider | Calculadora</title>
      </Head>
      <Container>
        <Header />
        <CalculatorContainer></CalculatorContainer>
      </Container>
    </>
  );
};

export default Calculator;
