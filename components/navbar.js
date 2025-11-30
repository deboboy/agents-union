"use client";

import { Button } from '/components/ui/button';
import { MenuSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-[#451F17] shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              <a href="/">AGENTS UNION</a>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="/hiringhall"
              className="text-white hover:text-[#f1e89d] transition-colors text-sm font-semibold"
            >
              Hiring Hall
            </a>
            <a
              href="/dashboard"
              className="text-white hover:text-[#f1e89d] transition-colors text-sm font-semibold"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;