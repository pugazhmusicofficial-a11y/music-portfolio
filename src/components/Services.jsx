import { motion } from 'framer-motion';
import { Film, Mic2, Disc, Music } from 'lucide-react';

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: 'Film Scoring',
    desc: 'Original background scores & themes for short films, feature films, and ad films. Emotional, memorable, story-driven music.',
    price: 'Starts ₹15,000'
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: 'Beat Production',
    desc: 'Hard-hitting beats and instrumentals for Tamil rap, hip-hop, and indie artists. Custom-built to your style and vibe.',
    price: 'Starts ₹3,000'
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: 'Mixing & Mastering',
    desc: 'Professional-grade mixing and mastering that makes your record radio-ready and platform-loud across all streaming platforms.',
    price: 'Starts ₹5,000'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Music Direction',
    desc: 'End-to-end music direction for albums, films, and indie projects. From initial concept to final master delivery.',
    price: 'Custom Quote'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-10 bg-[#0a0a08] border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div>
            <div className="flex items-center gap-3 text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4">
              <div className="w-6 h-[1px] bg-brand-yellow"></div>
              Services
            </div>
            <h2 className="font-display text-7xl md:text-8xl leading-none uppercase">What I Create</h2>
          </div>
          <a 
            href="https://wa.me/919566128134" 
            target="_blank" 
            className="px-8 py-4 border border-brand-yellow/30 text-brand-yellow uppercase text-xs tracking-widest hover:bg-brand-yellow hover:text-black transition-all duration-500 magnetic inline-block"
          >
            Get a Quote →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-900">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0d0d0b] p-10 relative overflow-hidden group hover:bg-[#121210] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-brand-yellow mb-8 block transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-display text-3xl uppercase mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="text-[10px] text-brand-yellow uppercase tracking-widest font-bold">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
