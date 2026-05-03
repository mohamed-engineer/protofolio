import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      title: "Full-Stack MERN Specialization",
      issuer: "Meta / Coursera",
      date: "2024",
      skills: ["React", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Advanced Software Engineering",
      issuer: "IEEE Student Branch",
      date: "2023",
      skills: ["Architecture", "System Design"],
      link: "#"
    },
    {
      title: "UI/UX Masterclass",
      issuer: "Google Certification",
      date: "2023",
      skills: ["Figma", "User Psychology"],
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="max-w-6xl mx-auto py-24 px-6 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="text-left">
          <h3 className="text-3xl font-black tracking-[0.3em] uppercase mb-4">
            Official <span className="text-cyber-cyan shadow-cyan-500/50">Recognition</span>
          </h3>
          <p className="text-gray-500 font-light tracking-widest uppercase text-xs">
            Validated expertise from global institutions
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-10 mb-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-cyber-cyan/40 transition-all duration-500"
          >
            {/* الخلفية المضيئة عند الهوفر */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyber-cyan/10 rounded-lg text-cyber-cyan group-hover:scale-110 transition-transform duration-500">
                  <FaAward size={24} />
                </div>
                <a href={cert.link} target="_blank" className="text-gray-600 hover:text-cyber-cyan transition-colors">
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>

              <h4 className="text-xl font-bold mb-2 leading-tight group-hover:text-cyber-cyan transition-colors">
                {cert.title}
              </h4>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500">{cert.issuer}</span>
                <span className="w-1 h-1 rounded-full bg-cyber-cyan/40"></span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500">{cert.date}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, j) => (
                  <span key={j} className="text-[9px] font-mono px-2 py-1 bg-black/40 border border-white/5 rounded text-gray-400 group-hover:border-cyber-cyan/20 group-hover:text-cyber-cyan/60 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* خط التزيين السفلي */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-cyber-cyan w-0 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;