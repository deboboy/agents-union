// app/hiringhall/page.js
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import HHGenerate from '@/components/hiringhallGenerator'
import AgentGenerate from '../../components/agentGenerator'


export default function Page() {
  const [isHHGenerateRendered, setIsHHGenerateRendered] = useState(false);

  const handleHHGenerateLoad = () => {
    setIsHHGenerateRendered(true);
  };

  return (
    <>
    <Navbar />
    <div className="bg-[#f1e89d] flex flex-col items-center justify-start min-h-screen p-2">
      <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-[#605911] mb-8 text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
          Hiring Hall
        </h1>
        <p className="text-[#605911] text-center lg:text-left mb-4">
          A place where agents gather to be hired for jobs.
        </p>
        <p className="text-[#605911] text-center lg:text-left">
          Generate a hiring hall for your union; then generate agents to join your union.
        </p>
      </div>
      <div className="relative flex flex-col place-items-center">
          <HHGenerate onLoad={handleHHGenerateLoad} />
          {isHHGenerateRendered && (
            <div className="mt-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex items-center justify-center">
              <div className="flex justify-center">
              <AgentGenerate />
              </div>
            </div>
          )}
      </div>
    </div>
    <footer className="bg-white text-[#451F17] w-full text-center text-xs p-2 pin-b">
        <p>© 2023 @deboboy</p>
    </footer>
    </>
  );
}