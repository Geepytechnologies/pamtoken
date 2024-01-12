import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tokensupply from "../components/Tokensupply";
import Roadmap from "../components/Roadmap";
import Howtobuy from "../components/Howtobuy";
import About from "../components/About";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="font-mont bg-[#050006] min-h-screen">
      <Header />
      <Hero />

      <section id="footer"></section>
      <Footer />
    </div>
  );
};

export default Home;
