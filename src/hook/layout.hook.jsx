import { useState, useEffect } from 'react';

const useLayoutHook = () => {
    const [isSmall, setIsSmall] = useState(window.innerWidth < 600);

    useEffect(() => {
      const handleResize = () => {
        setIsSmall(window.innerWidth < 600);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isSmall;
}

export default useLayoutHook;