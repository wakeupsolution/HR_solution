'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Target, Award } from 'lucide-react';
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

export default function JobConsultingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* 1. HERO SECTION (Immersive Background) */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Professional Consulting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-indigo-950/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="mr-2" /> Professional Growth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Job <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Connecting ambitious professionals with industry-leading organizations. We guide your career trajectory with expert market insights and strategic placements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#approach" className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/30">
                Discover Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISUAL STORY & FEATURE OVERVIEW */}
      <section id="approach" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Overlapping Images */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[500px] lg:h-[600px]">
            {/* Primary Image */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" 
                alt="Career Consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
            </div>
            
            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
                alt="Resume Review" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-30 animate-bounce-slow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <Target size={24} />
              </div>
              <div>
                <p className="text-indigo-950 font-bold text-lg leading-tight">Top Tier</p>
                <p className="text-slate-500 text-xs font-semibold uppercase">Industry Network</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Checkmarks */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">Elevate Your Path</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950 mb-6">Strategic Career Advancement.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Navigating today's competitive job market requires more than just a well-written resume. Our consulting services provide a comprehensive approach, aligning your unique skills with the specific needs of top-tier employers.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-8">
              <ul className="space-y-5">
                {[
                  "Personalized Career Mapping & Strategy", 
                  "Resume, LinkedIn & Portfolio Optimization", 
                  "Advanced Interview Preparation & Mock Sessions", 
                  "Salary Negotiation & Offer Evaluation Support"
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
            <h2 className="text-3xl font-bold text-indigo-950 mb-4">Our Consulting Edge</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-900 mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Industry Access</h3>
              <p className="text-slate-600 leading-relaxed">
                Unlock direct connections to hiring managers and exclusive, unlisted opportunities across the IT, Healthcare, and Corporate sectors.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Market Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay ahead of the curve with deep insights into the latest skill demands, industry shifts, and dynamic hiring practices.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Skill Positioning</h3>
              <p className="text-slate-600 leading-relaxed">
                We help you identify and articulate your core strengths, ensuring your unique value proposition resonates with top employers.
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to make your next big move?</h2>
          <p className="text-cyan-100 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
            Don't leave your career trajectory to chance. Speak with our consulting experts today and start building the future you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg group">
              Consult With Us Today <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}