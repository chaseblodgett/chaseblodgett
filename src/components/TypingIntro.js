import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function TypingIntro() {


    return (
        <TypeAnimation
          sequence={[
            
            'I am a software developer.',
            1000, 
            'I am a DevOps engineer.',
            1000,
            'I am a programming enthusiast.',
            1000,
            'I am a creative thinker.',
            1000,
            'I coded this website.',
            1000
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '2em', display: 'inline-block' }}
        //   repeat={Infinity}
        />
      );
};

