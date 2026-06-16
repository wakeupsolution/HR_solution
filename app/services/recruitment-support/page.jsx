'use client';

import { motion } from 'framer-motion';
import { Users, UserCheck, Clock, CheckCircle2, ArrowRight, Sparkles, Target, Briefcase } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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

export default function RecruitmentSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* 1. HERO SECTION (Immersive Background) */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden flex-shrink-0">
        {/* <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop" 
            alt="HR Team Meeting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-indigo-950/80 to-transparent" />
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="mr-2" /> B2B Hiring Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black mb-6 tracking-tight">
              Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Support</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Streamline your hiring process. We act as an extension of your HR department to source, screen, and secure the absolute best candidates for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#solutions" className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/30">
                Explore Hiring Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISUAL STORY & FEATURE OVERVIEW */}
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Overlapping Images */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[500px] lg:h-[600px]">
            {/* Primary Image */}
            {/* <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Interview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
            </div> */}
            
            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" 
                alt="Candidate Assessment" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-30 animate-bounce-slow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <Target size={24} />
              </div>
              <div>
                <p className="text-indigo-950 font-bold text-lg leading-tight">Pre-Vetted</p>
                <p className="text-slate-500 text-xs font-semibold uppercase">Elite Talent Pool</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Checkmarks */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">Build Your Executive Team</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950 mb-6">Precision Hiring at Scale.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Finding the perfect cultural and technical fit is critical for your company's growth. Our dedicated recruitment team takes the heavy lifting off your internal HR, managing everything from targeted talent sourcing to final offer negotiations.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-8">
              <ul className="space-y-5">
                {[
                  "Executive Search & Niche Headhunting", 
                  "Bulk Hiring & Campus Recruitment Drives", 
                  "Contract, Temporary & Permanent Staffing", 
                  "Comprehensive Payroll & Compliance Management"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-semibold">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                      <CheckCircle2 className="text-cyan-600" size={14} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICE PILLARS (Grid) */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-950 mb-4">Our Recruitment Methodology</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-900 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Targeted Sourcing</h3>
              <p className="text-slate-600 leading-relaxed">
                We leverage extensive industry networks and advanced digital tools to identify passive and active candidates who perfectly match your requirements.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Rigorous Screening</h3>
              <p className="text-slate-600 leading-relaxed">
                Every candidate undergoes strict preliminary interviews, technical skill assessments, and comprehensive background verifications.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Time Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">
                We drastically reduce your time-to-hire by presenting only the top 5% of shortlisted applicants, allowing your team to focus on the final selection.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 relative z-10">Looking to expand your workforce?</h2>
          <p className="text-cyan-100 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
            Partner with our HR experts today and build a highly capable team aligned with your company's long-term vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg group">
              Discuss Your Hiring Needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a href="tel:8870459474" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 backdrop-blur-sm transition-colors">
              Call Our HR Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}