/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useTransform, motion } from 'framer-motion';
import Link from 'next/link';
export const GalleryImage = ({
  imgUrl,
  index,
  progress,
  range,
  targetScale,
  title,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <Link
      href={`/cases/${title}`}
      className='w-full h-[100vh] flex items-center justify-center sticky top-0 case'
    >
      <motion.div
        style={{ top: `calc(-1vh + ${index * 12.5}px)`, scale }}
        className=' overflow-clip relative origin-top rounded-[40px] w-[80%] h-[75%]'
      >
        <img
          src={imgUrl}
          alt='image thing'
          className='object-cover w-full h-full'
        />{' '}
      </motion.div>
    </Link>
  );
};
