
import { useEffect, useState } from 'react';

export default function LoadingScreen(){
  const [ isVisible, setIsVisible] = useState(true);
    useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
      console.log('everything loaded');
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  
  return(
    <div className={`${isVisible?'opacity-100 ':'opacity-0 pointer-events-none '} flex justify-center items-center transition delay-300 duration-500 bg-default fixed h-dvh w-dvw z-[9999]`}>
      <h3 className="font-rubik animate-fadeIn animate-pulse md:text-xl text-center ">Loading Standby</h3>
    </div>
  );
}