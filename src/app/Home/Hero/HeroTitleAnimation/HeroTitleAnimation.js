"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "src/app/Home/Hero/HeroTitleAnimation/HeroTitleAnimation.scss";

export const HeroTitleAnimation = ({ texts, num }) => {
  const textStrings = texts.split("");

  const className = "char" + num;

  useEffect(() => {
    gsap.to("." + className, {
      y: 0,
      delay: 1.5,
      stagger: {
        amount: 1,
        from: "end"
      }
    });
  }, []);

  return (
    <div className="text__animation__container">
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
