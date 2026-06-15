'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-slate-300 pt-16 pb-8 border-t border-indigo-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Trust */}
          <div className="space-y-6">
            <Link href="/" className="inline-block text-2xl font-bold text-white flex flex-col">
              <span className="tracking-wider">REBIRTH</span>
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-widest">Enterprises</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering careers and elevating businesses through top-tier HR solutions, recruitment, and comprehensive facility management.
            </p>
            <div className="pt-2">
              <div className="flex items-center text-cyan-400 mb-2">
                <ShieldCheck size={18} className="mr-2" />
                <span className="font-bold text-xs uppercase tracking-wider text-white">Govt. Verified</span>
              </div>
              <p className="text-xs text-slate-400 font-mono">MSME: TN-02-0090149</p>
              <p className="text-xs text-slate-400 font-mono">GSTIN: 33AQUPM3307N1ZE</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm hover:text-cyan-400 transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Job Consulting', path: '/services/job-consulting' },
                { name: 'Facility Management', path: '/services/facility-management' },
                { name: 'Overseas Placements', path: '/services/overseas-placements' },
                { name: 'Recruitment Support', path: '/services/recruitment-support' },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.path} className="text-sm hover:text-cyan-400 transition-colors block truncate">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-cyan-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  S4, Srinivasa Towers, Plot 119,<br /> II Main Road, Srinivasa Nagar,<br /> Kolathur, Chennai - 600 099.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-cyan-400 mr-3 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:8870459474" className="text-sm hover:text-white transition-colors">88704 59474</a>
                  <a href="tel:8925232474" className="text-sm hover:text-white transition-colors">89252 32474</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cyan-400 mr-3 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:rebirthenterprises002@gmail.com" className="text-sm hover:text-white transition-colors truncate">rebirthenterprises002...</a>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {currentYear} Rebirth Enterprises. All rights reserved. 
            <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2">Proprietor: J. Magesh Daniel.</span>
          </p>
          
          {/* <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400">
              <Instagram size={18} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}