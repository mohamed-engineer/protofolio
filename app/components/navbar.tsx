import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between px-8 py-3 rounded-2xl border transition-all duration-500
          ${scrolled 
            ? 'w-full max-w-4xl bg-black/40 backdrop-blur-xl border-cyber-cyan/30 shadow-[0_0_20px_rgba(0,242,255,0.15)]' 
            : 'w-full max-w-5xl bg-transparent border-white/5'
          }
        `}
      >
        {/* Logo مع تأثير نبض رقمي */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-[0_0_8px_#00f2ff]" />
          <h1 className="text-xl font-black tracking-tighter">
            MH<span className="text-cyber-cyan">.</span>
          </h1>
        </div>

        {/* Links بتصميم برمجى */}
        <ul className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Organizations', 'Contact'].map((item) => (
            <li key={item} className="relative group">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors flex items-center gap-1"
              >
                <span className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity font-mono">{"<"}</span>
                {item}
                <span className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity font-mono">{"/>"}</span>
              </a>
              {/* خط تحت العنصر بيظهر بشكل رقمي */}
              <motion.div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00f2ff]" />
            </li>
          ))}
        </ul>

        {/* زر "Terminal" أو "Resume" */}
        <button className="hidden md:block px-5 py-1.5 border border-cyber-cyan/50 text-cyber-cyan text-[10px] font-black tracking-widest uppercase rounded-lg hover:bg-cyber-cyan hover:text-black transition-all duration-300">
          EXECUTE CV
        </button>

        {/* Mobile Menu Icon (Simple & Techy) */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer group">
          <div className="w-6 h-[2px] bg-cyber-cyan" />
          <div className="w-4 h-[2px] bg-white group-hover:w-6 transition-all" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;