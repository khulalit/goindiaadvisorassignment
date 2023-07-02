import React, { useState, useEffect } from 'react';

const useScrollingStatus = (ref : React.RefObject<HTMLDivElement>) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScrolling(ref.current.scrollTop > 0);
      }
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }
    console.log('scroll')
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
    
  }, [ref]);

  return isScrolling;
};

export default useScrollingStatus;