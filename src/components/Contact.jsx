import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="booking" className="py-40 px-10 relative overflow-hidden bg-brand-dark">
      
      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="font-display text-[30vw] uppercase leading-none select-none">CONNECT</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-[10vw] md:text-9xl leading-[0.85] uppercase mb-8">
              Let's Make <br /> <span className="text-brand-yellow">Something Real.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg mb-12">
              Whether it's a single, an album, or a feature film score — every project starts with a conversation. Reach out and let's bring your sound to life.
            </p>
            
            <div className="space-y-4">
              <a href="https://wa.me/919566128134" target="_blank" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-brand-yellow transition-all duration-500">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">WhatsApp Me</div>
                  <div className="text-xl font-medium text-white group-hover:text-brand-yellow transition-colors">+91 95661 28134</div>
                </div>
              </a>
              
              <a href="mailto:pugazhmusicofficial@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-brand-yellow transition-all duration-500">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-base md:text-xl font-medium text-white group-hover:text-brand-yellow transition-colors break-all md:break-normal">pugazhmusicofficial@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="https://www.youtube.com/channel/UCi5_a1-eYpyZO3k6tQpoUag" target="_blank" className="text-xs uppercase tracking-widest text-gray-600 hover:text-brand-yellow transition-colors magnetic">YouTube</a>
              <a href="https://www.instagram.com/pragathishpugazhofficial/" target="_blank" className="text-xs uppercase tracking-widest text-gray-600 hover:text-brand-yellow transition-colors magnetic">Instagram</a>
              <a href="https://open.spotify.com/artist/6jHHXVPqgf4A5IHSHGd1AW" target="_blank" className="text-xs uppercase tracking-widest text-gray-600 hover:text-brand-yellow transition-colors magnetic">Spotify</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#0d0d0b] p-12 border border-gray-900 rounded-sm"
          >
            <form action="https://formsubmit.co/pugazhmusicofficial@gmail.com" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600">Full Name</label>
                  <input type="text" name="Name" required className="bg-transparent border-b border-gray-800 p-2 outline-none focus:border-brand-yellow transition-colors text-white font-light" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600">Email Address</label>
                  <input type="email" name="Email" required className="bg-transparent border-b border-gray-800 p-2 outline-none focus:border-brand-yellow transition-colors text-white font-light" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-600">Service Required</label>
                <select name="Service" required className="bg-transparent border-b border-gray-800 p-2 outline-none focus:border-brand-yellow transition-colors text-white font-light">
                  <option value="" className="bg-[#0d0d0b]">Select a service</option>
                  <option value="Film Scoring" className="bg-[#0d0d0b]">Film Scoring</option>
                  <option value="Beat Production" className="bg-[#0d0d0b]">Beat Production</option>
                  <option value="Mixing & Mastering" className="bg-[#0d0d0b]">Mixing & Mastering</option>
                  <option value="Other" className="bg-[#0d0d0b]">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-600">Project Details</label>
                <textarea name="Message" rows="4" required className="bg-transparent border-b border-gray-800 p-2 outline-none focus:border-brand-yellow transition-colors text-white font-light resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-brand-yellow text-black uppercase font-bold text-xs tracking-widest hover:bg-white transition-all duration-500 magnetic">
                Send Inquiry →
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="mt-40 border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest gap-4 px-10">
        <div>PRAGATHISH PUGAZH · MUSIC PRODUCER</div>
        <div>© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
      </footer>

    </section>
  );
}
