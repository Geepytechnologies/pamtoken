import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: -10,
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col w-full items-center justify-center mt-[150px]"
    >
      <div className="p-5 text-white gap-3  md:flex md:flex-col md:justify-center ">
        <h2 className="lg:text-[5rem] md:text-[3.8rem] text-[2rem] md:leading-[80px] font-[700] text-center">
          Portals to Possibilities
        </h2>
        <p className="text-[1.5rem] text-left md:text-center leading-[36px] my-5">
          <span className="font-[600]">PAM NFT.</span> PAM introduces a
          collection of exclusive NFTs that go beyond traditional digital art.
          These NFTs serve as portals, granting holders access to exclusive
          benefits, events, and experiences within the PAM ecosystem. Owning a
          PAM NFT is not just a status symbol; it's a gateway to a world of
          opportunities.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
