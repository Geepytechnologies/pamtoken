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
      <div className="nftcard glass nfts-slide flex flex-col items-center justify-center min-w-[300px] h-[400px]">
        {/* <img src="/PAM NFT.svg" className="w-[100px] h-auto" /> */}
        <p className="text-[80px] font-popp stroketext leading-[150px] font-[700] text-center">
          PAM NFTs
        </p>

        <div className="border-[2px] border-[#196D0C] font-[400] text-[23px] rounded-[24px] px-[60px] py-2 text-[#F6F6F6]">
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
        <div className="nftcard glass nfts-slide flex flex-col min-w-[300px] h-[400px]">
          <img src={image} className="h-[250px] w-full" />
          <div className="p-6 flex flex-col gap-4  ">
            <p className="text-[#F6F6F6] text-[32px] font-[700]">
              {title.split(" ")[0]}{" "}
              <span className="text-[21px]">{title.split(" ")[1]}</span>
            </p>
            <p className="text-[#D2D2D2] text-[17px] leading-[25px]">
              {subtitle}
            </p>
            {/* <div className="h-[2px] w-full bg-white">
              <div className="bg-[#22E406] h-full w-[50%]"></div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Nftcard;
