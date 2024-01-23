import React from "react";

export interface Infts {
  title: string;
  subtitle: string;
  image: string;
  type: string;
}

const Nftcard = ({ title, subtitle, image, type }: Infts) => {
  const Getnfts = () => {
    return (
      <div className="nftcard flex flex-col items-center justify-center min-w-[400px] h-[550px]">
        {/* <img src="/PAM NFT.svg" className="w-[100px] h-auto" /> */}
        <p className="text-[100px] stroketext font-[700] text-center">
          PAM NFTs
        </p>

        <div className="border-[2px] border-[#196D0C] font-[400] text-[23px] rounded-[24px] px-[100px] py-2 text-[#F6F6F6]">
          Get NFTs
        </div>
      </div>
    );
  };
  return (
    <>
      {type == "getnft" ? (
        <Getnfts />
      ) : (
        <div className="nftcard flex flex-col min-w-[400px] h-[550px]">
          <img src={image} className="flex-1" />
          <div className="p-6">
            <p className="text-[#F6F6F6] text-[32px] font-[700]">
              {title.split(" ")[0]}{" "}
              <span className="text-[21px]">{title.split(" ")[1]}</span>
            </p>
            <p className="text-[#D2D2D2] text-[17px] leading-[25px]">
              {subtitle}
            </p>
            <div className="h-[2px] w-full bg-white">
              <div className="bg-[#22E406] h-full w-[50%]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nftcard;
