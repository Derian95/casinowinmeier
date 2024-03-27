import { useEffect, useState } from 'react';

const useHasScrolledPastThreshold = (threshold: number = 50): boolean => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return hasScrolled;
};

export default useHasScrolledPastThreshold;
