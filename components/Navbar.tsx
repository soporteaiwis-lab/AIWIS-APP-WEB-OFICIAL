import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
          AIWIS <span className="text-xs text-cyan-500 font-sans font-normal border border-cyan-500/30 px-2 py-0.5 rounded-full">BETA</span>
        </a>

        <div className="hidden lg:flex gap-8 items-center">
          <a href="#consultoria" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
            Consultoría
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#soluciones" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
            Plataformas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#clientes" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
            Zona Clientes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#labs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
            Labs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="px-5 py-2 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;