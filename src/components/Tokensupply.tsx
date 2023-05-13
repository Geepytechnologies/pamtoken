import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const Tokensupply = (props: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const imageVariants = {
    rotate: {
      rotate: 360,
      transition: { duration: 2 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("rotate");
    }
  }, [controls, inView]);
  return (
    <div>
      <p className="font-[600] text-center py-4 font-arco text-mygreen tracking-widest text-[30px]">
        Tokenomics
      </p>
      <div>
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          src="/supply.svg"
          className=""
        />
        <div className="py-2 flex gap-3 flex-col font-[500]">
          <div className="flex gap-2 items-center pl-3">
            <div className="bg-[#582E2F] h-5 w-6"></div>
            <span>-</span>
            <p className="text-black">
              73.92 Trillion Pam tokens for liquidity provision on PancakeSwap
              exchange
            </p>
          </div>
          <div className="flex gap-2 items-center pl-3">
            <div className="bg-[#6B972B] h-5 w-6"></div>
            <span>-</span>
            <p>
              17 Trillion Pam tokens reserved for centralised exchange (CEX)
              listings.
            </p>
          </div>
          <div className="flex gap-2 items-center pl-3">
            <div className="bg-[#9F9C5D] h-5 w-6"></div>
            <span>-</span>
            <p>
              5 Trillion Pam tokens for the development team and project
              funding.
            </p>
          </div>
          <div className="flex gap-2 items-center pl-3">
            <div className="bg-[#9F9C5D] h-5 w-6"></div>
            <span>-</span>
            <p>
              4.08 Trillion Pam tokens for marketing, promotions and
              Partnerships.
            </p>
          </div>
        </div>
        {/* other supplies */}
        <div className="p-2 pb-[30px] text-[14px] flex flex-col gap-3 font-[500]">
          <div>
            <p>
              <span className="font-[600] font-arco text-mygreen tracking-wide">
                Zero Taxes:{" "}
              </span>
              Pam adopts a tax-free model to simplify transactions and encourage
              high trading activities.
            </p>
          </div>
          <div>
            <p>
              <span className="font-[600] font-arco text-[#582E2F] tracking-wide">
                Renounced Contract Ownership:{" "}
              </span>
              The team will renounce ownership of the contract to demonstrate
              trust and security to the community.
            </p>
          </div>
          <div>
            <p>
              <span className="font-[600] font-arco text-[#9F9C5D] tracking-wide">
                Fairlaunch Presale:{" "}
              </span>
              Pam token will launch with a fair Launch presale to ensure a fair
              distribution and prevent potential price manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokensupply;
