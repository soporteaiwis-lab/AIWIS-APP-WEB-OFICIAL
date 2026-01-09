import React from 'react';
import { CLIENT_SOLUTIONS } from '../constants';
import { ArrowRight, LayoutDashboard, Globe, Smartphone } from 'lucide-react';

const ClientSolutionsSection: React.FC = () => {
  return (
    <section id="clientes" className="py-24 bg-[#172554] relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-white mb-4">Zona de Clientes</h2>
           <p className="text-slate-300 max-w-2xl mx-auto">
             Acceso unificado a las plataformas desarrolladas para nuestros partners.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLIENT_SOLUTIONS.map((client) => (
                <div key={client.clientId} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {client.clientName.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-xs text-cyan-300 font-bold border border-cyan-500/30 px-2 py-1 rounded-full bg-cyan-900/20">
                            PARTNER
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{client.clientName}</h3>
                    <p className="text-slate-400 text-sm mb-6 h-10">{client.description}</p>

                    <div className="space-y-3">
                        {client.apps.map((app, idx) => (
                            <a 
                                key={idx} 
                                href={app.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block bg-black/20 hover:bg-white/10 p-3 rounded-lg flex items-center gap-3 transition-colors border border-transparent hover:border-white/20"
                            >
                                {app.type === 'Portal' && <Globe className="w-4 h-4 text-blue-400" />}
                                {app.type === 'App' && <Smartphone className="w-4 h-4 text-green-400" />}
                                {app.type === 'Dashboard' && <LayoutDashboard className="w-4 h-4 text-purple-400" />}
                                
                                <span className="text-white text-sm font-medium flex-1">{app.title}</span>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSolutionsSection;