import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/image3.jpeg')] h-[500px]">
      <div className="w-[500px] h-[500px] rounded-lg">
        <p className="font-[600] text-white inline">
          Creating wealth{" "}
          <span>
            <img src="/vomiting-face.svg " className="w-[20px] h-[20px]" />
          </span>
          . Handshakes, Hugs and Other Goodness with the Pam.
        </p>
        <p className="font-[600] text-white">
          Pam Token began as a bold experiment in cryptocurrency creation
          Inspired by the power of artificial intelligence.
        </p>
        <div className="flex gap-2 m-2">
          <button className="font-[600] rounded-2xl p-3 bg-white text-black">
            Learn More
          </button>
          <button className="font-[600] glass rounded-2xl p-3 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
