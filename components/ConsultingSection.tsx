import React from 'react';
import { CONSULTING_PHASES } from '../constants';
import { Zap, Code, Handshake, ChevronRight, ArrowRight } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />
};

const ConsultingSection: React.FC = () => {
  return (
    <section id="consultoria" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="md:w-2/3">
                <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-2 block">Metodología AIWIS</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                    Ruta de <span className="text-purple-500">Transformación</span>
                </h2>
                <p className="text-slate-400 mt-4 text-lg">
                    No implantamos tecnología, desarrollamos capacidades. Un proceso de 3 fases diseñado para eliminar la fricción del cambio.
                </p>
            </div>
            <div className="md:w-1/3 text-right">
                 <button className="text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium">
                    Ver casos de éxito
                 </button>
            </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-purple-900 via-blue-900 to-slate-800 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12">
                {CONSULTING_PHASES.map((phase, index) => (
                    <div key={phase.id} className="relative z-10 group">
                        {/* Phase Dot */}
                        <div className="w-24 h-24 mx-auto md:mx-0 bg-slate-950 border-4 border-slate-900 rounded-full flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-300">
                             <div className={`absolute inset-0 rounded-full opacity-20 group-hover:opacity-100 transition-opacity blur-md ${index === 0 ? 'bg-purple-600' : index === 1 ? 'bg-blue-600' : 'bg-green-600'}`}></div>
                             <div className="relative bg-slate-900 w-full h-full rounded-full flex items-center justify-center border border-slate-700">
                                 <span className={`text-white transition-colors ${index === 0 ? 'group-hover:text-purple-400' : index === 1 ? 'group-hover:text-blue-400' : 'group-hover:text-green-400'}`}>
                                     {icons[phase.iconName]}
                                 </span>
                             </div>
                             {/* Number Badge */}
                             <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white border border-slate-600">
                                 {index + 1}
                             </div>
                        </div>

                        {/* Content Card */}
                        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">{phase.subtitle}</p>
                            <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                                {phase.description}
                            </p>
                            
                            <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center text-sm font-semibold text-white opacity-50 group-hover:opacity-100 transition-opacity">
                                Detalles <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultingSection;