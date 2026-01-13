import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Signature Class",
  "Strength And Conditioning",
  "Mind And Body",
  "Cycling",
  "Cardio"
];

const classesData = {
  "All": {
    name: "Bodypump",
    verticalLabel: "Strength",
    description: "This Barbell Exercise Targets All Of Your Major Muscles. Based On 'The Rep Effect', This Proven Formula Will Train Your Muscles Using Light To Moderate Weights For High Rep Exercises.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [10, 11, 12]
  },
  "Signature Class": {
    name: "Grit Series",
    verticalLabel: "HIIT",
    description: "A 30-Minute High-Intensity Interval Training (HIIT) Workout, Designed To Improve Strength, Cardiovascular Fitness And Build Lean Muscle. This Workout Uses Barbell, Weight Plate And Body Weight Exercises.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [13, 14, 15]
  },
  "Strength And Conditioning": {
    name: "CrossFit Intro",
    verticalLabel: "Power",
    description: "Constantly Varied Functional Movements Performed At High Intensity. All CrossFit Workouts Are Based On Functional Movements, And These Movements Reflect The Best Aspects Of Gymnastics And Weightlifting.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [16, 17, 18]
  },
  "Mind And Body": {
    name: "Yoga Flow",
    verticalLabel: "Balance",
    description: "A Yoga-Based Class That Will Improve Your Mind, Your Body And Your Life. During The Class, You Bend And Stretch Through A Series Of Simple Yoga Moves And Embrace Elements Of Tai Chi And Pilates.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [19, 20, 21]
  },
  "Cycling": {
    name: "RPM Cycling",
    verticalLabel: "Cardio",
    description: "A Group Indoor Cycling Workout Where You Control The Intensity. It's Fun, Low Impact And You Can Burn Up To 675 Calories A Session. With Great Music Pumping And The Group Spinning As One.",
    image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [22, 23, 24]
  },
  "Cardio": {
    name: "Bodycombat",
    verticalLabel: "Martial Arts",
    description: "Step Into A Bodycombat Workout And You'll Punch And Kick Your Way To Fitness, Burning Up To 740 Calories Along The Way. This High-Energy Martial-Arts Inspired Workout Is Totally Non-Contact.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    trainers: [25, 26, 27]
  }
};

const Classes: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const activeData = classesData[activeTab as keyof typeof classesData];

  // Helper for split text
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
            <span className="inline-block translate-y-[110%] will-change-transform class-title-reveal pb-2">
                {word}&nbsp;
            </span>
        </span>
    ));
  };

  // Initialize indicator position
  useEffect(() => {
    const activeIndex = categories.indexOf(activeTab);
    const activeEl = tabsRef.current[activeIndex];
    if (activeEl) {
        setIndicatorProps({
            left: activeEl.offsetLeft,
            width: activeEl.offsetWidth
        });
    }
  }, []);

  // Handle Tab Click with Smooth Transitions
  const handleTabChange = (category: string, index: number) => {
    if (activeTab === category || isAnimating) return;
    setIsAnimating(true);

    // 1. Move Indicator Smoothly
    const targetEl = tabsRef.current[index];
    if (targetEl) {
        gsap.to(".tab-indicator", {
            left: targetEl.offsetLeft,
            width: targetEl.offsetWidth,
            duration: 0.4,
            ease: "power3.out"
        });
    }

    // 2. Animate Out Old Content
    const tl = gsap.timeline({
        onComplete: () => {
            setActiveTab(category);
            setIsAnimating(false);
        }
    });

    tl.to([".class-content-anim", ".class-image-anim"], {
        y: 10,
        opacity: 0,
        duration: 0.25,
        stagger: 0, 
        ease: "power2.in"
    });
  };

  // Animate IN when activeTab updates (After state change)
  useEffect(() => {
    if (!contentWrapperRef.current) return;
    
    // Animate Image - Scaling effect
    gsap.fromTo([".class-image-anim"], 
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Animate Text - Slide Up
    gsap.fromTo([".class-content-anim"],
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
    );

  }, [activeTab]);

  // Initial Section Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
        // Title Reveal
        gsap.to(".class-title-reveal", {
            y: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Tabs fade in
        gsap.from(".class-tabs-anim", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        gsap.from(containerRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-rhino-dark px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
         <h2 className="font-condensed font-bold text-white text-5xl md:text-6xl uppercase leading-none mb-8">
            {splitText("Our Fitness Class")}
        </h2>
        
        {/* Navigation Tabs */}
        <div className="class-tabs-anim relative inline-flex flex-wrap justify-center gap-0 text-gray-500 font-condensed uppercase font-bold tracking-wider text-sm md:text-base border-b border-gray-800 pb-0 w-full md:w-auto">
            
            {/* Animated Indicator */}
            <div 
                className="tab-indicator absolute bottom-0 h-1 bg-rhino-orange transition-none"
                style={{ 
                    left: indicatorProps.left, 
                    width: indicatorProps.width,
                    boxShadow: '0 -2px 10px rgba(255, 107, 53, 0.5)'
                }}
            />

            {categories.map((cat, index) => (
                <button 
                    key={cat}
                    ref={(el) => { tabsRef.current[index] = el; }}
                    onClick={() => handleTabChange(cat, index)}
                    disabled={isAnimating}
                    className={`px-4 md:px-6 pb-4 cursor-pointer transition-colors duration-300 relative z-10 hover:text-gray-300 ${
                        activeTab === cat ? 'text-white' : ''
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
          {/* Card Container - Fixed min-height to prevent layout jumps */}
          <div ref={containerRef} className="bg-[#1A1A1A] rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] relative shadow-2xl">
              
              {/* Vertical Label */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-[#222] flex items-center justify-center z-10 border-r border-gray-800 transition-colors duration-500">
                  <span className="class-content-anim font-condensed font-bold text-gray-500 text-3xl md:text-5xl uppercase -rotate-90 whitespace-nowrap tracking-widest">
                      {activeData.verticalLabel}
                  </span>
                  <div className="absolute top-8">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                  </div>
              </div>

              {/* Content Grid */}
              <div ref={contentWrapperRef} className="flex-1 ml-16 md:ml-20 grid grid-cols-1 md:grid-cols-2 h-full">
                  
                  {/* Image Side - Fixed Height */}
                  <div className="class-image-anim relative h-[300px] md:h-full overflow-hidden w-full">
                      <img 
                        src={activeData.image} 
                        alt={activeData.name} 
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Text Side - Flex Centered */}
                  <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                      <h3 className="class-content-anim font-condensed font-bold text-white text-4xl md:text-5xl uppercase mb-6">
                        {activeData.name}
                      </h3>
                      <p className="class-content-anim text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                          {activeData.description}
                      </p>

                      <div className="class-content-anim flex items-center gap-3">
                          {activeData.trainers.map((id, index) => (
                              <img 
                                key={index}
                                src={`https://picsum.photos/50/50?random=${id}`} 
                                alt="Trainer" 
                                className="w-12 h-12 rounded-full border-2 border-gray-800" 
                              />
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Classes;