import React from 'react';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Realistic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" 
          alt="AI Network Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aiwis-dark/80 via-aiwis-dark/50 to-aiwis-dark"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        
        {/* Floating Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/40 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-sm text-cyan-100 font-medium tracking-wide uppercase">Inteligencia Artificial Evolutiva</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tight drop-shadow-2xl">
          Arquitectos de la <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
            Evolución Digital
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
          "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#soluciones" 
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-bold text-lg transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1"
          >
            Explorar Ecosistema
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contacto" 
            className="px-10 py-5 bg-slate-800/40 hover:bg-slate-700/60 text-white border border-slate-600/50 backdrop-blur-md rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            Agendar Reunión
          </a>
        </div>

        {/* Leadership Card */}
        <div className="mt-24 inline-block">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 max-w-md mx-auto hover:bg-white/10 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-inner">
              AW
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg tracking-wide">Armin Wildo Salazar San Martín</p>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">CEO & Visionario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;