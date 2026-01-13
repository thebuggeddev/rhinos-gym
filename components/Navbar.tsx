import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex justify-center pt-6 px-4 bg-rhino-dark">
      <nav className="bg-[#F4F4F4] w-full max-w-[1340px] rounded-full px-8 md:px-12 py-5 flex items-center justify-between relative z-50">
        <div className="flex items-center">
          <span className="font-condensed font-bold text-3xl md:text-4xl tracking-tighter uppercase text-black">RHINOS GYM</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-sans text-sm font-semibold tracking-tight text-black">
          <a href="#" className="hover:text-rhino-orange transition-colors">Home</a>
          <a href="#" className="hover:text-rhino-orange transition-colors">Goals</a>
          <a href="#" className="hover:text-rhino-orange transition-colors">Services</a>
          <a href="#" className="hover:text-rhino-orange transition-colors">Class Scheduless</a>
          <a href="#" className="hover:text-rhino-orange transition-colors">Contact</a>
        </div>

        <div className="md:hidden text-black">
             <Menu size={24} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;