import { FaCode , FaDatabase , FaPaintBrush  } from "react-icons/fa";
import { motion } from 'framer-motion';


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      color: "border-cyber-cyan text-cyber-cyan"
    },
    {
      title: "Backend",
      icon: <FaDatabase />,
      skills: ["Node.js", "Express.js", "MongoDB", "Rest APIs", "Auth"],
      color: "border-white/20 text-white"
    },
    {
      title: "Design & Logic",
      icon: <FaPaintBrush />,
      skills: ["UI/UX", "Figma", "Problem Solving", "Clean Code"],
      color: "border-cyber-cyan text-cyber-cyan"
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-6 border-t border-white/5">
      <motion.h3 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-3xl font-black mb-16 text-center tracking-[0.3em] uppercase"
      >
        Technical <span className="text-cyber-cyan">Stack</span>
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 bg-white/5 border-t-2 ${cat.color} rounded-b-xl backdrop-blur-sm group hover:bg-white/10 transition-all duration-500`}
          >
            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
            <h4 className="text-xl font-bold mb-6 tracking-widest uppercase">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="text-xs font-mono px-3 py-1 border border-white/10 rounded-full bg-black/40 text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills