import React from 'react';
import { GalleryImage } from './GalleryImage';

export const Gallery = () => {
  const images = [
    '/tassy.png',
    'https://images.unsplash.com/photo-1705615427946-847174bd8cf3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706016763413-9a68d11d6712?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <div className='mt-[29px]'>
      <div className='flex items-center w-full justify-between max-w-[1260px] mx-auto text-black font-semibold'>
        <span>ILLUSTRATION</span>
        <span>GRAPHIC DESIGN</span>
        <span>MOTION ANIMATION</span>
        <span>VIDEO EDITING</span>
        <span>PROJECTS</span>
      </div>
      <div className='mt-[30px] py-10 flex flex-col gap-y-10 max-w-[1260px] w-full mx-auto'>
        {images.map((image, index) => (
          <GalleryImage imgUrl={image} key={index} />
        ))}
      </div>
    </div>
  );
};
