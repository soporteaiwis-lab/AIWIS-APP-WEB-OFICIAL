import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#172554]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          {/* Logo Icon mockup */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white to-slate-300 flex items-center justify-center">
             <div className="w-8 h-8 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#1e3a8a]"></div>
             </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-white tracking-wide">AIWIS</span>
            <span className="text-[10px] text-slate-300 tracking-widest uppercase">Inteligencia Artificial</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 items-center font-medium text-white/90">
          <a href="#soluciones" className="hover:text-white hover:scale-105 transition-all">Soluciones</a>
          <a href="#consultoria" className="hover:text-white hover:scale-105 transition-all">Metodología</a>
          <a href="#labs" className="hover:text-white hover:scale-105 transition-all">I+D Labs</a>
          <a href="#clientes" className="hover:text-white hover:scale-105 transition-all">Clientes</a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#contacto" className="text-white font-medium hover:text-cyan-300 transition-colors">Agendar Demo</a>
          <button className="px-6 py-2.5 bg-white text-[#1e3a8a] rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
            Contáctanos
          </button>
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-cyan-300" />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#172554] border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden shadow-2xl">
          <a href="#soluciones" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Soluciones</a>
          <a href="#consultoria" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Metodología</a>
          <a href="#labs" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>I+D Labs</a>
          <a href="#clientes" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Clientes</a>
          <a href="#contacto" className="text-cyan-300 font-bold" onClick={() => setMobileMenuOpen(false)}>Agendar Demo</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;