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
    <div className="font-mont">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="tokenonomics">
        <Tokensupply />
      </section>
      <div className="bg-base w-full">
        <section id="buy">
          <Howtobuy />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
