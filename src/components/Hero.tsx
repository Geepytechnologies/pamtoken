import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/image3.jpeg')] w-full bg-fixed h-[500px]">
      <div className="rounded-lg">
        <p className="font-[600] text-white text-[30px]">
          Creating Wealth, Handshakes, Hugs and Other Goodness with the Pam.
        </p>
      </div>
    </div>
  );
};

export default Hero;
