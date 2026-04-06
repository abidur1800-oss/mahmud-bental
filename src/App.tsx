/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Clock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass-morphism shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-xl shadow-medical-blue/10 border-2 border-white transition-transform group-hover:scale-105">
            <img 
              src="https://yt3.googleusercontent.com/i5vB4rOnKpEx5UGu37nzXncrUIVmih6M7lOPlPXkybmSJ_1jCYPGuVLP_j41Uy0l8YEhcZsD5A=s160-c-k-c0x00ffffff-no-rj" 
              alt="Mahmud Dental Care Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight group-hover:text-medical-blue transition-colors">
            Mahmud<span className="text-medical-blue group-hover:text-slate-900 transition-colors">Dental</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-medical-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment"
            className="medical-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-medical-blue/20 hover:scale-105 transition-transform"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment"
              className="medical-gradient text-white px-6 py-3 rounded-xl text-center font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-soft -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-medical-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-medical-blue/10 text-medical-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted by 5000+ Patients in Dhaka</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Pain-Free <span className="text-gradient">Dental Care</span> You Can Trust
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Experience advanced treatments with gentle care and affordable pricing. Your smile is our priority at Mahmud Dental Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#appointment"
              className="medical-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-medical-blue/20 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Book Appointment <Calendar className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/8801708563654" 
              target="_blank"
              rel="noreferrer"
              className="bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
            >
              WhatsApp Now <MessageCircle className="w-5 h-5 text-green-500" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-morphism p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Success Rate</p>
                <p className="text-lg font-bold">99.9%</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 -right-6 glass-morphism p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
                <Users className="text-medical-blue w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
                <p className="text-lg font-bold">5k+</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutDoctor = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl bg-medical-soft">
            <img 
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/516194298_1314713793989440_848180506552640450_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zkX-mm8rCDEQ7kNvwE3gBi5&_nc_oc=AdqxQR6pPBVvk_4ix7b5__V93OgvM4LGzBF-smskprEBJmaX89v6plei-rKAYySfzkU&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=rPOgvMoReD3P2_BXDLdDOw&_nc_ss=7a3a8&oh=00_Af2pbWp_IWcUvWUgKv25vixuT_5rLKFwFmadFZEXHlz4fw&oe=69D9A9D5" 
              alt="Dr. Shumya Mahmud"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-1">Dr. Shumya Mahmud (Nisu)</h3>
            <p className="text-medical-blue font-semibold mb-2">BDS, MPH (Epidemiology)</p>
            <p className="text-xs text-slate-500 font-medium mb-4">BMDC Reg. No: 4716</p>
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-medical-blue font-bold tracking-widest uppercase text-sm mb-4">Meet Your Dentist</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Expert Care with a <span className="text-medical-blue">Personal Touch</span></h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              Dr. Shumya Mahmud (Nisu) is a dedicated Dental Surgeon and the Founder of Mahmud Dental Care. With a Bachelor of Dental Surgery (BDS) from Dhaka and a Master of Public Health (MPH) in Epidemiology, she combines clinical excellence with a deep commitment to patient safety and long-term oral health.
            </p>
            <p>
              Known for her gentle and compassionate approach, Dr. Nisu specializes in pain-free and minimally invasive procedures. Whether providing complex root canal therapy or specialized pediatric care, she ensures a comfortable, stress-free experience tailored to every patient’s unique needs.
            </p>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "Registered Dental Surgeon (BMDC Reg. No: 4716)",
              "Specialized in Endodontics & Conservative Dentistry",
              "Expert in Restorative & Cosmetic Procedures",
              "Strong Emphasis on Preventive Care & Hygiene"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 bg-medical-teal/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-medical-teal w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="#appointment"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Teeth Whitening",
      desc: "Get a brighter, more confident smile with our professional whitening treatments.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Root Canal Treatment",
      desc: "Advanced, pain-free root canal procedures to save your natural teeth.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Dental Implants",
      desc: "Permanent and natural-looking solutions for missing teeth.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Braces & Orthodontics",
      desc: "Straighten your teeth with modern braces or clear aligners.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle and friendly dental care specifically designed for children.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "General Checkup",
      desc: "Comprehensive oral exams and cleaning to maintain your dental health.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-medical-soft/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Premium <span className="text-medical-blue">Services</span></h2>
          <p className="text-slate-600 text-lg">We offer a wide range of dental treatments using the latest technology to ensure the best results for our patients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#appointment" className="text-medical-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Pain-Free Treatment",
      desc: "We use advanced techniques to ensure your comfort during every procedure.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Affordable Care",
      desc: "High-quality dental services at prices that won't break the bank.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Advanced Technology",
      desc: "Equipped with modern dental tools for precise and effective treatment.",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Friendly Environment",
      desc: "A warm and welcoming clinic designed to make you feel at ease.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Patients <span className="text-medical-blue">Choose Us</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-medical-blue text-white rounded-xl flex items-center justify-center shadow-lg shadow-medical-blue/20">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Happy Patient"
                className="w-full h-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-medical-teal/10 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Real Results, <span className="text-medical-blue">Real Smiles</span></h2>
          <p className="text-slate-400 text-lg">See the transformation our patients experience after their treatments.</p>
        </div>

        <div className="max-w-4xl mx-auto relative group cursor-ew-resize select-none">
          <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
            {/* After Image (Base) */}
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200" 
              alt="After Treatment"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Before Image (Overlay) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
                alt="Before Treatment"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase z-30">Before</div>
            <div className="absolute top-6 right-6 bg-medical-blue/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase z-30">After</div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900">
                <div className="flex gap-0.5">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos} 
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Anisur Rahman",
      role: "Business Owner",
      text: "Dr. Nisu is amazing! I was terrified of root canals, but she made it completely painless. Dhaka-r moddhe best dental care.",
      rating: 5
    },
    {
      name: "Sultana Kamal",
      role: "Teacher",
      text: "Very clean clinic and professional staff. My kids actually enjoy visiting the dentist now. Highly recommended for families.",
      rating: 5
    },
    {
      name: "Tanvir Ahmed",
      role: "Software Engineer",
      text: "Got my braces from here. The progress is great and the pricing is very reasonable compared to other clinics in Khilkhet.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our <span className="text-medical-blue">Patients Say</span></h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
          <p className="text-slate-600 font-semibold">4.9/5 Average Rating on Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-medical-soft p-8 rounded-[32px] relative"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue/20 rounded-full flex items-center justify-center font-bold text-medical-blue">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-medical-soft/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 medical-gradient text-white flex flex-col justify-center">
            <h2 className="text-4xl font-display font-bold mb-6">Ready for a <span className="text-slate-900">Better Smile?</span></h2>
            <p className="text-white/80 text-lg mb-10">Fill out the form and our team will contact you within 24 hours to confirm your appointment.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Call Us Directly</p>
                  <p className="text-xl font-bold">+880 1708-563654</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Opening Hours</p>
                  <p className="text-xl font-bold">Sat - Thu: 10 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Thank You!</h3>
                <p className="text-slate-600">Your request has been received. We'll call you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      {...register("name", { required: true })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      {...register("phone", { required: true })}
                      placeholder="017XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-blue outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Needed</label>
                  <select 
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-blue outline-none transition-all"
                  >
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Root Canal</option>
                    <option>Braces</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your dental concerns..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-blue outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl"
                >
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  const mapsUrl = "https://www.google.com/maps/dir//Mahmud+Dental+Care,+Lake+City+Concord,+Shopping+Complex+(Level+3,+Dhaka+1229/@23.7808405,90.419689,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c77097266435:0xa749782336e077a8!2m2!1d90.4352039!2d23.8351821?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-display font-bold mb-8">Find Us in <span className="text-medical-blue">Dhaka</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-medical-soft text-medical-blue rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-slate-600">Lake City Concord, Shopping Complex (Level 3), Dhaka 1229, Bangladesh</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-medical-soft text-medical-blue rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-slate-600">+880 1708-563654</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-medical-soft text-medical-blue rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-slate-600">mahmuddentalcare.dhaka@gmail.com</p>
                </div>
              </div>
            </div>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="lg:col-span-2 relative group">
            <div className="h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.601!2d90.4352!3d23.83518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77097266435%3A0xa749782336e077a8!2sMahmud%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1712412345678!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10 bg-transparent"
                aria-label="View on Google Maps"
              ></a>
            </div>
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-slate-900 text-sm font-bold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-medical-blue" />
                Click for Directions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl transition-transform group-hover:scale-105">
                <img 
                  src="https://yt3.googleusercontent.com/i5vB4rOnKpEx5UGu37nzXncrUIVmih6M7lOPlPXkybmSJ_1jCYPGuVLP_j41Uy0l8YEhcZsD5A=s160-c-k-c0x00ffffff-no-rj" 
                  alt="Mahmud Dental Care Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight group-hover:text-medical-blue transition-colors">
                Mahmud<span className="text-medical-blue group-hover:text-white transition-colors">Dental</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing modern, pain-free dental care in Dhaka. Your smile is our commitment to excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/mahmuddentalcare" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/mahmud_dental_care/" },
                { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@MahmudDentalCare-s7k" },
                { 
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ), 
                  href: "https://www.tiktok.com/@mahmuddentalcare" 
                }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical-blue transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Nisu</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Teeth Whitening</li>
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Braces & Orthodontics</li>
              <li>Pediatric Dentistry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get dental tips and special offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-medical-blue w-full"
              />
              <button className="bg-medical-blue p-3 rounded-xl hover:bg-medical-blue/80 transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Mahmud Dental Care. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/8801708563654"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <AppointmentSection />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
