import { motion } from 'framer-motion';
import { FaServer, FaRocket, FaCodeBranch } from 'react-icons/fa';
const Organizations = () => {
  const orgs = [
    {
      id: "01",
      name: "Provix Tech",
      role: "Founder & CEO",
      status: "Active",
      period: "2022 - PRESENT",
      desc: "Architecting scalable web solutions and leading a team of developers to push the boundaries of the MERN stack.",
      tags: ["Leadership", "Strategy", "Full-Stack"],
      icon: <FaRocket />,
      main: true // ده الكارت الكبير
    },
    {
      id: "02",
      name: "SRVS",
      role: "Software Manager",
      status: "Stable",
      period: "2023 - 2024",
      desc: "Overseeing technical infrastructure and optimizing software delivery pipelines.",
      tags: ["Management", "DevOps"],
      icon: <FaServer />,
      main: false
    }
  ];

  return (
    <section id="organizations" className="max-w-6xl mx-auto py-32 px-6">
      {/* Header القسم */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-cyber-cyan"></div>
        <h3 className="text-2xl font-black tracking-[0.3em] uppercase flex items-center gap-3">
          Experience <span className="text-cyber-cyan font-mono text-sm">/ Log_File</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orgs.map((org, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`
              relative group overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] p-8
              hover:border-cyber-cyan/30 transition-all duration-500
              ${org.main ? 'md:col-span-2' : 'md:col-span-1'}
            `}
          >
            {/* تأثير الضوء الخلفي عند الهوفر */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-cyan/5 blur-[80px] group-hover:bg-cyber-cyan/10 transition-all" />

            {/* Header الكارت */}
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-cyber-cyan text-xs font-mono">{org.id}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{org.period}</span>
                </div>
                <h4 className="text-3xl font-black tracking-tighter group-hover:text-cyber-cyan transition-colors">
                  {org.name}
                </h4>
              </div>
              <div className="text-2xl text-white/10 group-hover:text-cyber-cyan/40 transition-colors">
                {org.icon}
              </div>
            </div>

            {/* محتوى الكارت */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-black tracking-widest text-gray-500 uppercase block mb-2 italic">Position:</span>
                <p className="text-lg font-bold text-white/90">{org.role}</p>
              </div>

              <div>
                <span className="text-xs font-black tracking-widest text-gray-500 uppercase block mb-2 italic">Description:</span>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {org.desc}
                </p>
              </div>

              {/* التاجات التقنية */}
              <div className="flex flex-wrap gap-2 pt-4">
                {org.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Indicator حالة الكيان */}
            <div className="absolute bottom-0 right-0 p-6 flex items-center gap-2">
               <span className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">Status:</span>
               <span className="text-[10px] font-mono text-cyber-cyan animate-pulse">{org.status}</span>
            </div>
          </motion.div>
        ))}

        {/* كارت إضافي "Call to action" عشان يكمل الـ Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-1 bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-cyber-cyan/10 transition-all cursor-pointer"
        >
          <div className="text-3xl text-cyber-cyan mb-4 group-hover:scale-125 transition-transform">
            <FaCodeBranch />
          </div>
          <h4 className="text-xl font-black mb-2">Want to build something?</h4>
          <p className="text-xs text-gray-500 mb-6 font-mono tracking-tighter italic">Let's initialize a new repository together.</p>
          <button className="text-[10px] font-black border-b border-cyber-cyan pb-1 hover:text-cyber-cyan transition-colors uppercase tracking-[0.2em]">
            Hire My Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Organizations;