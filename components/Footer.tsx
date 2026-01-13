import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to split text
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
            <span className="inline-block translate-y-[110%] will-change-transform footer-title-reveal pb-2 lg:pb-4">
                {word}&nbsp;
            </span>
        </span>
    ));
  };

  useEffect(() => {
      const ctx = gsap.context(() => {
          // Text Reveal
          gsap.to(".footer-title-reveal", {
              y: 0,
              duration: 1.2,
              stagger: 0.04,
              ease: "power3.out",
              scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
              }
          });

          // Standard Fade Elements
          gsap.from(".footer-fade-anim", {
              opacity: 0,
              y: 50,
              duration: 1,
              stagger: 0.1,
              scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 85%",
              }
          });
      }, sectionRef);
      return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-rhino-dark text-white pt-10 pb-12 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section: CTA + Arrow */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="relative z-10 max-w-5xl">
                <h2 className="font-condensed font-bold text-[3.5rem] md:text-7xl lg:text-[7.5rem] uppercase leading-[0.9] tracking-tight relative text-white">
                    <div className="mb-2">
                        {splitText("Get A Fit Lifestyle")}
                    </div>
                    <div className="relative inline-block z-10">
                        {splitText("Easily And Fun Here.")}
                        {/* Orange Asterisk Icon - Adjusted Position */}
                         <div className="absolute -right-10 -top-6 md:-right-20 md:-top-12 text-rhino-orange z-[-1] pointer-events-none">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="w-20 h-20 md:w-36 md:h-36 animate-spin-slow opacity-90">
                                <g transform="translate(50, 50)">
                                     <rect x="-12" y="-50" width="24" height="100" rx="12" />
                                     <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(60)" />
                                     <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(120)" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </h2>
            </div>

            {/* Circular Arrow Button */}
            <div className="mt-10 md:mt-0 mb-4 footer-fade-anim">
                 <button 
                    onClick={scrollToTop}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-dashed border-gray-600 hover:border-rhino-orange flex items-center justify-center text-white transition-all group relative"
                >
                    <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-rhino-orange transition-colors" />
                </button>
            </div>
        </div>

        {/* Divider 1 */}
        <div className="w-full h-px bg-gray-800 mb-10 footer-fade-anim"></div>

        {/* Sub-headline */}
        <div className="mb-10 footer-fade-anim">
            <h3 className="font-condensed font-bold text-4xl md:text-6xl uppercase leading-none tracking-wide">
                <span className="text-[#333]">Feel Great.</span> <span className="text-white">Body And Mind.</span>
            </h3>
        </div>

        {/* Divider 2 */}
        <div className="w-full h-px bg-gray-800 mb-8 footer-fade-anim"></div>

        {/* Footer Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 font-condensed uppercase tracking-wider text-sm md:text-lg footer-fade-anim">
             <div className="font-bold text-white tracking-widest">
                0435 9885 5432
             </div>
             
             <div className="font-bold text-white hover:text-rhino-orange transition-colors cursor-pointer tracking-widest">
                Rhinos@Gmail.Furniture
             </div>
             
             <div className="font-bold text-white tracking-widest">
                Los Angles, California
             </div>
        </div>
      </div>
      
      {/* Inline styles for custom spin animation */}
      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;