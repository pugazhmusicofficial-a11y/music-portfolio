import { motion } from 'framer-motion';
import { Trophy, Star, Music, Film } from 'lucide-react';

const recognitions = [
  {
    icon: <Trophy className="w-10 h-10" />,
    title: 'Award Winning Producer',
    desc: 'Recognized for innovation in Tamil independent music and modern sound design.'
  },
  {
    icon: <Film className="w-10 h-10" />,
    title: 'Film Composer',
    desc: 'Scored 15+ films, including short films and indie features with regional acclaim.'
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: '5-Star Professional',
    desc: 'Trusted by filmmakers and indie artists for consistent quality and creative vision.'
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: 'Verified Spotify Artist',
    desc: 'Official presence on major streaming platforms with a growing global audience.'
  }
];

export default function Recognition() {
  return (
    <section id="awards" className="py-32 px-10 bg-brand-dark border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-brand-yellow text-xs tracking-[0.3em] uppercase mb-16 justify-center">
          <div className="w-6 h-[1px] bg-brand-yellow"></div>
          Recognition & Impact
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {recognitions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="text-brand-yellow mb-6 transform group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl uppercase mb-3 text-white tracking-wide">{item.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
