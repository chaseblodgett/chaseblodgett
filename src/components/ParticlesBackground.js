import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main); 
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        
        fullScreen: {
          enable: true,
          zIndex: -1, 
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
            resize: true,
          },
          modes: {
            trail: {
              delay: 0.0001,
              quantity: 1,
              pauseOnStop: true,
              particles: {
                color: {
                  value: [ "#818cf8", "#a855f7", "#ec4899" ],
                },
                opacity: {
                  value: 0.2,
                  animation: {
                    enable: true,
                    speed: 5,
                    minimumValue: 0, 
                    sync: false,
                  },
                },
                size: {
                  value: 2,
                  animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.5,
                    sync: false,
                  },
                },
              },
            },
          },
        },
        particles: {
          color: { value: [ "#818cf8", "#a855f7", "#ec4899" ]}, 
          links: {
            enable: true,
            color: "random",
            distance: 120,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          number: {
            value: 125,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.2,
              sync: false,
            },
          },
        },
      }}
    />
  );
  
}
