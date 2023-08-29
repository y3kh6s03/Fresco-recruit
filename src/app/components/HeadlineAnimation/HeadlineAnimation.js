"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "src/app/components/HeadlineAnimation/HeadlineAnimation.scss";

export const HeadlineAnimation = ({ texts, num }) => {
  const animationContainer = useRef(null);
  const textStrings = texts.split("");

  const className = "char" + num;
  console.log(className);

  useEffect(() => {
    gsap.to("." + className, {
      y: 0,
      delay: 2,
      stagger: {
        amount: 0.08,
        from: "center"
      },
      scrollTrigger: {
        trigger: "." + className,
        start: "bottom center",
        markers: true
      }
    });
  }, []);

  return (
    <div className="text__animation__container" ref={animationContainer}>
      {textStrings.map((textString, index) => {
        return (
          <span
            key={textString + index}
            className={className}
            style={{
              display: "inline-block",
              transform: "translateY(100%)"
            }}
          >
            {textString === " " ? "\u00A0" : textString}
          </span>
        );
      })}
    </div>
  );
};
