import { useEffect, useState } from 'react';

const useHasScrolledButton = (threshold: number = 300): boolean => {
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

export default useHasScrolledButton;
