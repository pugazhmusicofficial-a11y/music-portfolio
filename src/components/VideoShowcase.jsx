import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 'Mx0W21-koFw',
    title: 'Latest Production',
    tag: 'Featured Release',
  },
  {
    id: 'pgAiHV-Xh1U',
    title: 'Signature Sound',
    tag: 'Music Video',
  },
  {
    id: '3JEROK0Zlc4',
    title: 'Beat Production',
    tag: 'Studio Session',
  }
];

export default function VideoShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);

  return (
    <section id="videos" ref={containerRef} className="h-[150vh] relative bg-brand-dark">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-10 mb-10">
          <div className="flex items-center gap-3 text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4">
            <div className="w-6 h-[1px] bg-brand-yellow"></div>
            Featured Videos
          </div>
          <h2 className="font-display text-7xl md:text-8xl leading-none uppercase">Watch the Work</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-10 w-max">
          {videos.map((vid, idx) => (
            <a 
              key={idx} 
              href={`https://www.youtube.com/watch?v=${vid.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[80vw] md:w-[45vw] group relative cursor-pointer block"
            >
              <div className="relative w-full pb-[56.25%] overflow-hidden bg-black border border-gray-800">
                <img 
                  src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} 
                  alt={vid.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Play className="text-black w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col">
                <span className="text-xs text-brand-yellow tracking-widest uppercase mb-2">{vid.tag}</span>
                <h3 className="font-display text-4xl uppercase">{vid.title}</h3>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
