import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tokensupply from "../components/Tokensupply";
import Nfts from "../components/Nfts";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="font-mont bg-[#050006] min-h-screen">
      <Header />
      <Hero />
      <Nfts />
      <Footer />
    </div>
  );
};

export default Home;
