import React from 'react';
import { CLIENTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const ClientsSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-900 bg-slate-950 relative z-20 shadow-lg">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-12">
          Confían en nuestra evolución
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {CLIENTS.map((client) => (
            <a 
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center"
            >
              <div className="w-32 h-16 md:w-40 md:h-20 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-slate-900 transition-all duration-300 relative overflow-hidden shadow-sm">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Typographic Logo Placeholder */}
                <span className="font-display font-bold text-xl md:text-2xl text-slate-400 group-hover:text-white transition-colors z-10 tracking-tighter">
                  {client.initials}
                </span>
                <span className="absolute bottom-1 text-[10px] text-slate-600 group-hover:text-cyan-400 uppercase tracking-widest transition-colors">
                  {client.name}
                </span>
                
                {/* External Link Icon */}
                <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;