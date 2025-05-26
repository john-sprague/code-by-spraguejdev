import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;

    // Clear existing stars
    starfield.innerHTML = '';

    // Create stars
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      // Random animation delay
      star.style.animationDelay = Math.random() * 3 + 's';
      
      starfield.appendChild(star);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};

export default StarField;