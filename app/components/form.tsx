import {FaLinkedin,FaGithub,FaTwitter   } from "react-icons/fa";
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-32 px-6 text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-b from-cyber-cyan/10 to-transparent p-16 rounded-[3rem] border border-cyber-cyan/20 backdrop-blur-xl"
      >
        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
          READY TO START YOUR <span className="text-cyber-cyan">NEXT PROJECT?</span>
        </h3>
        <p className="text-gray-400 text-lg mb-10 font-light tracking-wide">
          I'm currently available for freelance work and collaborations.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="https://linktr.ee/mooody_1" className="group relative px-10 py-4 bg-white text-black font-black rounded-full overflow-hidden transition-all">
            <span className="relative z-10">SAY HELLO</span>
            <div className="absolute inset-0 bg-cyber-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <div className="flex gap-6 text-2xl text-gray-500">
            <a href="#" className="hover:text-cyber-cyan transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-cyber-cyan transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-cyber-cyan transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-32 pb-10 border-t border-white/5 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.5em] text-gray-600 uppercase font-bold">
          <p>© 2026 Mohamed Hossam</p>
          <p>Built with Next.js & Coffee</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact 