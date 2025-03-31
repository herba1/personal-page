import { useEffect,useRef,useState } from "react";
import React from "react";


export default function MarqueeCustom({ children, direction='ltr',isRotated=false }) {
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const content = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (content.current) {
      
      setWidth(content.current.getBoundingClientRect().width);
      if(isRotated)setWidth(content.current.getBoundingClientRect().height);
      
      setIsMounted(true);
    }
  }, [children]);

  useEffect(() => {
    // onlu run after width has been calculated
    if (isMounted && width != 0) {
      // init
      let constant = direction === 'ltr'? 1 : -1;
      let position = width * -1 * constant;

      const animate = () => {
        position += 0.3*constant ;
        
        if (position >= width && direction === 'ltr') {
          position = width * -1;
        }

        if (position <= width*constant && direction === 'rtl') {
          position = width;
        }

        if (marqueeRef.current) {
          marqueeRef.current.style.transform = `translate3d(${position}px, 0px, 0px)`;
        }
        // continue the animation loop
        animationRef.current = requestAnimationFrame(animate);
      };
      // start the animation
      animationRef.current = requestAnimationFrame(animate);
    }

    // cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted, width, direction]);

  return (
    <>
      <div className="relative h-dvh w-dvw flex justify-center items-center">
        <div
          ref={marqueeRef}
          style={{ left: `${-width}` }}
          className=" text-nowrap whitespace-nowrap w-[calc(4000px)]"
        >
          {/* this allows me to use any child as the content */}
          {Array(14).fill(children).map((e,i)=>{
            return(
              React.cloneElement(children,{
                key: i,
                ref: i === 0? content : null,
              })
            )
          })}
        </div>
      </div>
    </>
  );
}