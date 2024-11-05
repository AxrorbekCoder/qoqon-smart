// src/LogoAnimation.js
import React, { useEffect, useState } from 'react';
import './LogoAnimation.css';
import icon from './icon.png';

const LogoAnimation = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 8000); // Изменено на 5 секунд

    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = "Qo'qon lokomotiv deposi";
  const text2 = 'SMART depo loyihasi';
  return (
    isAnimating && (
      <div className="logo-container">
        <div className="logo-circle">
          <img src={icon} alt="Logo" className="logo-image" />
        </div>
        <div className="text-container">
            <h1 className="text">{text}</h1>
            <h1 className="text">{text2}</h1>
        </div>
        </div>
    )
  );
};

export default LogoAnimation;
