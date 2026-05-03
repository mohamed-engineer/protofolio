"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaAward } from 'react-icons/fa';

// استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const CertificatesSlider = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    { title: "First Eid training course", img: "/certificates/EYE&SAVE.jpeg", issuer: "EYE&Save", date: "2025" },
    { title: "Graphic diploma", img: "/certificates/Be Smart.jpeg", issuer: "Be Smart", date: "2024" },
    { title: "Graphic diploma", img: "/certificates/Latin Academy.jpeg", issuer: "Latin Academy", date: "2019" },
    { title: "Java script", img: "/certificates/Java script-1.png", issuer: "Cisco", date: "2022" },
    { title: "Get Connected", img: "/certificates/Get Connected-1.png", issuer: "Cisco", date: "2022" },
    { title: "Ebda3 Tomo7", img: "/certificates/ebda3 tomo7.jpeg", issuer: "Alexandria Educational Administration", date: "2023" },
    { title: "First place in Ebda3 Tomo7", img: "/certificates/1.jpeg", issuer: "Alexandria Educational Administration", date: "2024" },
    { title: "First place in Ebda3 Tomo7", img: "/certificates/3.jpeg", issuer: "Alexandria Educational Administration", date: "2024" },
    { title: "A trainee at Provix tech won second place", img: "/certificates/2.jpeg", issuer: "Alexandria Educational Administration", date: "2024" },
  ];

  return (
    <section id="certificates" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10vw] font-black text-white/[0.02] uppercase select-none whitespace-nowrap">
        Credentials
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black tracking-[0.3em] uppercase">
            Official <span className="text-cyber-cyan">Certificates</span>
          </h3>
          <div className="h-1 w-20 bg-cyber-cyan mx-auto mt-4 shadow-[0_0_10px_#00f2ff]"></div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full py-12"
        >
          {certificates.map((cert, i) => (
            <SwiperSlide key={i} className="max-w-[320px] md:max-w-[400px] group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer relative aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl overflow-hidden group-hover:border-cyber-cyan/50 transition-all duration-500"
              >
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay المطور: يظهر دائماً على الموبايل وعند الهوفر على الكمبيوتر */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
                  <p className="text-cyber-cyan font-mono text-[10px] md:text-xs mb-1 tracking-widest uppercase">{cert.issuer}</p>
                  <h4 className="text-white font-bold text-sm md:text-lg leading-tight line-clamp-2">{cert.title}</h4>
                  {/* سهم صغير للموبايل فقط */}
                  <span className="md:hidden text-cyber-cyan/60 text-[9px] mt-2 font-mono animate-pulse">TAP TO VIEW →</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal - نافذة عرض الشهادة */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-y-auto shadow-2xl no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* زر الغلق */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-cyber-cyan transition-all border border-white/5"
              >
                <FaTimes size={18} />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* جزء الصورة */}
                <div className="relative bg-black flex items-center justify-center p-4 min-h-[300px] md:min-h-full">
                  <div className="relative w-full h-full min-h-[250px]">
                    <Image
                      src={selectedCert.img}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* جزء البيانات */}
                <div className="p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-t md:border-t-0 md:border-l border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyber-cyan/10 rounded-xl text-cyber-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                      <FaAward size={24} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Official Credentials</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight text-white uppercase tracking-tight">
                    {selectedCert.title}
                  </h2>
                  
                  <div className="space-y-6 mb-10">
                    <div className="border-l-2 border-cyber-cyan/30 pl-4">
                      <p className="text-[10px] font-bold text-cyber-cyan tracking-widest uppercase mb-1 opacity-70">Issuer</p>
                      <p className="text-lg md:text-xl text-gray-200 font-bold tracking-wide">{selectedCert.issuer}</p>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4">
                      <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">Issue Date</p>
                      <p className="text-lg md:text-xl text-gray-300 font-bold">{selectedCert.date || "N/A"}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase hover:bg-cyber-cyan hover:text-black transition-all duration-500 group flex items-center justify-center gap-2"
                  >
                    Close Document
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.1) !important; width: 12px; height: 4px; border-radius: 2px; transition: all 0.3s; }
        .swiper-pagination-bullet-active { background: #00f2ff !important; width: 30px; box-shadow: 0 0 10px #00f2ff; }
      `}</style>
    </section>
  );
};

export default CertificatesSlider;