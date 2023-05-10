import React from "react";

type Props = {};

const Tokensupply = (props: Props) => {
  return (
    <div>
      <p className="font-[500]">Tokenomics</p>
      <div>
        <img src="/supply.svg" />
        <div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#582E2F] h-5 w-5"></div>
            <p>
              - 90 Trillion Pam tokens for liquidity provision on PancakeSwap
              exchange
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#6B972B] h-5 w-5"></div>
            <p>
              - 7 Trillion Pam tokens reserved for centralised exchange (CEX)
              listings.
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#9F9C5D] h-5 w-5"></div>
            <p>
              - 2 Trillion Pam tokens for the development team and project
              funding.
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#9F9C5D] h-5 w-5"></div>
            <p>
              - 1 Trillion Pam tokens for marketing, promotions and
              Partnerships.
            </p>
          </div>
        </div>
        {/* other supplies */}
        <div>
          <div>
            <p>
              <span className="font-[600] font-inter tracking-wide">
                Zero Taxes:{" "}
              </span>
              Pam adopts a tax-free model to simplify transactions and encourage
              high trading activities.
            </p>
          </div>
          <div>
            <p>
              <span className="font-[600] font-inter tracking-wide">
                Renounced Contract Ownership:{" "}
              </span>
              The team will renounce ownership of the contract to demonstrate
              trust and security to the community.
            </p>
          </div>
          <div>
            <p>
              <span className="font-[600] font-inter tracking-wide">
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
