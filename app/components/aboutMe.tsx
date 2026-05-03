import React from 'react'
import { motion } from 'framer-motion';

const aboutMe = () => {
   

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const popHover = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.98 } };

  return (
    <>
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
          </>
  )
}

export default aboutMe