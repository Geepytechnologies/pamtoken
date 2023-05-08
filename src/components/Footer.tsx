import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-base flex flex-col">
      <div className="flex ">
        {/* logo */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 items-center ">
            <img
              className="w-[50px] h-[50px] rounded-full border-1 border-white"
              src="/image0.jpeg"
            />
            <h2 className="text-white text-[40px] font-rob">Pam</h2>
          </div>
          <p className="text-white">
            Pam is an experimental meme token with 0 intrinsic value or
            expectation of financial return. There is no formal team or roadmap.
            The token is completely useless and for fun purposes only.
          </p>
        </div>
        {/* socials */}
        <div className="flex-[3]">
          <p className="text-gray-500">Socials</p>
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
      <hr />
      <div className="flex items-center justify-center p-5 gap-2 text-white">
        <AiOutlineCopyright />
        <p>{year} | The Pam Project. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
