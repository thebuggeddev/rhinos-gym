import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Users, Calendar, Presentation } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Facilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Helper to split text
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
            <span className="inline-block translate-y-[110%] will-change-transform facility-title-reveal pb-2">
                {word}&nbsp;
            </span>
        </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Header Text Reveal
        gsap.to(".facility-title-reveal", {
            y: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Description Fade In
        gsap.from(".facility-desc-anim", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Cards Stagger
        gsap.from(".facility-card", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".facility-cards-container",
                start: "top 75%",
            }
        });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 bg-rhino-dark px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative">
            <div className="max-w-3xl">
                <h2 className="font-condensed font-bold text-white text-6xl md:text-7xl lg:text-[7rem] uppercase leading-[0.9] mb-8">
                    {splitText("Facilities At Fitness Rhinos.")}
                </h2>
                <p className="facility-desc-anim text-gray-400 text-sm md:text-base max-w-lg font-medium leading-relaxed tracking-wide">
                    Our Facilities Help You To Get The Maximum Exercise And Experience In The Gym.
                </p>
            </div>
            
            {/* Custom Navigation - Top Right */}
            <div className="hidden md:flex items-center gap-6 mb-4 facility-desc-anim">
                {/* Left Arrow */}
                <button className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-rhino-orange hover:text-rhino-orange transition-all group">
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                
                {/* Right Arrow - Solid inside a Large Ring */}
                <div className="relative flex items-center justify-center w-28 h-28">
                     {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-gray-700/60"></div>
                    {/* Orange Button */}
                    <button className="w-20 h-20 rounded-full bg-rhino-orange flex items-center justify-center text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                        <ArrowRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>

        {/* Cards Grid */}
        <div className="facility-cards-container grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
            
            {/* Card 1: CLASS - Content Right, Button Left */}
            <div className="facility-card bg-[#161616] p-10 rounded-[2.5rem] flex flex-col h-[460px] group relative hover:bg-[#1A1A1A] transition-colors items-end text-right shadow-xl">
                <div className="text-[#4A4A4A] mb-8 group-hover:text-white transition-colors">
                    <Presentation size={72} strokeWidth={1.5} />
                </div>
                <h3 className="font-condensed font-bold text-white text-5xl uppercase mb-6 tracking-tight">Class</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-[260px]">
                    Our Facilities Help You To Get The Maximum Exercise And Experience In The Gym.
                </p>
                
                {/* Button overlapping bottom edge - Left Aligned */}
                <button className="absolute -bottom-7 left-10 w-14 h-14 rounded-full bg-rhino-orange flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-lg z-20">
                     <ArrowRight className="w-6 h-6 -rotate-45" />
                </button>
            </div>

            {/* Card 2: CLUB - Content Left, Button Left */}
            <div className="facility-card bg-[#161616] p-10 rounded-[2.5rem] flex flex-col h-[460px] group relative hover:bg-[#1A1A1A] transition-colors items-start text-left shadow-xl">
                <div className="text-[#4A4A4A] mb-8 group-hover:text-white transition-colors">
                     <Users size={72} strokeWidth={1.5} />
                </div>
                <h3 className="font-condensed font-bold text-white text-5xl uppercase mb-6 tracking-tight">Club</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-[260px]">
                    Our Club Has State-Of-The-Art Fitness Equipment That Will Take Your Workout To The Next Level.
                </p>

                {/* Button overlapping bottom edge - Left Aligned */}
                <button className="absolute -bottom-7 left-10 w-14 h-14 rounded-full bg-rhino-orange flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-lg z-20">
                     <ArrowRight className="w-6 h-6 -rotate-45" />
                </button>
            </div>

            {/* Card 3: TIMETABLE - Offset Up, Orange Icon, Pill Button */}
            <div className="facility-card bg-[#161616] p-10 rounded-[2.5rem] flex flex-col h-[460px] md:-mt-24 group relative hover:bg-[#1A1A1A] transition-colors shadow-2xl items-start text-left z-30">
                 <div>
                    <div className="text-rhino-orange mb-10">
                        <Calendar size={64} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-condensed font-bold text-white text-5xl uppercase mb-6 tracking-tight">Timetable</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-[280px]">
                        Looking For A Class That Fits Your Schedule? We Have Plenty Of Time Options To Suit You.
                    </p>
                </div>
                
                {/* Pill Button overlapping bottom edge - Centered */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center z-20 px-8">
                     <button className="bg-rhino-orange hover:bg-white hover:text-black transition-colors text-white font-condensed font-bold uppercase text-xl px-12 py-5 rounded-full tracking-widest w-full shadow-lg whitespace-nowrap">
                        Discover More
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;