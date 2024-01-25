'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
