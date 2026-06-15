import { notFound } from 'next/navigation';
import { Briefcase, Building2, Plane, Users, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// --- Data for all 4 services ---
const serviceData = {
  'job-consulting': {
    title: 'Job Consulting',
    icon: Briefcase,
    heroDesc: 'Connecting ambitious professionals with organizations that value their true potential.',
    overview: 'Our Job Consulting service bridges the gap between top-tier talent and industry-leading companies. We do not just forward resumes; we take the time to understand the unique culture of our client organizations and the specific career aspirations of our candidates to ensure a perfect, long-lasting fit.',
    features: [
      'Personalized career mapping and guidance',
      'Extensive network in IT, Manufacturing, and Corporate sectors',
      'Interview preparation and resume optimization',
      'Strict confidentiality for senior-level placements'
    ]
  },
  'facility-management': {
    title: 'Facility Management Services',
    icon: Building2,
    heroDesc: 'Maintaining your physical spaces so you can focus entirely on growing your business.',
    overview: 'Rebirth Enterprises provides comprehensive Facility Management tailored to your premises. From immaculate housekeeping and deep cleaning to reliable security and electro-mechanical maintenance, our trained professionals ensure your corporate environment is safe, clean, and highly operational 24/7.',
    features: [
      'Professional housekeeping and deep cleaning services',
      'Trained security personnel and access management',
      'Routine electrical, plumbing, and HVAC maintenance',
      'Pest control and specialized sanitization programs'
    ]
  },
  'overseas-placements': {
    title: 'Overseas Placements',
    icon: Plane,
    heroDesc: 'Your trusted gateway to secure, verified international career opportunities.',
    overview: 'Expanding your career globally can be daunting. Our Overseas Placement division simplifies the process. We work directly with verified international employers to provide legitimate, highly rewarding opportunities across the Middle East, Europe, and Asia. We handle the complexities so you can focus on your new role.',
    features: [
      '100% verified and secure international job offers',
      'Complete assistance with visa processing and documentation',
      'Pre-departure orientation and cultural training',
      'Dedicated travel and flight booking support'
    ]
  },
  'recruitment-support': {
    title: 'Recruitment Support Services',
    icon: Users,
    heroDesc: 'End-to-end hiring solutions acting as an extension of your internal HR team.',
    overview: 'Finding the right candidate is time-consuming. Our Recruitment Support Services allow businesses to outsource their entire hiring pipeline. From drafting job descriptions and initial screenings to conducting preliminary interviews and comprehensive background checks, we deliver finalized, ready-to-hire talent.',
    features: [
      'Targeted talent sourcing and headhunting',
      'Comprehensive preliminary screening and skill testing',
      'Rigorous background, education, and reference verification',
      'Seamless coordination of final interview schedules'
    ]
  }
};

// Generates static paths for export
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetail({ params }) {
  const service = serviceData[params.slug];

  // If the URL doesn't match our 4 services, show a 404 page
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      {/* Dynamic Hero Section */}
      <section className="pt-32 pb-20 bg-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-3xl flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Icon size={40} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-cyan-100 max-w-2xl">{service.heroDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">Service Overview</h2>
            <h3 className="text-3xl font-bold text-indigo-950 mb-6">Delivering Excellence.</h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              {service.overview}
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h4 className="text-xl font-bold text-indigo-950 mb-6">Key Benefits</h4>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-cyan-600 mr-4 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-[500px] bg-slate-200 rounded-3xl flex items-center justify-center text-slate-500 italic shadow-2xl relative overflow-hidden">
               [ {service.title} Image Placeholder ]
               <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA tied directly to the service */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-r from-cyan-600 to-indigo-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need help with {service.title}?</h3>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Our experts in Chennai are ready to provide a customized solution tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-indigo-950 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg">
                Contact Us Now
              </Link>
              <a href="tel:8870459474" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 backdrop-blur-sm transition-colors">
                Call 88704 59474
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}