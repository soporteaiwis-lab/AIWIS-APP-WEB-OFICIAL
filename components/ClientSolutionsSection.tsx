import React, { useState } from 'react';
import { CLIENT_SOLUTIONS } from '../constants';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';

const ClientSolutionsSection: React.FC = () => {
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const activeClient = CLIENT_SOLUTIONS[activeClientIndex];

  return (
    <section id="clientes" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
           <span className="text-cyan-500 font-semibold tracking-widest uppercase text-sm">Acceso Corporativo</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">Zona de Clientes</h2>
           <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
             Acceso directo a los portales y aplicaciones desarrolladas a medida para nuestros partners estratégicos.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Tabs */}
            <div className="w-full lg:w-1/4 flex flex-col gap-2">
                {CLIENT_SOLUTIONS.map((client, index) => (
                    <button
                        key={client.clientId}
                        onClick={() => setActiveClientIndex(index)}
                        className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                            activeClientIndex === index 
                            ? 'bg-gradient-to-r from-blue-900/50 to-slate-900 border border-blue-500/50 text-white shadow-lg' 
                            : 'bg-slate-900/30 border border-transparent text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        <span className="font-display font-bold text-lg">{client.clientName}</span>
                        {activeClientIndex === index && <ArrowRight className="w-4 h-4 text-cyan-400" />}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 min-h-[400px]">
                    <div className="mb-8">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{activeClient.clientName}</h3>
                        <p className="text-slate-400">{activeClient.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {activeClient.apps.map((app, idx) => (
                            <a 
                                key={idx} 
                                href={app.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="h-32 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-colors"></div>
                                    <img src={app.image} alt={app.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider border border-cyan-900/50 bg-cyan-900/20 px-2 py-0.5 rounded">
                                            {app.type}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{app.title}</h4>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSolutionsSection;