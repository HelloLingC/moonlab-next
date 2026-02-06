'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, MoveUpRight, Menu, X, Circle, Globe, Layers, Zap } from 'lucide-react';

/* Brand: Moonlab
  Theme: Warm Minimalism
  Colors: 
    - Background: #F5F2EB (Warm Stone/Bone)
    - Foreground: #0F172A (Deep Midnight Slate)
    - Accent: #D4D4D8 (Soft warm grey for lines)
*/

const Moonlab = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#F5F2EB] overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${
          isScrolled ? 'bg-[#F5F2EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2 z-50 group cursor-pointer">
          <div className="relative w-6 h-6 overflow-hidden">
            <div className="absolute inset-0 bg-[#0F172A] rounded-full transform group-hover:scale-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 border border-[#0F172A] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">Moonlab</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium tracking-wide hover:opacity-60 transition-opacity uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#F5F2EB] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-light tracking-tighter hover:italic transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-3/5 z-10">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tighter mb-8">
            Digital 
            <span className="italic font-light">Plan</span>
          </h1>
          <p className="text-lg md:text-xl md:w-2/3 leading-relaxed opacity-80 mb-12">
             We distill complex ideas into pure digital experiences. Minimalist by design, distinctive by nature.
          </p>
          <div className="flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-[#0F172A] text-[#F5F2EB] rounded-full overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Get more<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-[#2d3b59] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>
        </div>

        {/* Abstract Visual Element */}
        <div className="absolute top-1/2 right-0 md:right-12 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none md:opacity-100 mix-blend-multiply">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
            <path fill="#0F172A" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.3C59.6,43.1,48.3,51.8,36.5,58.8C24.7,65.8,12.4,71.1,-0.6,72.1C-13.6,73.1,-27.2,69.8,-38.7,62.5C-50.2,55.2,-59.6,43.9,-67.2,31.4C-74.8,18.9,-80.6,5.2,-78.3,-7.4C-76,-20,-65.6,-31.5,-55.4,-41.2C-45.2,-50.9,-35.2,-58.8,-24.3,-68C-13.4,-77.2,-1.6,-87.7,11.5,-87.7C24.6,-87.7,49.2,-77.2,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </header>

      {/* --- Infinite Scroll Marquee --- */}
      <div className="w-full py-8 border-y border-[#0F172A]/10 overflow-hidden bg-[#F5F2EB]">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
             <span key={i} className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-40">
               Strategy • Design • Development • Growth • 
             </span>
          ))}
        </div>
      </div>

      {/* --- Expertise Section --- */}
      <section id="expertise" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Our Expertise</h3>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Built for the <br/>modern web.</h2>
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              { icon: <Layers className="w-6 h-6"/>, title: "Product Design", desc: "User-centric interfaces that blend aesthetics with deep functionality." },
              { icon: <Globe className="w-6 h-6"/>, title: "Web Development", desc: "Robust, scalable front-end architecture using modern frameworks." },
              { icon: <Zap className="w-6 h-6"/>, title: "Brand Identity", desc: "Distinctive visual systems that cut through the noise of the market." },
              { icon: <Circle className="w-6 h-6"/>, title: "Art Direction", desc: "Curating visual narratives that elevate your brand's storytelling." },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="mb-6 p-4 bg-[#0F172A]/5 w-fit rounded-full group-hover:bg-[#0F172A] group-hover:text-[#F5F2EB] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                <p className="opacity-70 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Selected Work --- */}
      <section id="work" className="py-24 bg-[#0F172A] text-[#F5F2EB]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Selected Work</h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
              View All <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-col gap-24">
            {[
              { id: '01', client: 'Aetheria', category: 'Fintech', desc: 'Reimagining the future of decentralized finance.' },
              { id: '02', client: 'Mono', category: 'E-Commerce', desc: 'A minimalist shopping experience for luxury goods.' },
              { id: '03', client: 'Vanguard', category: 'Architecture', desc: 'Portfolio site for an award-winning firm.' },
            ].map((project, idx) => (
              <div key={idx} className="group border-t border-[#F5F2EB]/20 pt-12 grid grid-cols-1 md:grid-cols-12 gap-6 cursor-pointer">
                <div className="md:col-span-2 text-xl md:text-2xl opacity-50 font-light font-mono">{project.id}</div>
                <div className="md:col-span-5">
                   <h3 className="text-4xl md:text-5xl font-semibold mb-4 group-hover:translate-x-4 transition-transform duration-500 ease-out">{project.client}</h3>
                   <div className="flex gap-2 text-xs uppercase tracking-widest opacity-60">
                     <span>{project.category}</span>
                   </div>
                </div>
                <div className="md:col-span-4 flex items-end">
                  <p className="text-lg opacity-70 max-w-md">{project.desc}</p>
                </div>
                <div className="md:col-span-1 flex items-end justify-end">
                   <div className="p-3 border border-[#F5F2EB]/20 rounded-full group-hover:bg-[#F5F2EB] group-hover:text-[#0F172A] transition-all duration-300">
                     <MoveUpRight size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 md:hidden text-center">
             <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest">
              View All <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Philosophy / Quote --- */}
      <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <Circle size={16} className="mx-auto mb-12 animate-pulse text-[#0F172A]" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-12">
          &quot;Be better, and aware&quot;
        </h2>
        <p className="text-sm font-bold uppercase tracking-widest opacity-40">Moonlab Philosophy</p>
      </section>

      {/* --- Footer / Contact --- */}
      <footer id="contact" className="px-6 md:px-12 pb-12 pt-24 border-t border-[#0F172A]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">Let&apos;s talk.</h2>
              <a href="mailto:hello@moonlab.top" className="text-2xl md:text-3xl underline decoration-1 underline-offset-8 decoration-[#0F172A]/30 hover:decoration-[#0F172A] transition-all">
                hello@moonlab.top
              </a>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end gap-8">
               <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left">
                  <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                  <a href="#" className="hover:opacity-50 transition-opacity">Twitter / X</a>
                  <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                  <a href="#" className="hover:opacity-50 transition-opacity">Dribbble</a>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-[#0F172A]/10">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="w-3 h-3 bg-[#0F172A] rounded-full"></div>
               <span className="font-bold tracking-tight uppercase">Moonlab</span>
            </div>
            <div className="flex gap-8 text-xs opacity-50 uppercase tracking-widest">
              <span>© {new Date().getFullYear()}</span>
              <a href="#" className="hover:opacity-100">Privacy</a>
              <a href="#" className="hover:opacity-100">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for custom marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Moonlab;