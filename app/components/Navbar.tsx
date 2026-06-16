'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
  <Link href="/" className="flex items-center">
    <Image
      src="/rblogo.png"
      alt="REBIRTH ENTERPRISES"
      width={180}
      height={80}
      priority
    />
  </Link>
</div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-cyan-600 transition-colors">Home</Link>
            <Link href="/about" className="text-slate-700 hover:text-cyan-600 transition-colors">About</Link>
            <Link href="/services" className="text-slate-700 hover:text-cyan-600 transition-colors">Services</Link>
            <Link href="/contact" className="px-6 py-2 bg-indigo-950 text-white rounded-lg hover:bg-cyan-700 transition-colors shadow-md">
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-950">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md">About</Link>
            <Link href="/services" className="block px-3 py-2 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md">Services</Link>
            <Link href="/contact" className="block px-3 py-2 text-indigo-950 font-semibold">Get in Touch</Link>
          </div>
        </div>
      )}
    </nav>
  );
}