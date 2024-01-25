'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { League_Gothic } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
const lg = League_Gothic({ subsets: ['latin'] });
export const WorkScroller = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.set('#topscroller', { xPercent: -50 });
      gsap.set('#bottomscroller', { xPercent: 40 });
      const topScroller = gsap.to('#topscroller', {
        xPercent: 0,
      });
      const bottomScroller = gsap.to('#bottomscroller', {
        xPercent: -30,
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
      className={['bg-white h-full w-full overflow-x-clip', lg.className].join(
        ' '
      )}
    >
      <div
        id='topscroller'
        className=' flex items-center text-black text-[400px] gap-x-[100px] font-normal font-["League Gothic"] leading-small'
      >
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
      </div>
      <div
        id='bottomscroller'
        className=' flex items-center text-black text-[400px] gap-x-[100px] font-normal font-["League Gothic"] -mt-48'
      >
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
      </div>
    </div>
  );
};
