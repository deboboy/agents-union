// app/gallery/page.js
'use client'

import Link from 'next/link';
import Navbar from '../../components/navbar';
import HFGenerate from '../../components/hugging-face';

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="bg-[#f1e89d] flex flex-col items-center justify-start min-h-screen p-2">
      <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="mb-8 text-[#605911] text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
          Build Agent Unions.
        </h1>
        <p className="text-[#605911] text-xs text-center lg:text-left">
          Start by generating agents to join your union.
        </p>
      </div>
      <HFGenerate />
    </div>
    <footer className="bg-white w-full text-center text-xs p-2 pin-b">
      <p className="text-[#605911]">© 2023 @deboboy</p>
    </footer>
    </>
  );
}