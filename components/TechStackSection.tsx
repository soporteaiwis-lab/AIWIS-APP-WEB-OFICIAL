import React from 'react';
import { TECHNOLOGIES } from '../constants';
import { Cloud, Brain, Database, Bot } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-10 h-10" />,
  Brain: <Brain className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
  Bot: <Bot className="w-10 h-10" />
};

const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-12">
          Potenciamos tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tecnología de Punta</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className="group p-8 bg-slate-900/30 rounded-2xl border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-4 border border-slate-700">
                {icons[tech.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-slate-500 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;