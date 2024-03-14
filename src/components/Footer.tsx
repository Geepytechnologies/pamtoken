import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsDiscord, BsTwitter, FaTelegramPlane, GrMail } from "react-icons/all";
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const email = "Pamtoken4@gmail.com, contact@pamtoken.io";

  const copyToClipboard = async () => {
    const address = "0xB83b945C80c37A1f704bc28ADaA026052B7982FF";
    try {
      await navigator.clipboard.writeText(address);
      alert("Address copied to clipboard");
    } catch (err) {
      console.error("Unable to copy text to clipboard", err);
    }
  };
  return (
    <div className="flex flex-col relative w-full  ">
      <div className="">
        <div className="flex flex-col mt-4 ">
          {/* logo */}
          <div className="flex items-center justify-center ">
            <div className="flex gap-2 p-2 items-center justify-center">
              <img
                className="w-[40px] h-[40px] rounded-full border-1 border-white"
                src="/image0.jpeg"
              />
            </div>
            <p className="text-white text-center text-[32px] font-[700] ">
              PAM
            </p>
          </div>

          <div>
            <p className="font-[500] text-white text-center pl-8 pt-8">
              Contact: {email}
            </p>
          </div>
          {/* socials */}
          <div className="my-2 items-center justify-center flex  flex-col">
            <div className="flex items-center justify-center mt-2">
              <div className="text-light text-[30px] flex gap-3">
                <Link to="https://x.com/Pamtoken_?t=sWu8NGS-9vmt8Jn9zMYbbQ&s=09">
                  <img src="/X Logo.svg" className="w-[40px] h-[40px]" />
                </Link>
                <Link to="https://discord.gg/R7F8NDpdwT">
                  <img src="/Discord.svg" className="w-[40px] h-[40px]" />
                </Link>
                <Link to="https://t.me/PAMCOMUNITY">
                  <img src="/telegram.svg" className="w-[40px] h-[40px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* contract address */}
        <div className="w-full my-[10px] flex items-center justify-center">
          <div className="border py-1 px-2 border-[#A7A5A5] flex flex-row items-center justify-center gap-8  rounded-[16px]">
            <div className="gap-2 hidden md:flex items-center">
              <p className="text-[#22E406] text-[17px] font-[600]">
                Copy contract phrase
              </p>
              <div className="w-[1px] h-[38px] bg-[#F6F6F6]"></div>
            </div>
            <p className="text-[#F6F6F6] text-[17px]">0xB83b945C.....</p>
            <div
              onClick={copyToClipboard}
              className="rounded-[16px] cursor-pointer text-[17px] border-2 shadow-md flex items-center gap-3 bg-[#33244d] text-white px-2 py-1"
            >
              <span>Copy</span>
              <IoCopyOutline className="text-[20px]" />
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
    </div>
  );
};

export default Footer;
