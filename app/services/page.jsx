'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, Plane, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const servicesList = [
  { 
    id: 'job-consulting', 
    title: 'Job Consulting', 
    icon: Briefcase, 
    shortDesc: 'Strategic career guidance and talent placement across top-tier industries.' 
  },
  { 
    id: 'facility-management', 
    title: 'Facility Management Services', 
    icon: Building2, 
    shortDesc: 'Comprehensive maintenance, security, and operational support for corporate premises.' 
  },
  { 
    id: 'overseas-placements', 
    title: 'Overseas Placements', 
    icon: Plane, 
    shortDesc: 'Secure and verified global career opportunities with end-to-end travel support.' 
  },
  { 
    id: 'recruitment-support', 
    title: 'Recruitment Support Services', 
    icon: Users, 
    shortDesc: 'Tailored hiring solutions, background checks, and interview management for businesses.' 
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Our Core <span className="text-cyan-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Specialized solutions designed to empower your workforce and streamline your business operations.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h2 className="text-2xl font-bold text-indigo-950 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.shortDesc}</p>
                <Link 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center justify-between w-full px-6 py-4 bg-slate-50 text-indigo-950 font-bold rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors"
                >
                  View Full Details <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}