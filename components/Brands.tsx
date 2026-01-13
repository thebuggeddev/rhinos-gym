import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brands: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(sectionRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%",
            }
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-rhino-dark border-b border-gray-900/50">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
          
          {/* Adidas */}
          <div className="opacity-100 hover:opacity-80 transition-opacity">
            <svg className="h-8 md:h-10 w-auto fill-white" viewBox="0 0 50 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6,32L3.6,20L0,26.2L6.3,32H12.6z M27.9,32L15.3,10.2L10.8,18L18.9,32H27.9z M43.2,32L27,3.9L21.6,13.2L32.4,32H43.2z"/>
            </svg>
          </div>

          {/* Nike */}
          <div className="opacity-100 hover:opacity-80 transition-opacity">
            <svg className="h-6 md:h-8 w-auto fill-white" viewBox="0 0 50 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.2,16.5c10.3,0,22.1-5,30.3-16.5C36.7,11.2,25.6,20,8.2,20c-5.9,0-8.2-1.3-8.2-1.3C5,24.3,16,29,26.5,29 c12.3,0,19.3-8.8,19.3-8.8C35.5,26.5,22.7,29.8,8.2,16.5z"/>
            </svg>
          </div>

          {/* Puma */}
          <div className="opacity-100 hover:opacity-80 transition-opacity">
             <div className="flex items-center gap-1">
                 <svg className="h-8 md:h-10 w-auto fill-white" viewBox="0 0 50 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.6,13.6c-0.2-0.5-0.7-0.8-1.2-0.6c-0.5,0.2-0.8,0.7-0.6,1.2c0.7,1.6,1.4,3.1,2.1,4.7c0.2,0.5,0.8,0.7,1.3,0.5 c0.5-0.2,0.7-0.8,0.5-1.3C45,16.7,44.3,15.2,43.6,13.6z M26,17.2c-2.3,0.8-5.3,0.8-7.8-1.2c-0.2-0.2-0.6-0.3-0.8-0.1 c-0.2,0.2-0.3,0.6-0.1,0.8c2.2,2.8,5.7,3.1,8.3,2.2c1.7-0.6,3.3-1.6,4.6-2.9c0.2-0.2,0.2-0.6,0-0.8C30,15,29.6,15,29.4,15.2 C28.3,16.2,27.2,16.8,26,17.2z"/>
                 </svg>
                 <span className="font-condensed font-bold text-white text-2xl tracking-tighter">PUMA</span>
             </div>
          </div>

          {/* Reebok */}
           <div className="opacity-100 hover:opacity-80 transition-opacity">
             <span className="font-sans font-bold text-white text-2xl md:text-3xl tracking-tight">Reebok</span>
           </div>

          {/* Under Armour */}
          <div className="opacity-100 hover:opacity-80 transition-opacity">
            <svg className="h-8 md:h-10 w-auto fill-white" viewBox="0 0 50 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,23.5c-4.4,0-6.8-2.6-6.8-6.1v-6.6c0-4.3,2.4-5.6,4.7-5.6c1.2,0,2.1,0.2,2.1,0.2s0.9-0.2,2.1-0.2c2.3,0,4.7,1.2,4.7,5.6 v6.6C31.8,20.9,29.4,23.5,25,23.5z M40.2,6.5c-3.1-2.6-7-3.6-11-3.6c-0.8,0-1.7,0.1-2.5,0.2c-0.5,0.1-1.1,0.1-1.7,0.1 s-1.2,0-1.7-0.1c-0.8-0.1-1.6-0.2-2.5-0.2c-4,0-7.9,1-11,3.6c-2.9,2.4-4.8,6.2-4.8,11.2c0,3.3,0.8,6.5,2.4,9.2 c1.9,3.3,4.9,5.1,8.5,5.1c1.2,0,2.3-0.2,3.4-0.6c0.6-0.2,1.2-0.5,1.8-0.8c1.1-0.5,2.7-0.5,3.8,0c0.6,0.3,1.3,0.6,1.8,0.8 c1.1,0.4,2.2,0.6,3.4,0.6c3.6,0,6.5-1.9,8.5-5.1c1.5-2.6,2.4-5.9,2.4-9.2C45,12.7,43.1,8.9,40.2,6.5z"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;