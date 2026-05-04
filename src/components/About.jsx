import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: '50+', label: 'Tracks Produced' },
    { value: '15+', label: 'Films Scored' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Original Work' },
  ];

  return (
    <section id="about" className="py-32 px-10 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4">
            <div className="w-6 h-[1px] bg-brand-yellow"></div>
            About
          </div>
          <h2 className="font-display text-7xl md:text-8xl leading-none uppercase mb-10">
            Crafting Sound <br /> With Vision
          </h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed max-w-xl text-lg font-light">
            <p>
              Pragathish Pugazh is an independent Tamil music producer, film composer, and sound engineer with a passion for pushing creative boundaries.
            </p>
            <p>
              With years of experience scoring films, producing beats for rappers, and engineering professional-quality mixes, he bridges classical sensibilities with modern production techniques.
            </p>
            <p>
              From intimate indie productions to feature film scores, every project receives meticulous attention to sonic detail — delivered at rates that respect every artist's budget.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#121210] p-8 border border-gray-900 group hover:border-brand-yellow/30 transition-all duration-500"
              >
                <div className="font-display text-4xl text-brand-yellow mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="sticky top-32">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm group shadow-2xl">
              <img 
                src="/1000132165.png" 
                alt="Pragathish Pugazh" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border-[1px] border-brand-yellow/30 -m-4 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold">✓</div>
                  <h4 className="font-display text-2xl text-white uppercase tracking-wider">Verified Artist</h4>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3 hover:text-brand-yellow transition-colors cursor-pointer">
                    <span className="text-brand-yellow">📱</span> +91 95661 28134
                  </div>
                  <div className="flex items-center gap-3 hover:text-brand-yellow transition-colors cursor-pointer">
                    <span className="text-brand-yellow">📧</span> pugazhmusicofficial@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
