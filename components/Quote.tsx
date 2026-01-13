import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Quote: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
      gsap.to(".quote-text-reveal", {
        y: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
      
      // Images Reveal (pop up)
      gsap.from(".quote-img-container", {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.2,
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
          }
      });
      
      // Asterisk Spin
      gsap.from(".asterisk-anim", {
          rotate: -180,
          scale: 0,
          opacity: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
          }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Mouse Move Parallax Effect for Images
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;

    // Move images slightly towards mouse
    gsap.to(".quote-img", {
        x: x * 30, // Move up to 30px
        y: y * 30,
        duration: 0.5,
        ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
      gsap.to(".quote-img", {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
      });
  };

  // Helper to split text segments
  const TextSegment = ({ text }: { text: string }) => {
      return (
          <>
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-middle">
                    <span className="inline-block translate-y-[110%] will-change-transform quote-text-reveal mr-[0.2em] pb-1">
                        {word}
                    </span>
                </span>
            ))}
          </>
      )
  }

  return (
    <section 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="pt-24 pb-12 md:pt-32 md:pb-16 bg-rhino-dark px-4 flex justify-center overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto text-center relative">
        
        {/* Decorative 6-Arm Orange Asterisk */}
        <div className="asterisk-anim absolute top-[-20px] right-[0px] md:top-[-40px] md:right-[5%] pointer-events-none z-0">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="#FF6B35" className="w-20 h-20 md:w-32 md:h-32 animate-spin-slow opacity-90">
                <g transform="translate(50, 50)">
                     <rect x="-12" y="-50" width="24" height="100" rx="12" />
                     <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(60)" />
                     <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(120)" />
                </g>
            </svg>
        </div>

        <h2 className="relative z-10 font-condensed font-bold text-white text-4xl md:text-6xl lg:text-[5.5rem] uppercase leading-[1.1] tracking-tight">
          <TextSegment text="The Last Three Or Four Reps Is" />
          <span className="quote-img-container inline-flex align-middle mx-1 md:mx-2 items-center justify-center">
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80" className="quote-img w-10 h-10 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-gray-800 transition-transform will-change-transform" alt="athlete"/>
          </span>
          <br className="hidden lg:block"/>
          <TextSegment text="What Makes The" />
           <span className="quote-img-container inline-flex align-middle mx-1 md:mx-2 items-center justify-center">
             <div className="quote-img w-10 h-10 md:w-20 md:h-20 rounded-full bg-amber-600 overflow-hidden relative ring-2 ring-gray-800 transition-transform will-change-transform">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&h=150&fit=crop&q=80" className="w-full h-full object-cover mix-blend-overlay opacity-90" alt="muscle"/>
             </div>
          </span>
          <br className="hidden lg:block"/>
          <TextSegment text="Muscle Grow. This Area Of" />
          <br className="hidden lg:block"/>
          <TextSegment text="Pain Divides A Champion From" />
           <span className="quote-img-container inline-flex align-middle mx-1 md:mx-2 items-center justify-center">
            <img src="https://images.unsplash.com/photo-1609132718484-cc90df3417f8?w=150&h=150&fit=crop&q=80" className="quote-img w-10 h-10 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-gray-800 transition-transform will-change-transform" alt="champion"/>
          </span>
          <br className="hidden lg:block"/>
           <TextSegment text="Someone Who Is Not" />
           <span className="quote-img-container inline-flex align-middle mx-1 md:mx-2 items-center justify-center">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80" className="quote-img w-10 h-10 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-gray-800 transition-transform will-change-transform" alt="not champion"/>
          </span>
          <TextSegment text="A Champion." />
        </h2>
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
    </section>
  );
};

export default Quote;