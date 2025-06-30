import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function TypingIntro() {


    return (
        <span className="w-full text-2xl sm:text-3xl md:text-5xl animate-slide-in-right delay-[500ms] font-space">
          I'm a
          <TypeAnimation
            sequence={[
              " coding enthusiast.",
              1000,
              " web developer.",
              1000,
              " software engineer.",
              1000,
            ]}
            speed={15}
            wrapper="span"
            cursor={true}
            // repeat={Infinity}
            style={{ display: 'inline-block', marginLeft: '0.5ch', color: "#ec4899" }}
          />
        </span>
      );
};

