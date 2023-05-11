import React from "react";
import { BiPurchaseTagAlt, BsCoin, IoWallet } from "react-icons/all";
import { motion } from "framer-motion";

type Props = {};

const Howtobuy = (props: Props) => {
  return (
    <div className="bg-[url('/coin2.jpeg')] bg-cover w-full h-[1000px] relative">
      <div className="w-full h-[1000px] absolute top-0 bg-[rgba(0,0,0,0.7)]"></div>
      <div className="absolute h-full top-0 flex flex-col w-full ">
        <p className="font-[600] text-white text-center py-4 font-arco text-[30px]">
          How to buy Pam?
        </p>
        <div className="flex w-full flex-[3] gap-5 flex-col items-center justify-center text-white">
          {/* step 1 */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="glass w-[350px] h-[250px] flex flex-col justify-center"
          >
            <div className="flex gap-1 items-center justify-center">
              <IoWallet className="text-[#15BFFD]" />
              <p className="text-[#F4CB95]">Create a Wallet</p>
            </div>
            <p className="p-2">
              Download metamask, trust Wallet or your wallet of choice from the
              app store or google play store for free. Desktop Users, download
              the google chrome extension by going to{" "}
              <a href="https://metamask.io/">metamask.io</a>
            </p>
          </motion.div>
          {/* step 2 */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="glass w-[350px] h-[250px] flex flex-col justify-center"
          >
            <div className="flex gap-1 items-center justify-center">
              <BiPurchaseTagAlt className="text-[#15BFFD]" />
              <p className="text-[#F4CB95]">Buy Some BNB</p>
            </div>
            <p className="p-2">
              Have BNB in your wallet to switch to $PAM. If you don&apos;t have
              any BNB, you can buy directly on metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </p>
          </motion.div>
          {/* step 3 */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="glass w-[350px] h-[250px] flex flex-col justify-center"
          >
            <div className="flex gap-1 items-center justify-center">
              <BsCoin className="text-[#15BFFD]" />
              <p className="text-[#F4CB95]">Buy $PAM on PancakeSwap</p>
            </div>
            <p className="p-2">
              Connect to pancakeSwap. Go to{" "}
              <a href="https://pancakeswap.finance/">pancakeswap.finance</a> in
              google chrome or on the browser inside your Metamask app. Connect
              your wallet and waste the $PAM token address into PancakeSwap,
              select PAM and confirm(sign the transaction) when metamask prompts
              you for a wallet signature.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
