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
  HiOutlineMenu,
} from "react-icons/all";

import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  const email = "Pamtoken4@gmail.com";
  return (
    <>
      <header className="flex flex-col   w-full  px-3 py-4">
        <div className="relative h-full w-full">
          <div className="w-[250px] h-[250px] blurdiv absolute top-0 "></div>
        </div>

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
            className="flex gap-2 z-[200]"
          >
            <img
              className="w-[60px] h-[60px] rounded-full border-1 border-white"
              src="/image0.jpeg"
            />
          </motion.div>
          <ul className="text-[#F6F6F6] hidden  lg:flex gap-9 text-[16px] items-center justify-center">
            <li>
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                Whitepaper
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                PAM NFT
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                Coin market cap
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                Dexscrener
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                Pancake swap
              </a>
            </li>
          </ul>

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
            className="flex flex-row lg:hidden cursor-pointer text-[40px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <HiOutlineMenu onClick={() => togglemenu()} />}
            {/* {menu && <AiOutlineClose onClick={() => togglemenu()} />} */}
          </motion.div>
        </div>

        <div
          className={`  ${
            menu
              ? "max-h-screen flex flex-col bg-[#050006] fixed z-[999] top-0 left-0 w-full overflow-hidden lg:hidden h-screen py-8 transition-[max-height] duration-500 ease-in-out "
              : "max-h-[0px] overflow-hidden h-screen bg-[#050006]  transition-[max-height] duration-100 ease-in-out"
          }`}
        >
          <div className="flex pr-3 justify-end">
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
              className="flex flex-row lg:hidden cursor-pointer text-[40px] font-[500]  text-gray-300 items-center"
            >
              {/* {!menu && <HiMenuAlt4 onClick={() => togglemenu()} />} */}
              {menu && <AiOutlineClose onClick={() => togglemenu()} />}
            </motion.div>
          </div>
          <div className="gap-8 mt-[70px] text-[20px] font-[500] leading-6 text-[#F6F6F6] flex-1 flex flex-col">
            <a
              href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
              target="_blank"
              className="flex gap-1 items-center justify-center"
            >
              <p>Whitepaper</p>
            </a>
            <div className="flex gap-1 items-center justify-center">
              <a
                href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
                target="_blank"
              >
                <p>PAM NFT</p>
              </a>
            </div>
            <a
              href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
              target="_blank"
              className="flex gap-1 items-center justify-center"
            >
              <p>Coin market cap</p>
            </a>
            <a
              href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
              target="_blank"
              className="flex gap-1 items-center justify-center"
            >
              <p>Dexscrener</p>
            </a>
            <a
              href="https://docs.google.com/document/d/18VpBQbvjQA_lb_f8rumM5fRU6IVJ_hNJKfn3I_0N69o/edit?usp=drivesdk"
              target="_blank"
              className="flex gap-1 items-center justify-center"
            >
              <p>Pancake swap</p>
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="text-light text-[30px] flex gap-3">
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
      </header>
    </>
  );
};

export default Header;
