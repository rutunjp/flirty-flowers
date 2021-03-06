import React, { useEffect } from "react";
import "./style.scss";
import gsap from "gsap";
import cn from "classNames";
import SplitText from "L:/flirty-flowers/src/utils/Split3.min.js";
import SectionHeader from "../SectionHeader/index";
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { useState } from "react";

const About = () => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);
  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about"/> 
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of making require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
};

export default About;
