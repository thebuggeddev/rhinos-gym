import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  {
    id: 1,
    name: "Kika Monica J",
    role: "Head Of Personal Trainer",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", // Woman Crunches
    highlight: false
  },
  {
    id: 2,
    name: "Gina Youbie",
    role: "Personal Trainer",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80", // Woman Boxing
    highlight: false
  },
  {
    id: 3,
    name: "Pearl Jawel G",
    role: "Personal Trainer",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80", // Woman Abs
    highlight: true
  },
  {
    id: 4,
    name: "Alex Martino",
    role: "Personal Trainer",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", // Man Workout
    highlight: false
  },
];

const TrainerCard = ({ trainer }: { trainer: typeof trainers[0] }) => (
  <div 
    className={`trainer-card relative rounded-[2.5rem] overflow-hidden aspect-[4/5] group w-full border-[6px] transition-transform duration-300 hover:-translate-y-2 ${
      trainer.highlight ? 'border-rhino-orange shadow-[0_0_30px_rgba(255,107,53,0.3)]' : 'border-white'
    }`}
  >
    <img 
      src={trainer.imageUrl} 
      alt={trainer.name} 
      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
    />
    {/* Gradient Overlay for Text Visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
    
    {/* Text Content */}
    <div className="absolute bottom-8 left-8 z-10">
      <h3 className="font-condensed font-bold text-white text-4xl uppercase mb-1 leading-none tracking-tight">
        {trainer.name}
      </h3>
      <p className="font-sans text-gray-300 text-sm font-medium tracking-wide">
        {trainer.role}
      </p>
    </div>
  </div>
);

const Trainers: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const ctx = gsap.context(() => {
          gsap.from(".trainer-card", {
              y: 100,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 70%",
              }
          });
      }, sectionRef);
      return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-32 md:pb-40 bg-rhino-dark px-4 flex justify-center">
      <div className="w-full max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1 - Starts at top */}
            <div className="flex flex-col gap-8">
                <TrainerCard trainer={trainers[0]} />
                <TrainerCard trainer={trainers[2]} />
            </div>

            {/* Column 2 - Offset vertically to create staggered look */}
            <div className="flex flex-col gap-8 md:pt-24">
                <TrainerCard trainer={trainers[1]} />
                <TrainerCard trainer={trainers[3]} />
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Trainers;