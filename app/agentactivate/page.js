'use client'

import { useEffect } from 'react';
import AgentComponent from '../../components/agent';
import Navbar from '../../components/navbar';

export default function Page() {
    return (
        <>
        <Navbar />
        <div className="bg-[#f1e89d] flex flex-col items-center justify-start min-h-screen p-2">
        <div className="mb-4 z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
            <h1 className="text-[#605911] mb-8 text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
            Agent Activate
            </h1>
            <p className="text-[#605911] text-center lg:text-left mb-4">
            Activate your agent to start working together.
            </p>
        </div>
        <div className="relative flex flex-col place-items-center">
            <AgentComponent />
        </div>
        </div>
        <footer className="bg-white text-[#451F17] w-full text-center text-xs p-2 pin-b">
            <p>© 2023 Last Myle, LLC</p>
        </footer>
        </>
    );
    }