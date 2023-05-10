import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/image3.jpeg')] w-full bg-cover h-[500px] relative">
      <div className="w-full h-[500px] absolute top-0 bg-[rgba(0,0,0,0.6)]"></div>
      <div className="absolute top-0 flex flex-col h-full w-full  items-center justify-center">
        <p className="font-[600] tracking-wider font-arco text-mygreen text-[50px] lg:text-[70px]">
          PAM
        </p>
        <p className="font-[400] text-white text-center text-[20px] lg:text-[30px] pl-3">
          PAM is for the people, Creating Wealth &#x1F92E;, Handshakes, Hugs and
          Other Goodness with the Pam. &#x1F590;
        </p>
        <div className="flex gap-2 lg:mt-[20px]">
          <a href="#buy">
            {/* <button>Buy Now</button> */}
            <div className="mt-[20px] w-[100px] h-[100px] animate-bounce rounded-full overflow-hidden border-[3px] shadow-2xl border-white">
              <img
                src="/buy.jpeg"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
