'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="pt-32 pb-20 bg-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Get in <span className="text-cyan-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Whether you're an employer looking for top talent or a professional seeking your next opportunity, our team in Chennai is ready to help.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT GRID SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Information */}
          <div className="bg-indigo-950 text-white p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Address */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-cyan-600 transition-colors">
                    <MapPin className="text-cyan-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Head Office</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      S4, Srinivasa Towers, Plot No.119,<br/>
                      II Main Road, Srinivasa Nagar,<br/>
                      Kolathur, Chennai - 600 099.
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-cyan-600 transition-colors">
                    <Phone className="text-cyan-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Phone Numbers</h4>
                    <p className="text-slate-300 text-sm mb-1"><a href="tel:8870459474" className="hover:text-cyan-400 transition-colors">88704 59474</a> (Primary)</p>
                    <p className="text-slate-300 text-sm"><a href="tel:8925232474" className="hover:text-cyan-400 transition-colors">89252 32474</a> / <a href="tel:7358635199" className="hover:text-cyan-400 transition-colors">73586 35199</a></p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-cyan-600 transition-colors">
                    <Mail className="text-cyan-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Email Us</h4>
                    <p className="text-slate-300 text-sm mb-1"><a href="mailto:rebirthenterprises002@gmail.com" className="hover:text-cyan-400 transition-colors break-all">rebirthenterprises002@gmail.com</a></p>
                    <p className="text-slate-300 text-sm"><a href="mailto:jmagesh51@gmail.com" className="hover:text-cyan-400 transition-colors break-all">jmagesh51@gmail.com</a></p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-cyan-600 transition-colors">
                    <Clock className="text-cyan-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Working Hours</h4>
                    <p className="text-slate-300 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-300 text-sm">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Registration Banner at bottom of info */}
            <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
              <div className="flex items-center text-cyan-400 mb-2">
                <ShieldCheck size={20} className="mr-2" />
                <span className="font-bold text-sm uppercase tracking-wider">Verified Business</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mb-1">MSME UDYAM: TN-02-0090149</p>
              <p className="text-xs text-slate-400 font-mono">GSTIN: 33AQUPM3307N1ZE | 33AZRPL1428M2ZL</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-10 lg:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-indigo-950 mb-2">Send us a message</h3>
            <p className="text-slate-600 mb-8 text-sm">Fill out the form below and our dedicated team will get back to you promptly.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all" placeholder="Enter your email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all text-slate-700">
                    <option value="general">General Inquiry</option>
                    <option value="job-consulting">Job Consulting Services</option>
                    <option value="facility-management">Facility Management Services</option>
                    <option value="overseas-placements">Overseas Placements</option>
                    <option value="recruitment-support">Recruitment Support Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all resize-none" placeholder="How can we assist you today?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-indigo-950 text-white rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg group">
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH MAP SECTION */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-200 relative">
            {/* Google Maps Embed iframe targeting Kolathur, Chennai */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.069947936636!2d80.20721151121087!3d13.125740012117562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264ec4f51e04b%3A0xc6c7b9ab1df205be!2sSrinivasa%20Nagar%2C%20Kolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!5e0!3m2!1sen!2sin!4v1718471465942!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    
  );
}