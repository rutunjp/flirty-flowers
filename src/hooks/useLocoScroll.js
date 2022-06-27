import locomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
};

export default useLocoScroll;
