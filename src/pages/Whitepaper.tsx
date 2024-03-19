import React from "react";
import Baselayout from "../layouts/Baselayout";

type Props = {};

const Whitepaper = (props: Props) => {
  return (
    <Baselayout>
      <div className="font-matter relative">
        <div className="w-[300px] h-[300px] md:w-[348px] md:h-[348px] blurdiv absolute top-0 "></div>
        <div className="text-white  p-5 flex flex-col justify-center items-center">
          <p className="font-arco font-[600] text-2xl text-center mb-5 z-[200]">
            PAM
          </p>
          <div className="flex flex-col z-[200] gap-8 w-full md:w-[80%] lg:w-[70%]">
            <p>
              <span className="font-arco font-[500]">PAM</span> is not your
              average meme token. It is the emblem of unwavering commitment and
              endurance in the dynamic world of crypto. Procuring PAM brings you
              into a tribe of diamond hand holders who believe in the digital
              coin&apos;s long-term prospects amidst the unpredictability of the
              crypto-market.
            </p>
            <p>
              <h1 className="font-[600]">Diamond Hands</h1>
              <h2>
                Join the PAM family and get the coveted status of being a
                'Diamond Hand' holder. What does it mean? You're not just strong
                but crypto-strong! In the volatile waves of the crypto-market,
                you keep a cool head and refuse to let the rough seas intimidate
                you. With PAM, we navigate together, staying rock-steady and
                standing tall. After all, every diamond was just a piece of
                carbon that handled pressure exceptionally well!
              </h2>
            </p>
            <p>
              <h1 className="font-[600]">AI-Powered Adventures</h1>
              <h2>
                While we're all about fun, PAM is serious about staying on top
                of its game. We use avant-garde AI technologies to continuously
                evolve and experiment. Adaptation and innovation are not just
                our goals, but our guiding ethos, making PAM a captivating
                adventure and a token that never sleeps.
              </h2>
            </p>
            <p>
              <h1 className="font-[600]">Tokenomics</h1>
              <h2>
                <span className="">- Total Supply: </span>
                100,000,000,000,000 PAM (Hundred Trillion)
              </h2>
              <h2>
                <span className="">- FairLaunch/Liquidity: </span>
                73.92% (73.92 Trillion Pam)
              </h2>
              <h2>
                <span className="">- Cex Listing: </span>
                17% (17 Trillion Pam)
              </h2>
              <h2>
                <span className="">- Marketing: </span>
                7% (7 Trillion Pam)
              </h2>
              <h2>
                <span className="">- Airdrop: </span>
                2.08% (2.08 Trillion Pam)
              </h2>
            </p>
            <p>
              PAM isn't just another meme token, it's a voyage. By hopping on
              board with PAM, you join a tribe of daring crypto-enthusiasts,
              taking the road less travelled. We're armed with the power of
              diamond hands and backed by relentless AI innovations. Embark on
              this thrilling ride and let&apos;s chart a vibrant future in the
              crypto universe together!
            </p>
          </div>
        </div>
      </div>
    </Baselayout>
  );
};

export default Whitepaper;
