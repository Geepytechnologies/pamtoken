import React from "react";
import Nftcard, { Infts } from "./Nftcard";

type Props = {};

const mynfts: Infts[] = [
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "",
    type: "getnft",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam2.png",
    type: "",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam4.png",
    type: "",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam5.png",
    type: "",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "",
    type: "getnft",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam2.png",
    type: "",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam4.png",
    type: "",
  },
  {
    title: "Pam Nft",
    subtitle: "lorem",
    image: "/pam5.png",
    type: "",
  },
];

const Nfts = (props: Props) => {
  return (
    <div className="flex max-w-full pl-5 overflow-x-scroll mb-[100px]  flex-row gap-8">
      {mynfts.map((item, i) => (
        <Nftcard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Nfts;
