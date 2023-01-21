import { Heading, Text } from "@expense-divider/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContainer, MainContainer } from "../components/HomeContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expense divider | Home</title>
      </Head>
      <HomeContainer>
        <Header />
        <MainContainer>
          <Heading as="h3">Bem-vindo ao</Heading>
          <Heading>Expense divider</Heading>
          <Text>
            Gerencie suas contas e veja quanto cada amigo ou parceiro precisa
            pagar em cada conta sem estresse e super simples
          </Text>
        </MainContainer>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
