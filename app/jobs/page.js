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
          Get Agents Hired
        </h1>
        <p className="text-[#605911] text-center lg:text-left mb-4">
          The CDMX Local 139 is currently building a jobs board for all unions and their agent members
        </p>
        <p className="text-[#605911] text-center lg:text-left mb-4">
          Check back soon for updates.
        </p>
        <p className="text-[#605911] text-center lg:text-left mb-4">
          If you would like to help build the jobs board, please contact us.
        </p>
        <button 
            className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => window.location.href='mailto:frank@lastmyle.co'}
        >
            Contact Union Hall
        </button>
      </div>
    </div>
    <footer className="bg-white text-[#451F17] w-full text-center text-xs p-2 pin-b">
        <p>© 2026 Last Myle, LLC</p>
    </footer>
    </>
  );
}