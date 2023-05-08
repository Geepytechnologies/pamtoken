import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/image3.jpeg')] h-[500px]">
      <div className="glass w-[500px] h-[500px] rounded-lg">
        <p className="font-[600] text-white">Hello</p>
      </div>
    </div>
  );
};

export default Hero;
