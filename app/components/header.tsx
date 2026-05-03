import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Variants } from 'framer-motion'; // تأكد من استيراد النوع
const Hero = () => {
  const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.8, 
      ease: "easeOut" as const // هنا السر: "as const" بتعرفه إن ده قيمة ثابتة مش أي string
    }
  }),
};

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* الاضاءة الخلفية (Ambient Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-cyan/10 blur-[120px] rounded-full -z-10" />

      <div className="text-center z-10 px-6">
        
        {/* الصورة الشخصية مع الـ Neon Ring */}
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-10"
        >
          <div className="absolute inset-0 rounded-full border border-cyber-cyan/30 animate-pulse" />
          <div className="absolute inset-2 rounded-full border border-white/5" />
          <div className="w-full h-full rounded-full p-1 bg-gradient-to-b from-cyber-cyan to-transparent">
             <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-black">
                <Image 
                  src="/profile.png" 
                  alt="Mohamed Hossam" 
                  width={160} height={160} 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
             </div>
          </div>
        </motion.div>

        {/* الاسم بتأثير الـ Cyber Glow */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-sm md:text-base font-black tracking-[0.5em] text-cyber-cyan mb-4 uppercase">
            System.Initialize(Status: Online)
          </h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            MOHAMED <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-cyber-cyan/50 shadow-cyber-cyan/20">HOSSAM</span>
          </h1>
        </motion.div>

        {/* الوصف الوظيفي */}
        <motion.p 
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-8 tracking-wide"
        >
          Full-Stack MERN Developer <span className="text-cyber-cyan">/</span> Entrepreneur 
          <br />
          <span className="text-sm text-gray-500 mt-2 block font-mono">
            {">"} Founder of Provix Tech | Software Manager at SRVS
          </span>
        </motion.p>

        {/* أزرار الفعل (Action Buttons) */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#organizations" className="px-10 py-4 bg-cyber-cyan text-black font-black rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-white/20 uppercase text-xs tracking-widest">
            View Projects
          </a>
          <a href="mailto:work@mohamed.com" className="px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
            Contact Me
          </a>
        </motion.div>

        {/* السوشيال ميديا بشكل Minimalist */}
        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
          className="flex justify-center gap-8 text-gray-500"
        >
          {[
            { icon: <FaLinkedin />, url: "#" },
            { icon: <FaGithub />, url: "#" },
            { icon: <FaTwitter />, url: "#" },
            { icon: <FaEnvelope />, url: "#" }
          ].map((social, i) => (
            <a key={i} href={social.url} className="text-xl hover:text-cyber-cyan transition-colors duration-300 hover:scale-120 transform">
              {social.icon}
            </a>
          ))}
        </motion.div>

      </div>

      {/* مؤشر النزول (Scroll Indicator) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-cyan/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-cyan to-transparent" />
      </motion.div>

    </section>
  );
};

export default Hero;