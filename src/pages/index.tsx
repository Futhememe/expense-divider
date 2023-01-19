import { Heading, Text } from "@expense-divider/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { HomeContainer } from "../components/HomeContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expense divider | Home</title>
      </Head>
      <HomeContainer>
        <Heading as="h3" size="2xl">
          Bem-vindo ao
        </Heading>
        <Heading size="6xl">Expense divider</Heading>
        <Text>
          Gerencie suas contas e veja quanto cada amigo ou parceiro precisa
          pagar em cada conta sem estresse e super simples
        </Text>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
