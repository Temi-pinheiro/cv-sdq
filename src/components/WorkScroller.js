'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { League_Gothic } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
const lg = League_Gothic({ subsets: ['latin'] });
export const Scroller = ({ word }) => {
  let wordArray = new Array(4).fill(word);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.set('#topscroller', { xPercent: -50 });
      gsap.set('#bottomscroller', { xPercent: 40 });
      const topScroller = gsap.to('#topscroller', {
        xPercent: 0,
        // yPercent: -20,
      });
      const bottomScroller = gsap.to('#bottomscroller', {
        xPercent: -30,
        // yPercent: -30,
      });

      ScrollTrigger.create({
        trigger: '#container',
        start: 'top bottom',
        scrub: true,
        animation: topScroller,
      });
      ScrollTrigger.create({
        trigger: '#container',
        start: 'top bottom',
        scrub: true,
        animation: bottomScroller,
      });
    },
    { dependencies: [] }
  );
  return (
    <div
      id='container'
      className={[' w-full overflow-clip h-[80%]', lg.className].join(' ')}
    >
      <div
        id='topscroller'
        className=' flex items-center text-white mix-blend-difference  text-[400px] gap-x-[100px] font-normal font-["League Gothic"] leading-tight '
      >
        {wordArray.map((word, index) => (
          <span key={index} className='uppercase'>
            {word}
          </span>
        ))}
      </div>
      <div
        id='bottomscroller'
        className=' flex items-center text-white mix-blend-difference text-[400px] gap-x-[100px] font-normal font-["League Gothic"] leading-tight '
      >
        {wordArray.map((word, index) => (
          <span key={index} className='uppercase'>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
