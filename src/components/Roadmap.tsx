import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Roadmap = (props: Props) => {
  return (
    <div className=" pb-[50px] relative">
      {/* <img
        src="/space.jpeg"
        className="absolute top-0 w-full h-full opacity-10"
      /> */}
      <div className="p-2 flex flex-col items-center justify-center">
        <p className="font-[600] text-white text-center py-4 font-arco tracking-wider text-[30px]">
          Roadmap
        </p>

        <motion.img
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
          src="/roadmap.svg"
        />
      </div>
    </div>
  );
};

export default Roadmap;
