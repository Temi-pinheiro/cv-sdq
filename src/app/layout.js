'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ preview, children }) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>{preview}</div>
        <main>{children}</main>
      </body>
    </html>
  );
}
