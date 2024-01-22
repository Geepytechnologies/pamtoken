import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Slider = (props: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = () => {
      setScrollLeft((prevScrollLeft) => prevScrollLeft + 2);

      if (
        scrollLeft >=
        (slider?.scrollWidth || 0) - (slider?.clientWidth || 0)
      ) {
        setScrollLeft(0);
      }

      if (slider) {
        slider.scrollLeft = scrollLeft;
      }
    };

    const intervalId = setInterval(() => {
      window.requestAnimationFrame(interval);
    }, 16); // Adjust the interval speed as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [scrollLeft, sliderRef]);

  return (
    <div style={{ overflowX: "scroll", width: "100%" }}>
      <div ref={sliderRef} style={{ display: "flex" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              minWidth: "200px",
              height: "200px",
              backgroundColor: "grey",
              marginRight: "10px",
            }}
          >
            <h2>Item {i + 1}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
