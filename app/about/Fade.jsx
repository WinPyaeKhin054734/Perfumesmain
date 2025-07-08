import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// npm install gsap


gsap.registerPlugin(ScrollTrigger);

const Fade = ({ children }) => {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 2,
        y: 0,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={elRef}>
      {children}
    </div>
  );
};

export default Fade;