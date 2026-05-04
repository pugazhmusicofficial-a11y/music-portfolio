import { motion } from 'framer-motion';
import { Play, Music2 } from 'lucide-react';

const tracks = [
  {
    num: '001',
    name: 'Aneram Andhaneram',
    feat: 'Music, Mix & Master · Pragathish Pugazh',
    link: 'https://youtu.be/vsC8tKeIj38?si=vZ8Ge8Ch-d63JS4u',
    platform: 'YouTube'
  },
  {
    num: '002',
    name: 'Vannil Irundhu',
    feat: 'Composition · Pragathish Pugazh',
    link: 'https://youtu.be/qIQN51ciGEo?si=mGlRucWYE_Jfy32d',
    platform: 'YouTube'
  },
  {
    num: '003',
    name: 'Spotify Song List',
    feat: 'All Releases · Streaming Now',
    link: 'https://open.spotify.com/artist/6jHHXVPqgf4A5IHSHGd1AW',
    platform: 'Spotify'
  }
];

export default function Discography() {
  return (
    <section id="music" className="py-32 px-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-20">
          <div>
            <div className="flex items-center gap-3 text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4">
              <div className="w-6 h-[1px] bg-brand-yellow"></div>
              Discography
            </div>
            <h2 className="font-display text-7xl md:text-8xl leading-none uppercase text-white">Selected Work</h2>
          </div>
          <a href="https://open.spotify.com/artist/6jHHXVPqgf4A5IHSHGd1AW" target="_blank" className="text-gray-500 hover:text-brand-yellow text-xs uppercase tracking-widest border-b border-gray-900 pb-1 transition-all duration-300 magnetic">
            Full Catalog →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[1px] bg-transparent md:bg-gray-900 border-none md:border md:border-gray-900">
          {tracks.map((track, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0d0d0b] p-8 md:p-12 group relative overflow-hidden flex flex-col justify-between min-h-[400px] md:aspect-square hover:bg-[#121210] transition-all duration-500 cursor-pointer border border-white/5 md:border-none"
            >
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-[10px] text-gray-600 tracking-[0.2em]">{track.num} / FEATURED</div>
              
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto my-6 md:my-8">
                {/* Vinyl Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black to-gray-800 shadow-2xl group-hover:animate-spin duration-[5000ms] linear" />
                <div className="absolute inset-2 rounded-full border border-white/5" />
                <div className="absolute inset-[40%] rounded-full bg-brand-yellow flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl md:text-3xl uppercase mb-1 text-white">{track.name}</h3>
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-6 px-4">{track.feat}</p>
                
                <a 
                  href={track.link} 
                  target="_blank" 
                  className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full border transition-all duration-300 ${
                    track.platform === 'YouTube' 
                      ? 'border-red-900/30 text-red-500 hover:bg-red-500 hover:text-white' 
                      : 'border-green-900/30 text-green-500 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {track.platform === 'YouTube' ? <Play size={14} /> : <Music2 size={14} />}
                  Listen Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
