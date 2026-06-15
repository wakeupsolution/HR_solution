'use client';

import { motion } from 'framer-motion';
import { 
  Briefcase, Building2, Plane, Users, ArrowRight, 
  CheckCircle2, ShieldCheck, Globe, Clock, Star, MapPin, Phone, Mail 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// --- Data Arrays ---
const services = [
  { title: 'Job Consulting', icon: Briefcase, desc: 'Connecting top-tier talent with industry-leading organizations across multiple sectors.' },
  { title: 'Facility Management', icon: Building2, desc: 'Comprehensive maintenance, security, and operational support for your corporate premises.' },
  { title: 'Overseas Placements', icon: Plane, desc: 'Global career opportunities managed securely with full visa, travel, and onboarding support.' },
  { title: 'Recruitment Support', icon: Users, desc: 'End-to-end hiring solutions, from screening to interviewing, tailored for your business needs.' },
];

const testimonials = [
  { name: "Prakash R.", role: "Operations Manager", text: "Rebirth Enterprises completely transformed our facility management. Their staff is professional and highly reliable." },
  { name: "Anita S.", role: "Software Engineer", text: "Thanks to their overseas placement team, my transition to a new role abroad was seamless and stress-free." },
  { name: "Karthik M.", role: "HR Director", text: "A fantastic recruitment partner. They consistently provide high-quality candidates that fit our company culture perfectly." }
];

const reasons = [
  { title: "Govt. Registered", icon: ShieldCheck, desc: "Fully compliant with MSME and GST regulations, ensuring trustworthy and transparent operations." },
  { title: "Global Reach", icon: Globe, desc: "Extensive network for overseas placements and international recruitment support." },
  { title: "24/7 Support", icon: Clock, desc: "Dedicated facility management and HR support available whenever your business needs it." },
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />
      
      {/* 1. BANNER SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-indigo-950 px-4 sm:px-6 lg:px-8 z-0">
        {/* Background Gradients for Premium Glass/3D feel */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 -z-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            ISO Certified HR Solutions & Support
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl"
          >
            Empowering Careers. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Elevating Businesses.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl"
          >
            Your trusted partner based in Chennai. We specialize in connecting top talent with elite organizations and managing your operational facilities with excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/services" className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
              Explore Services
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-all">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10"></div>
            {/* Replace src with your actual professional office/team image */}
            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
               [Office/Team Image Here]
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg z-20">
              <p className="text-indigo-950 font-bold text-lg">Proprietor: J. Magesh Daniel</p>
              <p className="text-slate-600 text-sm">Leading excellence from Srinivasa Nagar, Kolathur.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          >
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">About Rebirth Enterprises</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950 mb-6">Bridging the gap between potential and success.</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With years of dedicated service, Rebirth Enterprises has established itself as a premier provider of HR Solutions and Facility Management Services. We understand that a company's greatest asset is its people, and a secure, well-managed environment is crucial for productivity.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Tailored recruitment strategies for IT and Non-IT sectors.",
                "Comprehensive background verification and screening.",
                "Reliable facility maintenance and housekeeping staff.",
                "Expert consultation for overseas job placements."
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <CheckCircle2 className="text-cyan-600 mr-3 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center text-indigo-950 font-bold hover:text-cyan-600 transition-colors group">
              Read Our Full Story <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR SERVICE SECTION */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950">Comprehensive Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all"
                >
                  <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-indigo-950 mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`} className="text-cyan-600 font-semibold text-sm flex items-center group-hover:text-indigo-950 transition-colors">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">The Rebirth Advantage</h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950">Why Partner With Us?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center p-6"
              >
                <div className="w-20 h-20 mx-auto bg-indigo-50 rounded-full flex items-center justify-center text-indigo-950 mb-6">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-indigo-950 mb-3">{reason.title}</h4>
                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. OUR TESTIMONIAL SECTION */}
      <section className="py-20 bg-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-2">Client Success</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold">What People Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <span className="text-cyan-400 text-sm">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT US SECTION (Home Page Cover) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info Side */}
          <div className="bg-indigo-950 text-white p-10 lg:w-2/5 flex flex-col justify-center relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl -translate-x-1/2 translate-y-1/2"></div>
            
            <h3 className="text-3xl font-bold mb-8 z-10">Get In Touch</h3>
            <div className="space-y-6 z-10">
              <div className="flex items-start">
                <MapPin className="text-cyan-400 mr-4 mt-1 shrink-0" size={24} />
                <p className="text-slate-300 text-sm leading-relaxed">
                  S4, Srinivasa Towers, Plot No.119, II Main Road,<br/>
                  Srinivasa Nagar, Kolathur,<br/>
                  Chennai - 600 099.
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-cyan-400 mr-4 shrink-0" size={24} />
                <div>
                  <p className="text-slate-300 text-sm"><a href="tel:8870459474" className="hover:text-white transition-colors">88704 59474</a></p>
                  <p className="text-slate-300 text-sm"><a href="tel:8925232474" className="hover:text-white transition-colors">89252 32474</a> / <a href="tel:7358635199" className="hover:text-white transition-colors">73586 35199</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-cyan-400 mr-4 shrink-0" size={24} />
                <div>
                  <p className="text-slate-300 text-sm"><a href="mailto:rebirthenterprises002@gmail.com" className="hover:text-white transition-colors">rebirthenterprises002@gmail.com</a></p>
                  <p className="text-slate-300 text-sm"><a href="mailto:jmagesh51@gmail.com" className="hover:text-white transition-colors">jmagesh51@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form Side */}
          <div className="p-10 lg:w-3/5">
            <h3 className="text-2xl font-bold text-indigo-950 mb-2">Send us a message</h3>
            <p className="text-slate-600 mb-8 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interested Service</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all text-slate-700">
                  <option value="">Select a service...</option>
                  <option value="job-consulting">Job Consulting</option>
                  <option value="facility-management">Facility Management</option>
                  <option value="overseas-placements">Overseas Placements</option>
                  <option value="recruitment-support">Recruitment Support Services</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-indigo-950 text-white rounded-lg font-bold hover:bg-cyan-700 transition-colors shadow-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}