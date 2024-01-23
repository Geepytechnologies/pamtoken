import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-full h-[500px] mt-[160px] relative">
      <div className="w-[348px] h-[348px] blurdiv absolute top-0 "></div>
      <div className="absolute top-0">
        <div className="flex flex-col w-full gap-[64px] p-6  items-center justify-center">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#F6F6F6] text-center font-[700] leading-[100%] text-[40px] md:text-[80px]">
              The diamond hand meme token
            </p>
            <p className="text-[#F6F6F6] text-xl md:text-2xl font-[600] text-center">
              <span className="font-[400] text-[#D2D2D2]">PAM</span>, the
              ultimate meme token for diamond hands! Powered by cutting-edge AI
              tech, PAM isn&apos;t just a token, it&apos;s a platform for
              groundbreaking experiments in the ever-evolving crypto space!
            </p>
          </div>
          <div className="rounded-[24px] border-[2px] border-[#196D0C] px-9 py-2 text-[#F6F6F6] text-center">
            Get PAM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
