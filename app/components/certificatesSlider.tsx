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
  // حالة للتحكم في الشهادة المختارة للمودال
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
            <SwiperSlide key={i} className="max-w-[400px] group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCert(cert)} // فتح المودال عند الضغط
                className="cursor-pointer relative aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl overflow-hidden group-hover:border-cyber-cyan/50 transition-all duration-500"
              >
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <p className="text-cyber-cyan font-mono text-xs mb-1 tracking-widest">{cert.issuer}</p>
                  <h4 className="text-white font-bold text-lg leading-tight">{cert.title}</h4>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)} // غلق عند الضغط في أي مكان في الخلفية
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-4xl w-full bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // منع الغلق عند الضغط داخل الكارت
            >
              {/* زر الغلق */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-cyber-cyan transition-all"
              >
                <FaTimes size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* الجزء الخاص بالصورة */}
                <div className="relative aspect-[4/3] md:aspect-auto h-[300px] md:h-[500px]">
                  <Image
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-4 md:p-8"
                  />
                </div>

                {/* الجزء الخاص بالبيانات */}
                <div className="p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyber-cyan/10 rounded-xl text-cyber-cyan">
                      <FaAward size={24} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Certificate Verified</span>
                  </div>
                  
                  <h2 className="text-3xl font-black mb-4 leading-tight text-white uppercase tracking-tight">
                    {selectedCert.title}
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[10px] font-bold text-cyber-cyan tracking-widest uppercase mb-1 italic">Issued By:</p>
                      <p className="text-xl text-gray-300 font-bold">{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-cyber-cyan tracking-widest uppercase mb-1 italic">Date:</p>
                      <p className="text-xl text-gray-300 font-bold">{selectedCert.date || "N/A"}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-cyber-cyan hover:text-black transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.2) !important; }
        .swiper-pagination-bullet-active { background: #00f2ff !important; box-shadow: 0 0 10px #00f2ff; }
      `}</style>
    </section>
  );
};

export default CertificatesSlider;