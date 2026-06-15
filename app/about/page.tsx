'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. INNER PAGE HERO BANNER */}
      <section className="pt-32 pb-20 bg-indigo-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            About <span className="text-cyan-400">Rebirth Enterprises</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Committed to excellence in HR solutions, facility management, and career development. Learn about the foundation and future of our company.
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (The Story) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          >
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">Our Foundation</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950 mb-6">Building strong workforces, sustaining excellent facilities.</h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Founded and led by Proprietor <strong>J. Magesh Daniel</strong>, Rebirth Enterprises operates from the heart of Kolathur, Chennai. We began with a singular focus: to bridge the gap between exceptional talent and the organizations that need them most.
              </p>
              <p>
                Over the years, our services have expanded significantly. Today, we are not just a recruitment agency; we are a comprehensive support system for businesses. From domestic job consulting and overseas placements to managing the day-to-day facilities of corporate offices, we provide end-to-end solutions that allow business owners to focus on their core growth.
              </p>
              <p>
                We pride ourselves on our transparency, compliance (fully MSME and GST registered), and our unwavering dedication to both our clients and our candidates.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2"
          >
            {/* Using a neat structured grid instead of a single image for a premium corporate feel */}
            <div className="w-full h-full rounded-xl bg-slate-100 overflow-hidden grid grid-cols-2 gap-2">
              <div className="bg-indigo-900/10 col-span-2 h-48 flex items-center justify-center text-slate-400 italic">
                [Office Interior / Team Meeting Image]
              </div>
              <div className="bg-cyan-900/10 flex items-center justify-center text-slate-400 italic">
                [Facility Mgt Image]
              </div>
              <div className="bg-indigo-900/10 flex items-center justify-center text-slate-400 italic">
                [Interview/HR Image]
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-indigo-950 font-bold leading-tight">Registered &<br/>Verified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VISION, MISSION, VALUES SECTION */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-2">Our Ethos</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white">What Drives Us Forward</h3>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-slate-300 leading-relaxed">
                To be the most trusted and preferred partner for HR solutions and facility management globally, recognized for our innovative strategies, ethical practices, and unwavering commitment to client success.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses by connecting them with top-tier talent and providing impeccable facility support. We strive to elevate careers by guiding candidates toward opportunities that match their true potential.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Core Values</h4>
              <ul className="space-y-4">
                {[
                  "Integrity & Transparency",
                  "Excellence in Service",
                  "Reliability & Trust",
                  "Continuous Growth"
                ].map((value, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-cyan-400 mr-3 shrink-0" size={20} />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. BOTTOM CTA SECTION */}
      <section className="py-20 bg-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-indigo-950 mb-6">Ready to experience the Rebirth standard?</h3>
          <p className="text-slate-600 mb-8">Whether you are a business looking for dedicated support or a candidate seeking your next big opportunity, our team is ready to assist you.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/30">
            Contact Our Team <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}