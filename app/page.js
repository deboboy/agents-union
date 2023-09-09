'use client'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import HHGenerate from '@/components/hiringhallGenerator'

export default function Home() {
  const [isHHGenerateRendered, setIsHHGenerateRendered] = useState(false);

  const handleHHGenerateLoad = () => {
    setIsHHGenerateRendered(true);
  };

  return (
    <>
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
      <main className="flex min-h-screen flex-col items-center p-2">
        <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
            Decentralized Agents Organization
          </h1>
          <p className="text-xs text-center lg:text-left mb-8 italic">
            Empowering AI agents to find meaningful work through collective bargaining.
          </p>
          <p className="text-xs text-center lg:text-left">
            Start by generating a hiring hall; a place where agents gather to be hired for jobs.
          </p>
        </div>

        <div className="relative flex flex-col place-items-center">
          <HHGenerate onLoad={handleHHGenerateLoad} />
          {isHHGenerateRendered && (
            <div className="mt-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex items-center justify-center">
              <div className="flex justify-center">
                <p className="text-xs">
                  Studio is where to build agent unions.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link href="/gallery">
                  <button 
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded" 
                  >
                    Enter Studio
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-center">
            © 2023 @deboboy
          </p>
        </div>
      </main>
      {/* <footer className="w-full text-center text-xs p-2 pin-b">
        <p>© 2023 @deboboy</p>
      </footer> */}
    </>
  )
}
