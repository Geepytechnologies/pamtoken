import { motion } from "framer-motion";
import React from "react";

type Props = {};

type noteprops = {
  title: string;
  subtitle: string;
};

const notes = [
  {
    title: "Whitelisting Process",
    subtitle:
      "Details on how to get whitelisted for the OG Mint are available on our official channels. Criteria include community contributions, engagement, and other factors",
  },
  {
    title: "Minting Dates",
    subtitle:
      "Specific dates and times for each minting phase will be announced shortly. Stay alert and mark your calendars!",
  },
  {
    title: "Wallet Preparation",
    subtitle:
      "Ensure your wallet is compatible and funded with sufficient cryptocurrency (specify the type, e.g., ETH) for minting and transaction fees.",
  },
  {
    title: "Community Benefits",
    subtitle:
      "Owning an NFT from any tier not only makes you a token holder but also opens up a realm of privileges, including access to exclusive events, voting rights in certain decisions, and a share in our growing ecosystem.",
  },
];
const Notecard = ({ title, subtitle }: noteprops) => (
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
    className="flex flex-col justify-center border border-[#D40BA2DB] rounded-3xl text-white w-[100%] sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[250px] sm:min-h-[350px] md:min-h-[300px] p-4 bg-[#D40BA203] glass"
  >
    <h1 className="font-[700] text-[1.7rem]  md:text-[2rem] leading-[60px]">
      {title}
    </h1>
    <h2 className="">{subtitle}</h2>
  </motion.div>
);
const Note = (props: Props) => {
  return (
    <div className="relative w-full h-[1300px] sm:h-[900px] md:h-[800px] mt-[100px]  ">
      <img src="/Ellipse-big.svg" alt="" className="absolute-center" />
      <img
        src="/Ellipse-big.svg"
        alt=""
        className="absolute top-[10%] right-0 w-[100px] h-[100px]"
      />
      <img
        src="/Ellipse-big.svg"
        alt=""
        className="absolute top-[20%] left-0 w-[70px] h-[70px]"
      />
      <div className="absolute top-0 w-full h-full p-5 ">
        <h1 className="font-[700] md:text-[3rem] text-[2rem] text-white ">
          Important Note
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3   justify-items-start items-center gap-4 mt-4">
          {notes.map((note, index) => (
            <Notecard key={index} title={note.title} subtitle={note.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
