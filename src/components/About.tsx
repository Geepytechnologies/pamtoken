import React, { useRef, useState } from "react";

type Props = {};

const About = (props: Props) => {
  const [show, setShow] = useState(false);
  const text = useRef<HTMLParagraphElement>(null);
  const handleshow = () => {
    setShow(!show);
  };
  return (
    <div className="py-[50px]">
      <p className="font-[600] text-center py-4 font-arco text-light text-[30px]">
        <span className="text-[#582E2F]">What</span> Is{" "}
        <span className="font-arco text-[30px] text-mygreen">PAM?</span>
        &#x1F590;
      </p>
      <div className="w-full flex items-center justify-center">
        <div className="font-[500] w-[90%]">
          <p>
            Pam Token began as a bold experiment in cryptocurrency creation.
          </p>
          <p>
            Inspired by the power of artificial Intelligence, the project&apos;s
            founder turned to GPT-4 with a simple challenge: create the next
            great meme coin, starting with a budget of just $120.
          </p>
          {!show && (
            <button
              onClick={handleshow}
              className="bg-mygreen mt-2 text-white font-[500] px-2 py-2 rounded-md border-2 border-gray-500 shadow-2xl"
            >
              See more
            </button>
          )}
          {show && (
            <>
              <p ref={text}>
                Confident in the AI&apos;s abilities, the founder pledged to
                follow all instructions provided by GPT-4 and document the
                process. Driven by the innovative insights of GPT-4 and fueled
                by the enthusiasm of its community, Pam Token has come a long
                way from its humble beginnings. Today, the token stands as a
                testament to the power of AI-guided creativity, and the
                potential it holds for reshaping the world of cryptocurrency. As
                we continue our journey, we invite you to join us in exploring
                the exciting possibilities that lie ahead for pam Token and its
                community.
              </p>
              <button
                onClick={handleshow}
                className="bg-mygreen mt-2 text-white font-[500] px-2 py-2 rounded-md border-2 border-gray-500 shadow-2xl"
              >
                See less
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
