import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="font-mont">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
