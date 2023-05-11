import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {
  AiOutlineClose,
  BsDiscord,
  BsTwitter,
  FaTelegramPlane,
  GrMail,
  HiMenuAlt4,
} from "react-icons/all";

import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  const email = "contact@pamtoken.io";
  return (
    <>
      <header className="sticky bg-[rgb(36,36,36)] top-0 flex flex-col  w-full z-20  px-3 py-4">
        <div className="flex justify-between ">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex gap-2"
          >
            <img
              className="w-[50px] h-[50px] rounded-full border-1 border-white"
              src="/image0.jpeg"
            />
            <h2 className="text-mygreen text-[40px] font-arco">Pam</h2>
          </motion.div>
          <ul className="text-gray-300 hidden  lg:flex gap-9 text-[20px] items-center justify-center">
            <li>
              <a href="#footer">Community</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#about">What is Pam?</a>
            </li>
          </ul>
          <motion.a
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            href="#buy"
            className="flex-row cursor-pointer hidden lg:flex text-[18px] px-4 items-center text-mygreen mr-4 rounded-md  border-2 border-mygreen"
          >
            Buy Now
          </motion.a>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row lg:hidden cursor-pointer text-[30px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <HiMenuAlt4 onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>

        <div
          className={`  ${
            menu
              ? "max-h-[220px] overflow-hidden lg:hidden h-[220px] py-4 transition-[max-height] duration-500 ease-in-out "
              : "max-h-[0px] overflow-hidden h-[200px]   transition-[max-height] duration-500 ease-in-out"
          }`}
        >
          <div className="space-y-3 text-white">
            <a
              href="#footer"
              className="flex gap-1 items-center justify-center"
            >
              <p>Community</p>
            </a>
            <div className="flex gap-1 items-center justify-center">
              <a href="#roadmap">
                <p>Roadmap</p>
              </a>
            </div>
            <a href="#about" className="flex gap-1 items-center justify-center">
              <p>What is Pam?</p>
            </a>
            <div className="flex items-center justify-center">
              <a href="#buy">
                <button className="bg-mygreen p-2 rounded-md text-white font-[500]">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="text-light text-[30px] flex gap-3">
              <Link to="https://twitter.com/pamtoken10?t=uQCeam6fAmCTeF-dYHSfDQ&s=09">
                <BsTwitter />
              </Link>
              <Link to="https://t.me/PamTokenArmy">
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
      </header>
    </>
  );
};

export default Header;
