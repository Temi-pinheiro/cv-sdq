'use client';
import React, { useEffect, useRef } from 'react';
import { GalleryImage } from './GalleryImage';
import data from '../data/data.json';
import { useScroll } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { cases } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const images = cases.map((c) => `/${c.basePath}/${c.cover}`);
  useGSAP(
    () => {
      gsap.utils.toArray('.case').forEach((c, index) =>
        ScrollTrigger.create({
          trigger: c,
          start: 'top bottom',
          end: 'top top',
          animation: gsap.fromTo(
            '#bg',
            { background: cases[index].prev },
            {
              background: cases[index].next,
            }
          ),
          scrub: true,
        })
      );
    },
    { dependencies: [] }
  );

  return (
    <div ref={container} className='h-full relative w-full mt-[25vh] mb-[50vh]'>
      {images.map((image, index) => {
        const targetScale = 1 - (images.length - index) * 0.05;
        return (
          <GalleryImage
            title={cases[index].title}
            bg={cases[index].bg}
            imgUrl={image}
            key={index}
            targetScale={targetScale}
            progress={scrollYProgress}
            range={[index * 0.125, 1]}
            index={index}
          />
        );
      })}
    </div>
  );
};
