import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
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
            <h2 className="text-white text-[40px] font-rob">Pam</h2>
          </div>
          <p className="text-white text-center md:text-left p-2">
            Pam is an experimental meme token with 0 intrinsic value
            <br /> or expectation of financial return. There is no formal team
            or roadmap. <br />
            The token is completely useless and for fun purposes only.
          </p>
        </div>
        {/* socials */}
        <div className="basis-[30%] my-2 items-center justify-center flex  md:flex-col">
          <p className="text-gray-500 hidden md:flex">Socials</p>
          <div>
            <SocialIcon
              url="https://twitter.com/Godspower_EC"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/in//godspower-enwereuzor-4861571a2"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://instagram.com/geepy_c"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/Geepytechnologies"
              fgColor="gray"
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center p-5 gap-2 text-white">
        <AiOutlineCopyright />
        <p>{year} | The Pam Project. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
