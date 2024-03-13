import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row font-mont relative">
      <div className="w-[348px] h-[348px] blurdiv absolute top-0 right-0 "></div>
      <div className="w-[348px] h-[348px] blurdiv2 absolute top-0 right-0"></div>
      {/* <div className="w-[348px] h-[348px] blurdiv absolute top-0 right-0 "></div> */}

      {/* <div className="absolute -top-[3px] h-1 blur-lg  w-full bg-[black]"></div> */}
      <div className="text-white p-2 md:flex md:flex-col md:justify-center ">
        <h1 className="text-white text-[2rem] font-[500">PAM NFTs</h1>
        <h2 className="text-[1.2rem] italic"> Portals to Possibilities</h2>
        <p className="text-[0.9rem] my-2">
          PAM introduces a collection of exclusive NFTs that go beyond
          traditional digital art. These NFTs serve as portals, granting holders
          access to exclusive benefits, events, and experiences within the PAM
          ecosystem. Owning a PAM NFT is not just a status symbol; it's a
          gateway to a world of opportunities.
        </p>
      </div>
      <div className="order-first md:order-last flex items-center justify-center">
        <img src="/pam2.png" alt="pam token" className="" />
      </div>
    </div>
  );
};

export default About;
