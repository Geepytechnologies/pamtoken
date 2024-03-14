import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  total: string;
  exclusivity: string;
  participate: string;
  special: string;
};

const mintdetails = [
  {
    title: "OG Mint ",
    subtitle: "The Elite Collection",
    image: "/user.png",
    total: "100",
    exclusivity: "whitelisted community members only.",
    participate:
      "Ensure you are on the whitelist by contributing to the community through various means specified in our guidelines. Whitelisted wallets will have the priority to mint one of the 100 OG Mint NFTs.",
    special:
      "OG Mint NFTs are designed for the true connoisseurs and dedicated community members, offering exclusive benefits and recognition within our ecosystem.",
  },
  {
    title: "Main Mint",
    subtitle: "The Core Collection",
    image: "/mainmint.png",
    total: "300",
    exclusivity: "Open To: All community members, following the OG Mint phase.",
    participate:
      "Stay tuned for the official minting date and be ready. Main Mint operates on a first-come, first-served basis until all 300 are minted.",
    special:
      "Main Mint NFTs represent the backbone of our collection, featuring diverse and captivating artworks with a blend of rarity and exclusivity.",
  },
  {
    title: "General Mint",
    subtitle: "The Inclusive Collection",
    image: "/heart.png",
    total: "600",
    exclusivity: "The broader community with no whitelist requirements",
    participate:
      "Open immediately after the Main Mint phase concludes. A perfect opportunity for everyone interested in joining our ecosystem and owning a piece of our collective journey.",
    special:
      "General Mint NFTs are crafted to welcome a wider audience into our community, offering an accessible yet valuable entry into the world of NFTs and our ecosystem.",
  },
];

const Mintcard = ({
  title,
  subtitle,
  image,
  total,
  exclusivity,
  participate,
  special,
}: Props) => (
  <div className="border-2 border-[#1E1E1E] w-[100%] sm:w-[400px] md:w-[350px] min-h-[700px] rounded-[16px] p-4 flex flex-col justify-center">
    <img src={image} alt="" className="h-[128px] w-[128px] self-center" />
    <div className="my-4 flex flex-col gap-3">
      <p className="font-[700] text-[2rem] leading-6 text-center">{title}</p>
      <p className="font-[500] text-[20px] leading-6 text-center">{subtitle}</p>
    </div>
    <div className="flex flex-col gap-3">
      <div>
        <span className="font-[600] text-[1.3rem]">Total Arts Available:</span>{" "}
        {total}
      </div>
      <div>
        <span className="font-[600] text-[1.3rem]">Exclusivity:</span>
        <p>{exclusivity}</p>
      </div>
      <div>
        <span className="font-[600] text-[1.3rem]">- How to Participate:</span>
        <p>{participate}</p>
      </div>
      <div>
        <span className="font-[600] text-[1.3rem]">
          - Why It&apos;s Special:
        </span>
        <p>{special}</p>
      </div>
    </div>
  </div>
);

const Minting = () => {
  return (
    <div className="text-white p-5">
      <h1 className="lg:text-[5rem] md:text-[3rem] text-[2rem] leading-[80px] font-[700]">
        Minting Event
      </h1>
      <p className="text-[1.2rem] leading-9">
        Exclusive minting event for the Pam token NFT collection, a limited
        series of unique digital arts that embody our community's spirit and
        creativity. With 1,000 unique pieces spread across three distinct tiers
        - OG Mint, Main Mint, and General Mint - there&apos;s something special
        for every member of our beloved community. Here&apos;s everything you
        need to know to secure your piece of history.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start items-center gap-6 mt-9">
        {mintdetails.map((m, index) => (
          <Mintcard
            key={index}
            title={m.title}
            subtitle={m.subtitle}
            image={m.image}
            total={m.total}
            exclusivity={m.exclusivity}
            special={m.special}
            participate={m.participate}
          />
        ))}
      </div>
    </div>
  );
};

export default Minting;
