/* eslint-disable @next/next/no-img-element */
'use client';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './styles.module.css';
export default function PreviewModal({ children }) {
  //Might turn into next image later
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const subContainer = useRef();
  // useGSAP(
  //   () => {
  //     // gsap.timeline().from
  //     const tl = gsap.timeline();
  //     tl.to(container.current, { autoAlpha: 1 });
  //     tl.fromTo(subContainer.current, { yPercent: 100 }, { yPercent: 10 });
  //     const move = gsap.to(subContainer.current, { y: 0, width: '100vw' });
  //     ScrollTrigger.create({
  //       target: container.current,
  //       start: 'top bottom',
  //       end: '100px',
  //       animation: move,
  //       scrub: true,
  //     });
  //   },
  //   { dependencies: [] }
  // );
  return (
    <div ref={container} className={styles.background}>
      <div ref={subContainer} className='w-[94vw] h-full'>
        {children}
      </div>
    </div>
  );
}
