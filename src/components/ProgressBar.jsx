import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollPercentage = () => {
    const scrollY = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / height) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
  );
};

export default ProgressBar;
