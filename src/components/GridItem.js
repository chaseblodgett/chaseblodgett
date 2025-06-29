import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const GridItem = ({ index, photo, caption }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    anime({
      targets: itemRef.current,
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: index * 100, 
      easing: 'easeOutQuad',
    });
  }, [index]); 

  return (
    <div ref={itemRef} className="grid-item">
      {/* Content of your grid item */}
    </div>
  );
};

const GridContainer = () => {
  // ... render GridItem components
};