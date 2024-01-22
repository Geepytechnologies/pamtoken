import React, { useEffect, useRef } from "react";

type Props = {};

const Slider = (props: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollLeft = 0;

    const interval = (): number => {
      scrollLeft += 2;
      if (
        scrollLeft >=
        (slider?.scrollWidth || 0) - (slider?.clientWidth || 0)
      ) {
        scrollLeft = 0;
      }
      if (slider) {
        slider.scrollLeft = scrollLeft;
      }
      return window.requestAnimationFrame(interval);
    };

    const requestId = interval();

    return () => window.cancelAnimationFrame(requestId);
  }, []);
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
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
