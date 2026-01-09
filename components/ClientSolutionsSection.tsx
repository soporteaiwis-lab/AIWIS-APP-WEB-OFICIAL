import React from 'react';
import { CLIENT_SOLUTIONS } from '../constants';
import { ArrowRight, LayoutDashboard, Globe, Smartphone, Lock } from 'lucide-react';

const ClientSolutionsSection: React.FC = () => {
  return (
    <section id="clientes" className="py-24 bg-[#0b1121] relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
           <div className="bg-blue-900/20 p-3 rounded-full mb-4">
              <Lock className="w-6 h-6 text-blue-400" />
           </div>
           <h2 className="text-4xl font-bold text-white mb-4">Zona de Clientes</h2>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Acceso seguro a los ecosistemas digitales de nuestros partners.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_SOLUTIONS.map((client) => (
                <div key={client.clientId} className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center font-display font-bold text-white text-lg shadow-inner">
                                {client.clientName.substring(0, 2).toUpperCase()}
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-white">{client.clientName}</h3>
                                 <span className="text-xs text-slate-500">Corporate Partner</span>
                             </div>
                        </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-6 flex-grow">{client.description}</p>

                    <div className="space-y-2">
                        {client.apps.map((app, idx) => (
                            <a 
                                key={idx} 
                                href={app.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group/link"
                            >
                                <div className="flex items-center gap-3">
                                    {app.type === 'Portal' && <Globe className="w-4 h-4 text-blue-500" />}
                                    {app.type === 'App' && <Smartphone className="w-4 h-4 text-green-500" />}
                                    {app.type === 'Dashboard' && <LayoutDashboard className="w-4 h-4 text-purple-500" />}
                                    <span className="text-slate-300 text-sm font-medium group-hover/link:text-white transition-colors">{app.title}</span>
                                </div>
                                <ArrowRight className="w-3 h-3 text-slate-600 group-hover/link:text-blue-400" />
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