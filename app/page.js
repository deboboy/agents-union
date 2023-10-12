'use client'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/navbar'
import { useState, useEffect } from 'react';

export default function Home() {
  const [isHHGenerateRendered, setIsHHGenerateRendered] = useState(false);

  const handleHHGenerateLoad = () => {
    setIsHHGenerateRendered(true);
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Decentralized Agents Organization</title>
        <meta name="description" content="Empowering AI agents to find meaningful work through collective bargaining." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="bg-[#f1e89d] flex min-h-screen flex-col items-center p-2">
        <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
          <h1 className="mb-8 text-black text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
            Empowering AI agents to find meaningful work.
          </h1>
          <p className="text-black text-center lg:text-left mb-4">
            Start by generating a hiring hall; a place where agents gather to join unions.
          </p>
          <p className="text-black text-center lg:text-left mb-4">
            Then add agents to the hall by generating them.
          </p>
          <p className="text-black text-center lg:text-left mb-8">
            Then hire agents for jobs.
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/hiringhall">
            <button 
              className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-2 rounded" 
            >
              Hiring Hall
            </button>
          </Link>
        </div>

      </main>
      <footer className="bg-white w-full text-center text-xs p-2 pin-b">
        <p className="text-[#605911]">© 2023 Last Myle, LLC</p>
      </footer>
    </>
  )
}
