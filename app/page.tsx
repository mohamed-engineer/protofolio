'use client';

import Image from "next/image";
import { FaCode , FaDatabase , FaPaintBrush  } from "react-icons/fa";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const popHover = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.98 } };

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white overflow-x-hidden relative"
      suppressHydrationWarning
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes rotate-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounceIn { 0% { opacity: 0; transform: translateY(20px); } 50% { opacity: 1; } 100% { transform: translateY(0); } }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slide-down { animation: slideInDown 0.6s ease-out; }
        .animate-slide-up { animation: slideInUp 0.6s ease-out; }
        .animate-slide-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-fade-in-scale { animation: fadeInScale 0.6s ease-out; }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .skill-badge {
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .skill-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
        .skill-badge:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          animation: slideInRight 0.8s ease-out forwards;
        }

        .org-card {
          position: relative;
          overflow: hidden;
        }
        .org-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          animation: rotate-slow 8s linear infinite;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      </div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold animate-slide-down">
            <span className="gradient-text">MH</span>
          </h1>
          <ul className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Organizations', 'Contact'].map((item, i) => (
              <motion.li key={item} variants={fadeUp} className=""> 
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-300 relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div variants={fadeUp} className="mb-8 animate-fade-in-scale">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1 animate-glow relative">
            <div className="absolute inset-0 rounded-full animate-rotate-slow opacity-30" style={{
              background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
            }}></div>
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-5xl animate-float">
              <Image src="/profile.png" alt="Profile Picture" width={150} height={150} className="rounded-full object-cover" />
            </div>
          </div>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Mohamed Hossam</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-300 mb-2">
          Full-Stack MERN Developer & Entrepreneur
        </motion.p>
        <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-8">
          18 years old | Founder of Provix Tech | Software Manager at SRVS
        </motion.p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.a {...popHover} href="https://www.linkedin.com/in/mohamed-hoosam11/" className="w-12 h-12 rounded-full bg-slate-700 hover:bg-blue-500 flex items-center justify-center transition" title="LinkedIn" variants={fadeUp}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.001z"/>
            </svg>
          </motion.a>
          <motion.a {...popHover} href="https://www.x.com/cjq8_" className="w-12 h-12 rounded-full bg-slate-700 hover:bg-blue-400 flex items-center justify-center transition" title="Twitter/X" variants={fadeUp}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </motion.a>
          <motion.a {...popHover} href="https://github.com/mohamed-engineer" className="w-12 h-12 rounded-full bg-slate-700 hover:bg-purple-500 flex items-center justify-center transition" title="GitHub" variants={fadeUp}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a {...popHover} href="https://www.instagram.com/cjq8_" className="w-12 h-12 rounded-full bg-slate-700 hover:bg-pink-500 flex items-center justify-center transition" title="Instagram" variants={fadeUp}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.16c2.674 0 2.99.01 4.043.059 1.001.045 1.546.207 1.907.344.48.186.821.407 1.181.766.359.36.58.701.766 1.181.137.361.299.906.344 1.907.049 1.053.059 1.369.059 4.043 0 2.674-.01 2.99-.059 4.043-.045 1.001-.207 1.546-.344 1.907-.186.48-.407.821-.766 1.181-.36.359-.701.58-1.181.766-.361.137-.906.299-1.907.344-1.053.049-1.369.059-4.043.059-2.674 0-2.99-.01-4.043-.059-1.001-.045-1.546-.207-1.907-.344-.48-.186-.821-.407-1.181-.766-.359-.36-.58-.701-.766-1.181-.137-.361-.299-.906-.344-1.907-.049-1.053-.059-1.369-.059-4.043 0-2.674.01-2.99.059-4.043.045-1.001.207-1.546.344-1.907.186-.48.407-.821.766-1.181.36-.359.701-.58 1.181-.766.361-.137.906-.299 1.907-.344 1.053-.049 1.369-.059 4.043-.059m0 3.68a5.16 5.16 0 100 10.32 5.16 5.16 0 000-10.32m0 8.52a3.36 3.36 0 110-6.72 3.36 3.36 0 010 6.72m5.53-8.74a1.205 1.205 0 100-2.41 1.205 1.205 0 000 2.41z"/>
            </svg>
          </motion.a>
          <motion.a {...popHover} href="mailto:mohamedhossam4work@gmail.com" className="w-12 h-12 rounded-full bg-slate-700 hover:bg-red-500 flex items-center justify-center transition" title="Email" variants={fadeUp}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </motion.a>
        </div>

        <div className="flex justify-center gap-4">
          <motion.a variants={fadeUp} {...popHover} href="#organizations" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            View My Work
          </motion.a>
          <motion.a variants={fadeUp} {...popHover} href="mailto:your-email@example.com" className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition">
            Get In Touch
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700/50 relative z-10">
        <h3 className="text-4xl font-bold mb-12 text-center section-title">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="">
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I'm a passionate 18-year-old software developer and entrepreneur with a strong foundation in web development. 
              My journey began 7 years ago exploring WordPress and Blogger platforms, and I've since evolved into a full-stack MERN developer.
            </p>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Beyond development, I'm committed to education and mentorship. Over the past three years, I've had the privilege of teaching 
              and guiding over 100 students in web development, helping them build strong fundamentals and creative solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              As the founder of Provix Tech and Software Manager at SRVS, I combine technical expertise with entrepreneurial vision to deliver 
              innovative digital solutions that make a real impact.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700 hover:border-blue-400 transition card-hover backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">7+</div>
              <div className="text-slate-300">Years of Experience</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700 hover:border-cyan-400 transition card-hover backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-slate-300">Students Taught</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700 hover:border-purple-400 transition card-hover backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-slate-300">Organizations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700/50 relative z-10">
        <h3 className="text-4xl font-bold mb-12 text-center section-title">Skills & Technologies</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div variants={fadeUp} className="bg-slate-800/30 rounded-lg p-8 border border-blue-400/30 hover:border-blue-400/60 transition card-hover backdrop-blur-sm">
            <h4 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <span className="text-2xl"><FaCode /></span> Frontend
            </h4>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'SASS', 'Bootstrap', 'jQuery'].map((skill, i) => (
                <motion.span key={skill} variants={fadeUp} {...popHover} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/40 transition skill-badge">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div variants={fadeUp} className="bg-slate-800/30 rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition card-hover backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
              <span className="text-2xl"><FaDatabase /></span> Backend
            </h4>
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication', 'Database Design'].map((skill, i) => (
                <motion.span key={skill} variants={fadeUp} {...popHover} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30 hover:bg-cyan-500/40 transition skill-badge">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Design & Other */}
          <motion.div variants={fadeUp} className="bg-slate-800/30 rounded-lg p-8 border border-purple-400/30 hover:border-purple-400/60 transition card-hover backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
              <span className="text-2xl"><FaPaintBrush /></span> Design & Other
            </h4>
            <div className="flex flex-wrap gap-3">
              {['Graphic Design', 'UI/UX Design', 'Responsive Design', 'Performance Optimization', 'SEO', 'Problem Solving'].map((skill, i) => (
                <motion.span key={skill} variants={fadeUp} {...popHover} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30 hover:bg-purple-500/40 transition skill-badge">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700/50 relative z-10">
        <h3 className="text-4xl font-bold mb-12 text-center section-title">My Organizations</h3>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
          {/* Provix Tech */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-blue-500/10 to-slate-800/30 rounded-lg p-10 border border-blue-400/30 hover:border-blue-400/60 transition org-card card-hover backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition duration-300" style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), transparent)',
            }}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 border border-blue-400/50 card-hover">
                <span className="text-3xl"><Image src="/provixtech.jpg" alt="Provix Tech Logo" width={48} height={48} /></span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-blue-400">Provix Tech</h4>
              <p className="text-slate-300 mb-4 font-semibold text-lg">
                Founder & CEO
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Leading a dynamic tech company focused on delivering cutting-edge web solutions and digital innovations. 
                Provix Tech specializes in MERN stack development, creating scalable applications that drive business growth.
              </p>
              <a href="https://provix-tech.com" className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400 rounded-lg text-blue-300 hover:bg-blue-500/40 transition duration-300">
                Visit Website
              </a>
            </div>
          </motion.div>

          {/* SRVS */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-cyan-500/10 to-slate-800/30 rounded-lg p-10 border border-cyan-400/30 hover:border-cyan-400/60 transition org-card card-hover backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition duration-300" style={{
              background: 'radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.2), transparent)',
            }}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 border border-cyan-400/50 card-hover">
                <span className="text-3xl"><Image src="/srvs.jpg" alt="SRVS Logo" width={48} height={48} /></span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-cyan-400">SRVS</h4>
              <p className="text-slate-300 mb-4 font-semibold text-lg">
                Software Manager
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Managing software development initiatives and overseeing technical strategy. 
                At SRVS, I contribute to building robust solutions that serve our clients' needs and drive organizational excellence.
              </p>
              <a href="https://srvsdigital.com" className="inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-500/40 transition duration-300">
                Visit Website
              </a>
            </div>
          </motion.div>

          {/* EYE Youth Entity */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-purple-500/10 to-slate-800/30 rounded-lg p-10 border border-purple-400/30 hover:border-purple-400/60 transition org-card card-hover backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition duration-300" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2), transparent)',
            }}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 border border-purple-400/50 card-hover">
                <span className="text-3xl"><Image src="/eye.png" alt="EYE Youth Entity Logo" width={48} height={48} /></span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-purple-400">EYE Youth Entity</h4>
              <p className="text-slate-300 mb-4 font-semibold text-lg">
                Leader media committe
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Contributing to youth empowerment and digital innovation. EYE Youth Entity focuses on fostering the next generation of tech leaders and creative minds through mentorship and hands-on experience.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-purple-500/20 border border-purple-400 rounded-lg text-purple-300 hover:bg-purple-500/40 transition duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700/50 relative z-10">
        <h3 className="text-4xl font-bold mb-6 text-center section-title">Let's Work Together</h3>
        <p className="text-xl text-slate-300 mb-12 text-center animate-slide-up">
          I'm always interested in hearing about new projects and opportunities. Fill out the form below and I'll get back to you soon!
        </p>
        
        <motion.div variants={fadeUp} className="max-w-2xl mx-auto bg-slate-800/30 rounded-lg p-8 border border-blue-400/30 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
          <form action="https://formspree.io/f/xzzlgeqk" method="POST" className="space-y-6">
            {/* Name Field */}
            <motion.div variants={fadeUp} className="" style={{ animationDelay: '0.3s' }}>
              <label htmlFor="name" className="block text-sm font-semibold text-blue-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-300"
                placeholder="Mohamed"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeUp} className="" style={{ animationDelay: '0.35s' }}>
              <label htmlFor="email" className="block text-sm font-semibold text-blue-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-300"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={fadeUp} className="" style={{ animationDelay: '0.4s' }}>
              <label htmlFor="subject" className="block text-sm font-semibold text-blue-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-300"
                placeholder="Project Inquiry"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={fadeUp} className="" style={{ animationDelay: '0.45s' }}>
              <label htmlFor="message" className="block text-sm font-semibold text-blue-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeUp} className="flex gap-4" style={{ animationDelay: '0.5s' }}>
              <motion.button {...popHover}
                type="submit"
                className="flex-1 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition duration-300"
              >
                Send Message
              </motion.button>
              <motion.a {...popHover} href="mailto:mohamedhossam4work@gmail.com" className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition duration-300">
                Email Me Directly
              </motion.a>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-slate-700/50 py-12 mt-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          {/* Footer Content */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <h4 className="text-xl font-bold gradient-text mb-3">Mohamed Hossam</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full-Stack MERN Developer & Entrepreneur. Building innovative digital solutions and mentoring the next generation of developers.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUp} className="text-center">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                <li><a href="#organizations" className="hover:text-blue-400 transition">Organizations</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Connect With Me</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition duration-300 text-white">
                  in
                </a>
                <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-500 flex items-center justify-center transition duration-300 text-white">
                  <span className="font-bold">gh</span>
                </a>
                <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300 text-white">
                  𝕏
                </a>
                <a href="mailto:your-email@example.com" title="Email" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 flex items-center justify-center transition duration-300 text-white text-lg">
                  ✉
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-8">
            {/* Footer Bottom */}
            <div className="text-center text-slate-400 text-sm">
              <p className="mb-2">© 2025 Mohamed Hossam. All rights reserved.</p>
              <p className="text-xs text-slate-500">Founder of Provix Tech | Software Manager at SRVS | Member of EYE Youth Entity</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
