import React, { useEffect, useRef } from 'react';
import { Smile } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Text Reveal Animation (Mask Effect)
        gsap.to(".hero-text-reveal", {
            y: 0,
            duration: 1.5,
            stagger: 0.04,
            ease: "power4.out",
            delay: 0.2
        });
        gsap.to(".hero-icon-reveal", {
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.25
        });
        
        // Eyebrow Animation
        gsap.from(".eyebrow-line", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            ease: "power3.inOut",
            delay: 0.1
        });
        gsap.from(".eyebrow-text", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6
        });

        // Image Cards Reveal
        gsap.from(".hero-card-anim", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            delay: 1
        });

        // Floating Element
        gsap.from(".floating-anim", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 1.4
        });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Helper to split text into words for animation
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-[110%] will-change-transform hero-text-reveal pb-1 sm:pb-2 lg:pb-4">
                {word}&nbsp;
            </span>
        </span>
    ));
  };

  return (
    <div ref={containerRef} className="bg-rhino-dark w-full flex justify-center pt-4 px-4 pb-12">
      <div className="bg-[#F4F4F4] w-full max-w-[1440px] rounded-[3rem] p-6 md:p-12 relative overflow-hidden flex flex-col shadow-2xl min-h-[85vh]">
        
        {/* Eyebrow Section */}
        <div className="mb-8 md:mb-10 mt-2">
            <div className="overflow-hidden mb-4">
                 <p className="eyebrow-text font-condensed font-bold text-xs md:text-sm lg:text-base tracking-[0.15em] uppercase text-[#9ca3af]">
                    Make Your Body Fit This Spring With Us.
                </p>
            </div>
            <div className="eyebrow-line w-full h-[1px] bg-[#d1d5db]"></div>
        </div>

        {/* Main Hero Layout */}
        <div className="flex flex-col lg:flex-row justify-between relative mb-16">
            
            {/* Left: Typography Block */}
            <div ref={textRef} className="relative z-10 w-full md:max-w-7xl">
                {/* Responsive Font Size Calculation */}
                <h1 className="font-condensed font-bold text-[14vw] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.95] md:leading-[1.05] uppercase tracking-[-0.02em] text-black flex flex-col">
                    
                    {/* Line 1: IMPROVE YOUR + Icon */}
                    <div className="relative flex flex-nowrap items-center gap-2 md:gap-8 md:pr-28">
                        {splitText("Improve Your")}
                        {/* Arm Icon */}
                        <div className="absolute right-32 top-10 w-12 h-12 md:w-24 md:h-24 overflow-hidden">
                            <div className="hero-icon-reveal border-[2px] md:border-[3px] border-dashed border-rhino-orange rounded-[1.5rem] md:rounded-[2rem] w-full h-full flex items-center justify-center translate-y-[110%] will-change-transform transform rotate-6 bg-transparent">
                                <span className="text-2xl md:text-5xl pb-1">💪</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Line 2: FITNESS LEVEL FOR */}
                    <div>
                        {splitText("Fitness Level For")}
                    </div>
                    
                    {/* Line 3: THE BETTER + Description */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <div>
                             {splitText("The Better")}
                        </div>
                        <div className="overflow-hidden">
                             <p className="hero-text-reveal translate-y-[110%] font-sans text-[10px] md:text-sm text-gray-500 font-semibold leading-relaxed max-w-[220px] tracking-normal normal-case mt-2 md:mt-4">
                                More Than 1,900 Fitness Group Classes Per Month. Find New Friends Who Will Motivate Your Fitness Goals
                            </p>
                        </div>
                    </div>
                </h1>
            </div>

            {/* Right: Floating Elements (Asterisk & CTA) */}
            <div className="flex flex-row lg:flex-col justify-between items-center lg:items-end mt-8 lg:mt-0 lg:h-auto gap-4 md:gap-8">
                {/* Custom 6-arm Asterisk */}
                <div className="floating-anim text-rhino-orange lg:mb-12">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16 md:w-[140px] md:h-[140px] animate-spin-slow">
                        <g transform="translate(50, 50)">
                             <rect x="-12" y="-50" width="24" height="100" rx="12" />
                             <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(60)" />
                             <rect x="-12" y="-50" width="24" height="100" rx="12" transform="rotate(120)" />
                        </g>
                    </svg>
                </div>

                {/* CTA Button */}
                <button className="floating-anim bg-rhino-orange hover:bg-orange-600 transition-colors text-white font-condensed font-bold uppercase text-sm md:text-xl px-8 py-4 md:px-12 md:py-5 rounded-full shadow-lg tracking-widest whitespace-nowrap">
                    Free Pass
                </button>
            </div>
        </div>

        {/* Bottom Image Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative mt-auto w-full">
            
            {/* Left Column: Image + Badge */}
            <div className="md:col-span-4 flex flex-col gap-6">
                
                {/* Left Image Card */}
                <div className="hero-card-anim w-full h-[250px] md:h-[320px] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg">
                     <img 
                        src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fitness Goal" 
                        className="w-full h-full object-cover grayscale brightness-[0.7] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                        <h3 className="font-condensed font-bold text-white text-2xl md:text-3xl uppercase leading-none tracking-wide drop-shadow-md">Reach Your <br/> Body Goals</h3>
                    </div>
                </div>

                {/* Badge Section - Now in grid flow */}
                <div className="hero-card-anim flex items-center pl-2">
                    <div className="bg-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-30 border-[4px] border-[#F4F4F4]">
                        <Smile className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="bg-rhino-orange h-8 md:h-10 flex items-center px-4 md:px-5 pl-8 -ml-5 rounded-full z-20 relative">
                            <span className="font-condensed font-bold text-white text-base md:text-lg">950K+</span>
                    </div>
                    <div className="bg-black h-8 md:h-10 flex items-center px-4 md:px-6 pl-8 -ml-5 rounded-r-full rounded-l-none z-10">
                            <span className="font-condensed font-bold text-white text-[8px] md:text-[10px] tracking-widest uppercase">Happy Customers</span>
                    </div>
                </div>

            </div>

            {/* Right Image Card - Spans full height to align with Left Column */}
            <div className="hero-card-anim md:col-span-8 h-full min-h-[300px] md:min-h-[auto] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Athlete" 
                    className="w-full h-full object-cover object-center grayscale brightness-[0.6] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12">
                    <p className="font-condensed font-bold text-gray-400 text-lg md:text-xl uppercase mb-1 tracking-wider opacity-90">Let's Try</p>
                    <h3 className="font-condensed font-bold text-white text-4xl md:text-6xl uppercase leading-[0.9] mb-0 drop-shadow-md">Reach Your Body Goals</h3>
                    <h3 className="font-condensed font-bold text-transparent text-4xl md:text-6xl uppercase leading-[0.9] tracking-wide" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                        Body Goals Target
                    </h3>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
