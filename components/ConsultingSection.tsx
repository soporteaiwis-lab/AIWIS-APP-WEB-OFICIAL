import React from 'react';
import { CONSULTING_PHASES } from '../constants';
import { Zap, Code, Handshake } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />
};

const ConsultingSection: React.FC = () => {
  return (
    <section id="consultoria" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Modelo de Consultoría</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un camino estructurado para integrar la IA en el ADN corporativo en 3 fases estratégicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 -z-10 transform -translate-y-1/2"></div>

          {CONSULTING_PHASES.map((phase) => (
            <div key={phase.id} className="relative group">
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20 z-10">
                  {icons[phase.iconName]}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                <h4 className="text-blue-400 font-medium mb-4">{phase.subtitle}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;