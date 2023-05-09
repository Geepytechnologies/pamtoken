import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsDiscord, BsTwitter, FaTelegramPlane } from "react-icons/all";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
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
            <h2 className="text-white text-[40px] font-rob">Pam</h2>
          </motion.div>
          <ul className="text-gray-300 hidden  lg:flex gap-9 text-[20px] items-center justify-center">
            <li>
              <Link to="#about">Ecosystem</Link>
            </li>
            <li>
              <Link to="#projects">Community</Link>
            </li>
            <li>
              <Link to="#contact">Roadmap</Link>
            </li>
            <li>
              <Link to="">What is Pam?</Link>
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
            href=""
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
            className="flex flex-row lg:hidden  text-[30px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <HiMenuAlt4 onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>

        <div
          className={`  ${
            menu
              ? "max-h-[220px] overflow-hidden md:hidden h-[220px] py-4 transition-[max-height] duration-500 ease-in-out "
              : "max-h-[0px] overflow-hidden h-[200px]   transition-[max-height] duration-500 ease-in-out"
          }`}
        >
          <div className="space-y-3 text-white">
            <Link
              to="#projects"
              className="flex gap-1 items-center justify-center"
            >
              <p>Ecosystem</p>
            </Link>
            <Link
              to="#contact"
              className="flex gap-1 items-center justify-center"
            >
              <p>Community</p>
            </Link>
            <div className="flex gap-1 items-center justify-center">
              <p>Roadmap</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-mygreen p-2 rounded-md text-white font-[500]">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="gap-3 flex items-center justify-center">
              <Link to="https://twitter.com/pamtoken10?t=uQCeam6fAmCTeF-dYHSfDQ&s=09">
                <BsTwitter className="text-gray-500 text-[28px] " />
              </Link>
              <Link to="https://t.me/PamTokenChannel">
                <FaTelegramPlane className="text-gray-500 text-[28px] " />
              </Link>
              <Link to="https://discord.gg/R7F8NDpdwT">
                <BsDiscord className="text-gray-500 text-[28px] " />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
