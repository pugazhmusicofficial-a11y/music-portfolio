import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-brand-dark flex flex-col justify-center items-center"
    >
      {/* 3D Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40"
        style={{ y: yImage }}
      >
        <img 
          src="/hero-3d.png" 
          alt="3D Music Abstract" 
          className="w-full h-full object-cover object-center max-w-[1200px] scale-110"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080806_80%)]" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div 
          className="overflow-hidden mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="text-brand-yellow font-sans tracking-[0.3em] uppercase text-sm md:text-base font-semibold"
          >
            Music Producer · Composer · Sound Engineer
          </motion.h2>
        </motion.div>

        <div className="relative py-4">
          <motion.h1 
            initial={{ y: '100%', rotateZ: 5 }}
            animate={{ y: 0, rotateZ: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
            className="font-display text-[15vw] leading-[0.8] tracking-tighter text-white uppercase drop-shadow-2xl mix-blend-overlay pr-4"
          >
            PRAGATHISH
          </motion.h1>
        </div>
        
        <div className="relative py-4">
          <motion.h1 
            initial={{ y: '100%', rotateZ: -5 }}
            animate={{ y: 0, rotateZ: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
            className="font-display text-[15vw] leading-[0.8] tracking-tighter text-transparent uppercase stroke-text pr-10"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
          >
            PUGAZH
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="text-[10px] text-brand-yellow tracking-[0.5em] uppercase font-bold bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 mb-4">
            Award Winning Composer
          </div>
          <p className="text-gray-400 max-w-lg text-sm font-light italic leading-relaxed">
            "Transforming emotions into sonic landscapes for over 5 years. <br/> From local hits to award-winning film scores."
          </p>

          <div className="mt-10 flex gap-6">
            <a href="https://wa.me/919566128134" target="_blank" className="px-8 py-4 bg-brand-yellow text-black uppercase text-xs tracking-widest font-bold hover:bg-white transition-all duration-500 magnetic shadow-2xl shadow-brand-yellow/20">
              Book a Session
            </a>
            <a href="https://open.spotify.com/artist/6jHHXVPqgf4A5IHSHGd1AW" target="_blank" className="px-8 py-4 border border-white/20 text-white uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500 magnetic">
              Listen on Spotify
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ['top', 'top', 'bottom'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
