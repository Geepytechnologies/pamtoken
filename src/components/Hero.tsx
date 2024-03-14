import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-full h-[600px] md:h-[650px] mb-[150px] relative">
      <div className="w-[348px] h-[348px] blurdiv absolute top-0 "></div>
      <div className="w-full h-full flex flex-row justify-center absolute top-0 ">
        <img
          src="/pamregen.png"
          className="absolute md:hidden top-[20%] animate-pulse left-0 w-[100px] h-[100px]"
        />
        <img
          src="/pamregen.png"
          className="absolute animate-pulse md:hidden top-[20%] right-0 w-[100px] h-[100px]"
        />
        <div className="flex  flex-col w-full  p-6  items-center justify-center">
          <div className="flex flex-col  gap-[16px] w-full">
            <p className="text-[#F6F6F6] text-center font-[700] md:leading-[80px] text-[40px] md:text-[3.8rem] lg:text-[5rem] self-center w-[80%] md:w-[70%]">
              The diamond hand meme token
            </p>
            <div className="flex flex-row w-full justify-between relative mb-4">
              <img
                src="/pamregen.png"
                className="hidden animate-pulse md:flex w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
              />
              <p
                className="text-[#F6F6F6] text-lg sm:text-xl md:text-2xl font-[600] text-center 
               w-full md:w-[70%] "
              >
                <span className="font-[400] text-[#D2D2D2]">PAM</span>, the
                ultimate meme token for diamond hands! Powered by cutting-edge
                AI tech, PAM isn&apos;t just a token, it&apos;s a platform for
                groundbreaking experiments in the ever-evolving crypto space!
              </p>
              <img
                src="/pamregen.png"
                className="hidden animate-pulse md:flex w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-[20px] ">
            <div className="rounded-[24px] border-[2px] border-[#196D0C] px-9 py-2 text-[#F6F6F6] text-center">
              Get PAM
            </div>
            <div className="rounded-[24px] border-[2px] border-[#196D0C] px-9 py-2 text-[#F6F6F6] text-center">
              Get PAM NFT
            </div>
          </div>
          <div className=" mt-3 w-[90%] md:w-[70%] lg:w-[60%] flex justify-between">
            <img
              src="/pamregen.png"
              className="animate-pulse w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
            />
            <img
              src="/pamregen.png"
              className="animate-pulse w-[70px] h-[70px] md:w-[100px] md:h-[100px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
