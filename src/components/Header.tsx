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
      <header className="flex flex-col  w-full  px-3 py-4">
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
              <p>Community</p>
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
                <BsTwitter />
              </Link>
              <Link to="https://t.me/PAMCOMUNITY">
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
