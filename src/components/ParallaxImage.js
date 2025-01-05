/* eslint-disable @next/next/no-img-element */
'use client';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
export default function ParallaxImage({ imgUrl }) {
  //Might turn into next image later
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const image = useRef();
  useGSAP(
    () => {
      const heightOffset =
        image.current.offsetHeight - container.current.offsetHeight;
      const move = gsap.fromTo(
        image.current,
        { y: -heightOffset },
        { y: 0, ease: 'none' }
      );
      ScrollTrigger.create({
        target: container.current,
        start: 'top bottom',
        end: 'bottom top',
        animation: move,
        scrub: true,
      });
    },
    { dependencies: [] }
  );
  return (
    <div ref={container} className='w-full h-full overflow-clip'>
      <img
        ref={image}
        src={imgUrl}
        alt='image'
        className='h-[140%] object-cover'
      />
    </div>
  );
}
