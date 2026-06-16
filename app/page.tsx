'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Building2, Plane, Users, ArrowRight, 
  CheckCircle2, ShieldCheck, Globe, Clock, Star, MapPin, Phone, Mail,
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const services = [
  {
    title: "Job Consulting",
    desc: "Connecting top-tier talent with industry-leading organizations across multiple sectors.",
    // Image of professionals discussing in a modern office
    image: "https://cdn.mentorcruise.com/cdn-cgi/image/width=1200,format=auto/https://lh7-rt.googleusercontent.com/docsz/AD_4nXdaelC0ypqqkrrFASn_Oo6Mf2MJbtAng2VMuaHGHBjykQGCEGyDYLm3iNGmMdhiFydUnBvuTEPKdFcWuS8bl_-zpUwIvkp4gksmXt-Wq7JK_j36RXLCELe0egLQXSI_eyb-pz_j4w?key=Bigp1rv-YIudQqx1wJxjRn2y"
  },
  {
    title: "Facility Management",
    desc: "Comprehensive maintenance, security, and operational support for your corporate premises.",
    // Image of a clean, highly professional modern corporate interior
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Overseas Placements",
    desc: "Global career opportunities managed securely with full visa, travel, and onboarding support.",
    // Image of aviation/travel representing global movement
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Recruitment Support",
    desc: "End-to-end hiring solutions, from screening to interviewing, tailored for your business needs.",
    // Image of reviewing resumes/documents during an interview process
    image: "https://humanassethr.com/wp-content/uploads/2026/02/employersupport.jpg"
  }
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
const slides = [
  {
    id: 1,
    badge: "TALENT ACQUISITION PARTNER",
    title: "Find & Recruit",
    subtitle: "The Best Talent",
    titleSuffix: "For Your Business.",
    description: "Your trusted partner based in Chennai. We specialize in connecting top talent with elite organizations to elevate your workforce.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "GLOBAL PLACEMENTS",
    title: "Build Your Next",
    subtitle: "Industry Leading",
    titleSuffix: "Executive Team.",
    description: "We leverage advanced analytics and expansive networks to source executive talent that transforms companies from the inside out.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "FACILITY MANAGEMENT",
    title: "Experience Daily",
    subtitle: "Operational Excellence",
    titleSuffix: "At Your Workspace.",
    description: "Beyond staffing, we manage your operational facilities with precision, ensuring a highly secure and seamless work environment.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
  }
];
// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />
   <section 
      // FIX: Increased min-h to 850px and added pb-24 lg:pb-32 to push content up
      className="relative h-[100vh] min-h-[850px] w-full bg-slate-950 flex items-center pt-24 pb-24 lg:pb-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- SLIDER BACKGROUNDS --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          {/* Dark Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40 backdrop-blur-[2px]" />
          
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>
      </AnimatePresence>

      {/* --- MAIN LEFT-ALIGNED CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="w-full lg:w-2/3 xl:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start text-left"
            >
              {/* Badge */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-cyan-400"></div>
                <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  {slides[current].badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                {slides[current].title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {slides[current].subtitle}
                </span> <br />
                {slides[current].titleSuffix}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl font-light leading-relaxed drop-shadow-md border-l-2 border-indigo-500/50 pl-4 ml-1">
                {slides[current].description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                <Link href="/services" passHref>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                  >
                    Get A Quotation
                  </motion.button>
                </Link>
                <Link href="/contact" passHref>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-all"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>

              {/* Satisfaction Block */}
              <div className="flex items-center gap-4 bg-slate-900/60 border border-white/10 backdrop-blur-md p-3 pr-6 rounded-full shadow-2xl">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                </div>
                <div>
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="mr-0.5" />)}
                  </div>
                  <p className="text-white font-bold text-sm leading-none">98% Satisfaction Clients</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- BOTTOM DIAGONAL SHAPE DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-20 lg:h-28 fill-slate-50">
          <path d="M1200 120L0 120 0 120 1200 0z" />
        </svg>
      </div>

      {/* --- NAVIGATION CONTROLS --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all hidden sm:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all hidden sm:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* FIX: Raised dots (bottom-28 lg:bottom-32) so they clear the top of the diagonal shape */}
      <div className="absolute bottom-28 lg:bottom-32 right-8 lg:right-16 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index 
                ? "w-8 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" 
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
      {/* 2. ABOUT US SECTION */}
<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Professional Image Layout */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={fadeUp}
      className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
    >
      {/* Subtle Indigo Multiplier Overlay */}
      <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 transition-colors duration-300 group-hover:bg-indigo-900/5"></div>
      
      {/* High-Quality Demo Corporate Image */}
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
        alt="Rebirth Enterprises Professional Team Workspace" 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      
      {/* Glassmorphic Business Profile Card */}
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 border border-white/20">
        <p className="text-indigo-950 font-bold text-lg">Proprietor: J. Magesh Daniel</p>
        <p className="text-slate-600 text-sm font-medium mt-0.5">Leading excellence from Srinivasa Nagar, Kolathur.</p>
      </div>
    </motion.div>
    
    {/* Right Side: Description & Highlights */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={fadeUp}
    >
      <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">About Rebirth Enterprises</h2>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-indigo-950 mb-6">Bridging the gap between potential and success.</h3>
      <p className="text-slate-600 mb-6 leading-relaxed font-light">
        With years of dedicated service, Rebirth Enterprises has established itself as a premier provider of HR Solutions and Facility Management Services. We understand that a company's greatest asset is its people, and a secure, well-managed environment is crucial for productivity.
      </p>
      
      <ul className="space-y-4 mb-8">
        {[
          "Tailored recruitment strategies for IT and Non-IT sectors.",
          "Comprehensive background verification and screening.",
          "Reliable facility maintenance and housekeeping staff.",
          "Expert consultation for overseas job placements."
        ].map((item, i) => (
          <li key={i} className="flex items-start text-slate-700 font-medium">
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
     <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Optional: Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-3">
              Our Expertise
            </h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-indigo-950 tracking-tight">
              Comprehensive Solutions
            </h3>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Empowering your business with cutting-edge technology and strategic innovation designed for growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid (Exactly 4 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                // Staggered fade-up animation based on the card's index
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                // Card hover effects
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-500 border border-slate-100 transform hover:-translate-y-2"
              >
                {/* Image Container with Smooth Hover Zoom */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  {/* Dark overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-indigo-950/30 group-hover:bg-indigo-950/10 transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h4 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  {/* Styled "More" Button */}
                  <div className="mt-auto pt-5 border-t border-slate-100">
                    <Link 
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 text-indigo-950 font-semibold text-sm hover:bg-cyan-600 hover:text-white transition-all duration-300 group/btn"
                    >
                      <span>Explore Service</span>
                      {/* Arrow translates to the right on button hover */}
                      <ArrowRight 
                        size={18} 
                        className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300" 
                      />
                    </Link>
                  </div>
                </div>
                
                {/* Subtle bottom gradient border that appears on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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