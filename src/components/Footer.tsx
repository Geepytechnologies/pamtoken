import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsDiscord, BsTwitter, FaTelegramPlane, GrMail } from "react-icons/all";
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const email = "Pamtoken4@gmail.com";
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {/* logo */}
        <div className="flex flex-col mb-[70px]">
          <div className="flex gap-2 p-2 items-center justify-center">
            <img
              className="w-[100px] h-[100px] rounded-full border-1 border-white"
              src="/image0.jpeg"
            />
          </div>
          <p className="text-[#F6F6F6] text-center text-[32px] font-[700] ">
            PAM Token
          </p>
        </div>
        {/* socials */}
        <div className="my-2 items-center justify-center flex  flex-col">
          <div className="flex items-center justify-center mt-2">
            <div className="text-light text-[30px] flex gap-8">
              <Link to="https://x.com/Pamtoken_?t=sWu8NGS-9vmt8Jn9zMYbbQ&s=09">
                <img src="/X Logo.svg" />
              </Link>
              <Link to="https://discord.gg/R7F8NDpdwT">
                <img src="/Discord.svg" />
              </Link>
              <Link to="https://t.me/PAMCOMUNITY">
                <img src="/telegram.svg" />
              </Link>
            </div>
          </div>
        </div>
        {/* contract address */}
        <div className="w-full my-[80px] flex items-center justify-center">
          <div className="border w-[70%] py-2 border-[#A7A5A5] flex items-center justify-center gap-8  rounded-[16px]">
            <div className="gap-2 flex items-center">
              <p className="text-[#22E406] text-[36px] font-[600]">
                Copy contract phrase
              </p>
              <div className="w-[3px] h-[38px] bg-[#F6F6F6]"></div>
            </div>
            <p className="text-[#F6F6F6] text-[36px]">0xB83b945C.....</p>
            <div className="rounded-[16px] text-[36px] border flex items-center gap-3 border-[#22E406] text-[#F6F6F6] px-6 py-2">
              <span>Copy</span>
              <IoCopyOutline className="text-[40px]" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex  items-center justify-center p-5 gap-2 text-white">
        <AiOutlineCopyright />
        <p className="text-[12px] lg:text-[14px]">
          {year} | The Pam Project. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
