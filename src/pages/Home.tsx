import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tokensupply from "../components/Tokensupply";
import Nfts from "../components/Nfts";
import About from "../components/About";
import Minting from "../components/Minting";
import Note from "../components/Note";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" bg-[#050006] min-h-screen">
      <div className="relative h-[600px] w-full">
        <div className="w-full h-full bg-[url('/aitech2.png')] bg-cover bg-center absolute top-0 opacity-[0.25] "></div>
        <div className="w-full h-full absolute top-0">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="  flex flex-1 flex-col relative">
        <About />
        <Nfts />
        <Minting />
        <Note />
        <Tokensupply />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
