import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-200 font-medium tracking-wide">AIWIS INTELLIGENCE</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Arquitectos de la <br />
          <span className="gradient-text">Evolución Digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light">
          "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución."
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#consultoria" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-900/50"
          >
            Nuestros Servicios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold transition-all"
          >
            Contáctanos
          </a>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Liderazgo</p>
          <p className="text-lg font-semibold text-white">Armin Wildo Salazar San Martín</p>
          <p className="text-slate-400 text-sm">CEO & Fundador</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;