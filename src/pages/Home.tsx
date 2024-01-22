import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nfts from "../components/Nfts";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" bg-[#050006] min-h-screen">
      <Header />
      <Hero />
      <Nfts />
      <section id="footer"></section>
      <Footer />
    </div>
  );
};

export default Home;
