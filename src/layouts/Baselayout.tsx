import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Baselayout = ({ children }: Props) => {
  return (
    <div className="bg-[#050006]">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Baselayout;
