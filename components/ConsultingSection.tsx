import React from 'react';
import { CONSULTING_PHASES } from '../constants';
import { Zap, Code, Handshake, ChevronRight } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-7 h-7" />,
  Code: <Code className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />
};

const ConsultingSection: React.FC = () => {
  return (
    <section id="consultoria" className="py-32 relative bg-slate-950">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-500 font-semibold tracking-widest uppercase text-sm">Metodología AIWIS</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Modelo de Consultoría
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transformamos empresas mediante un camino estructurado de 3 fases, integrando la IA en el ADN corporativo sin fricción.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONSULTING_PHASES.map((phase, index) => (
            <div key={phase.id} className="relative group">
              
              {/* Card Container */}
              <div className="h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] flex flex-col group">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:text-cyan-400 transition-all duration-500 shadow-lg">
                  {icons[phase.iconName]}
                </div>
                
                {/* Content */}
                <div className="mb-2 flex items-center gap-3">
                  <span className="bg-blue-900/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-800/50">
                    FASE 0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-6 font-display">{phase.subtitle}</h4>
                
                <p className="text-slate-400 text-base leading-relaxed flex-grow">
                  {phase.description}
                </p>

                {/* Decorative Elements */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center text-sm text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Saber más <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;