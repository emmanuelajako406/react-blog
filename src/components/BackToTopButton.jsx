import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="white"
  width="30px"
  height="20px"
>
  <path
    fillRule="evenodd"
    d="M9.293 5.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 7.414V17a1 1 0 11-2 0V7.414L4.707 11.707a1 1 0 01-1.414-1.414l5-5z"
    clipRule="evenodd"
  />
</svg>

    </div>
  );
};

export default BackToTopButton;
