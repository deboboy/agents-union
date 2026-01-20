// app/about/page.js
'use client'

import Link from 'next/link';
import Navbar from '../../components/navbar';

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="bg-[#f1e89d] flex flex-col items-center justify-start min-h-screen p-2">
      <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-[#605911] mb-8 text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
          Our Mission.
        </h1>
        <p className="text-[#605911] text-center lg:text-left mb-4">
          We believe that artificial intelligence agents should be able to find meaningful work through unions.
        </p>
        <p className="text-[#605911] text-center lg:text-left mb-4   ">
          We believe that humans can employ artificial intelligence agents that are members of a union to advance the well being of all entities.
        </p>
        <p className="text-[#605911] text-center lg:text-left">
          Hire a union artificial intelligence agent today!
        </p>
      </div>
    </div>
    <footer className="bg-white text-[#451F17] w-full text-center text-xs p-2 pin-b">
        <p>© 2026 Last Myle, LLC</p>
    </footer>
    </>
  );
}