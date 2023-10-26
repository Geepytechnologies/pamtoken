import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsDiscord, BsTwitter, FaTelegramPlane, GrMail } from "react-icons/all";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const email = "Pamtoken4@gmail.com";
  return (
    <div className="bg-base flex flex-col">
      <div className="flex flex-col md:flex-row ">
        {/* logo */}
        <div className="flex flex-col basis-[70%]">
          <div className="flex gap-2 p-2 items-center justify-center md:justify-start ">
            <img
              className="w-[50px] h-[50px] rounded-full border-1 border-white"
              src="/image0.jpeg"
            />
            <h2 className="text-[40px] font-arco text-mygreen">Pam</h2>
          </div>
          <p className="text-white text-center text-[12px] lg:text-[14px] md:text-left p-2">
            Pam is an experimental meme token with 0 intrinsic value or
            expectation of financial return. There is no formal team or roadmap.
            The token is completely useless and for fun purposes only.
          </p>
        </div>
        {/* socials */}
        <div className="basis-[30%] my-2 items-center justify-center flex  md:flex-col">
          <p className="text-gray-500 hidden md:flex">Socials</p>
          <div className="flex items-center justify-center mt-2">
            <div className="text-light text-[30px] flex gap-3">
              <Link to="https://twitter.com/pamtoken10?t=uQCeam6fAmCTeF-dYHSfDQ&s=09">
                <BsTwitter />
              </Link>
              <Link to="https://t.me/PAMCommunity">
                <FaTelegramPlane />
              </Link>
              <Link to="https://discord.gg/R7F8NDpdwT">
                <BsDiscord />
              </Link>
              <a href={`mailto:${email}`}>
                <GrMail />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center p-5 gap-2 text-white">
        <AiOutlineCopyright />
        <p className="text-[12px] lg:text-[14px]">
          {year} | The Pam Project. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
