/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ParallaxImage from './ParallaxImage';
import Link from 'next/link';
export default function Case({ caseInfo, nextCase, prevCase }) {
  const {
    title,
    when,
    whoFor,
    type,
    industry,
    prev,
    next,
    header,
    images,
    cover,
    basePath,
  } = caseInfo;
  return (
    <div
      className='w-full h-full  pb-10 '
      // style={{ background: prev, color: next }}
    >
      <div className='h-screen'>
        <ParallaxImage imgUrl={`/${basePath}/${cover}`} />
      </div>
      <div className='w-full max-w-[90%] mx-auto py-10 '>
        <h1 className='text-center font-bold text-[80px]'>{title}</h1>
        <div className='flex flex-col items-center '>
          <span className='font-light text-[20px]'>FOR</span>
          <span className='text-[40px] font-bold'>{whoFor}</span>
        </div>
        <div className='grid grid-cols-3 gap-x-10 font-bold text-[40px] mt-10'>
          <span className=''>{type}</span>
          <span className='text-center'>{industry}</span>
          <span className='text-right'>{when}</span>
        </div>
      </div>
      <div className='flex flex-col gap-y-5 w-full px-[2%]'>
        {images.map((image, index) => (
          <div key={index} className='w-full h-[80vh]'>
            <ParallaxImage imgUrl={`/${basePath}/${image}`} />
          </div>
        ))}
      </div>
      <div className='w-full h-[200px] ' style={{ background: next }}></div>
      <div className='grid grid-cols-2 w-full gap-x-10'>
        {prevCase && (
          <Link
            href={`/cases/${prevCase.title}`}
            className='w-auto h-[400px] overflow-clip group relative'
          >
            <img
              src={prevCase.cover}
              alt='prev case'
              className='object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out'
            />
            <div
              style={{ background: ' rgba(52, 64, 84, 0.7)' }}
              className='absolute inset-0 w-full h-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out  flex items-center justify-center text-3xl font-bold text-black'
            >
              PREV
            </div>
          </Link>
        )}
        {nextCase && (
          <Link
            href={`/cases/${nextCase.title}`}
            className='w-auto h-[400px] overflow-clip group relative'
          >
            <img
              src={nextCase.cover}
              alt='prev case'
              className='object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out'
            />
            <div
              style={{ background: ' rgba(52, 64, 84, 0.7)' }}
              className='absolute inset-0 w-full h-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center text-3xl font-bold text-black'
            >
              NEXT
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
