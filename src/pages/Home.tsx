import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tokensupply from "../components/Tokensupply";
import Roadmap from "../components/Roadmap";
import Howtobuy from "../components/Howtobuy";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="font-mont">
      <Header />
      <Hero />
      <Tokensupply />
      <Howtobuy />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
