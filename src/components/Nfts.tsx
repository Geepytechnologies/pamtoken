import React from "react";
import Nftcard, { Infts } from "./Nftcard";

type Props = {};

const mynfts: Infts[] = [
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "",
    type: "getnft",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam2.png",
    type: "",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam4.png",
    type: "",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam5.png",
    type: "",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "",
    type: "getnft",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam2.png",
    type: "",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam4.png",
    type: "",
  },
  {
    title: "PAM NFT",
    subtitle: "Diamond Hand",
    image: "/pam5.png",
    type: "",
  },
];

const Nfts = (props: Props) => {
  return (
    <div className="flex nfts max-w-full overflow-hidden pl-5 my-[100px]  flex-row gap-8">
      {mynfts.map((item, i) => (
        <Nftcard
          key={i}
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
