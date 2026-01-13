import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    id: 1,
    title: "Starter Fitness Program",
    price: "102",
    label: "Basic Plan",
    features: ["5 Days In A Week", "01 Sweatshirt", "01 Bottle Of Protein"]
  },
  {
    id: 2,
    title: "Beginner Fitness Program",
    price: "150",
    label: "Professional Plan",
    features: ["5 Days In A Week", "01 Sweatshirt", "01 Bottle Of Protein", "Access To Videos"]
  },
  {
    id: 3,
    title: "Advance Fitness Program",
    price: "199",
    label: "Advance Plan",
    features: ["5 Days In A Week", "01 Sweatshirt", "01 Bottle Of Protein", "And More"]
  }
];

const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Helper for split text
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
            <span className="inline-block translate-y-[110%] will-change-transform pricing-title-reveal pb-2">
                {word}&nbsp;
            </span>
        </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
        
        // Title Reveal
        gsap.to(".pricing-title-reveal", {
            y: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Subtitle Fade
        gsap.from(".pricing-subtitle-anim", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Simple fade in for the whole container card
        gsap.from(".pricing-card-container", {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-rhino-dark px-4 py-16 flex justify-center">
      {/* Outer White Container */}
      <div className="pricing-card-container bg-[#F4F4F4] w-full max-w-[1340px] rounded-[3rem] p-6 md:p-12 pb-16 shadow-lg">
        
        {/* Header */}
        <div className="text-center mb-10 pt-4">
            <h2 className="font-condensed font-bold text-black text-5xl md:text-6xl uppercase mb-3 tracking-tight">
                {splitText("Choose Your Best Plan")}
            </h2>
            <p className="pricing-subtitle-anim text-gray-500 text-xs md:text-sm font-medium tracking-wide">
                Choose The Plan That Suits You.
            </p>
        </div>

        {/* Inner Black Card */}
        <div className="bg-[#0D0D0D] rounded-[2.5rem] p-6 md:p-14 text-white relative flex flex-col overflow-hidden">
            
            {plans.map((plan, index) => (
                <div 
                    key={plan.id}
                    onMouseEnter={() => setActivePlan(index)}
                    className={`relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 border-b border-gray-800 transition-all duration-300 group z-10 ${index === plans.length - 1 ? 'border-b-0 pb-4' : ''}`}
                >
                     {/* Left: Content */}
                     <div className="flex-1 relative z-10 pr-4">
                        <h3 className={`font-condensed font-bold text-3xl md:text-5xl uppercase mb-4 tracking-tight transition-colors duration-300 ${activePlan === index ? 'text-white' : 'text-[#444]'}`}>
                            {plan.title}
                        </h3>
                        {/* Features */}
                        <div className="flex flex-wrap items-center gap-4 text-[11px] md:text-xs font-medium tracking-wider uppercase text-gray-500">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                     <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                     <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                     </div>

                     {/* Price Badge - Sticker Style */}
                     <div 
                        className={`absolute right-4 md:right-[22%] top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center ${activePlan === index ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-50 rotate-0'}`}
                     >
                         <div className="relative group/badge">
                             {/* Badge Body */}
                             <div className="w-28 h-28 md:w-36 md:h-36 bg-rhino-orange rounded-full flex flex-col items-center justify-center text-white border-[3px] border-white shadow-2xl transition-transform duration-300 ease-in-out group-hover/badge:rotate-[-5deg] group-hover/badge:scale-105">
                                 <span className="text-[9px] font-bold uppercase mb-0.5 tracking-widest opacity-90">Start From</span>
                                 <span className="font-condensed font-bold text-5xl leading-[0.9] tracking-tighter">${plan.price}</span>
                                 <span className="text-[9px] font-bold uppercase tracking-widest opacity-90 mt-1">/Month</span>
                             </div>
                             
                             {/* Small Decorative Black Dot */}
                             <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full opacity-30"></div>
                         </div>
                     </div>

                     {/* Right: Label */}
                     <div className="mt-4 md:mt-0 text-right relative z-10 min-w-[120px]">
                         <span className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${activePlan === index ? 'text-white' : 'text-[#333]'}`}>
                             {plan.label}
                         </span>
                     </div>
                </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;