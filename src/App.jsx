import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import Recognition from './components/Recognition';
import Discography from './components/Discography';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-display text-2xl tracking-widest text-white select-none">PRAGATHISH</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-brand-yellow transition-colors cursor-pointer">About</a>
          <a href="#services" className="hover:text-brand-yellow transition-colors cursor-pointer">Services</a>
          <a href="#videos" className="hover:text-brand-yellow transition-colors cursor-pointer">Videos</a>
          <a href="#music" className="hover:text-brand-yellow transition-colors cursor-pointer">Discography</a>
        </div>
        <a href="https://wa.me/919566128134" target="_blank" className="text-xs uppercase tracking-[0.2em] text-white hover:text-brand-yellow transition-colors font-bold magnetic underline underline-offset-8">
          Book a Session
        </a>
      </nav>

      <main>
        <Hero />
        
        {/* Marquee Effect */}
        <div className="bg-brand-yellow py-4 overflow-hidden whitespace-nowrap relative z-10">
          <div className="flex animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-black text-lg uppercase tracking-widest px-10">
                Film Scoring · Beat Production · Mixing & Mastering · Sound Design · Music Direction
              </span>
            ))}
          </div>
        </div>

        <About />
        <Services />
        <VideoShowcase />
        <Recognition />
        <Discography />
        <Contact />
      </main>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/919566128134" 
        target="_blank" 
        rel="noopener"
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 transition-transform duration-300"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}

export default App;
