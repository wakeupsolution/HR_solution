"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const segments = [
    {
      name: "Facility Management",
      href: "/services/facility-management",
    },
    {
      name: "Job Consulting",
      href: "/services/job-consulting",
    },
    {
      name: "Overseas Placements",
      href: "/services/overseas-placements",
    },
    {
      name: "Recruitment Support",
      href: "/services/recruitment-support",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServices(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/rblogo.png"
              alt="REBIRTH ENTERPRISES"
              width={180}
              height={70}
              priority
              className="w-auto h-14 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 font-medium hover:text-cyan-600 transition-colors duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-slate-700 font-medium hover:text-cyan-600 transition-colors duration-300"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 font-medium hover:text-cyan-600 transition-colors duration-300">
                Our Services
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden backdrop-blur-md">
                  {segments.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      // This forces the dropdown to close by removing hover/focus state
                     onClick={() => (document.activeElement as HTMLElement)?.blur()}
                      className="block px-5 py-4 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors border-b border-slate-100 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-indigo-950 text-white font-medium shadow-lg hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100 border-t border-slate-200" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="bg-white shadow-xl px-4 py-4 space-y-2">
          <Link
            href="/"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
          >
            About
          </Link>

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-cyan-50 transition-colors"
          >
            <span>Our Services</span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                mobileServices ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              mobileServices ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 space-y-1 mt-1">
              {segments.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="block mt-3 text-center px-4 py-3 rounded-xl bg-indigo-950 text-white font-medium hover:bg-cyan-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}