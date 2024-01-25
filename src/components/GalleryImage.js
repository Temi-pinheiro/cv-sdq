/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const GalleryImage = ({ imgUrl }) => {
  return (
    <div className='w-full h-[600px] overflow-clip'>
      <img
        src={imgUrl}
        alt='image thing'
        className='object-cover hover:scale-110 transition-transform duration-500 ease-in-out'
      />{' '}
    </div>
  );
};
