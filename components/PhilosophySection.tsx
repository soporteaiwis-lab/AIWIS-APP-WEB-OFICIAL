import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Heart, BookOpen, Check } from 'lucide-react';

const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6">
              <Heart className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-200 font-medium">Filosofía Humana</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              IA con <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Empatía y Pedagogía</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              En <span className="text-white font-bold">AIWIS</span>, creemos que la tecnología debe ser accesible para todos. Nuestro enfoque no es solo técnico, sino humano. 
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Adopción Progresiva</h4>
                  <p className="text-slate-400 text-sm">Educamos y mentorizamos. Elegimos las herramientas correctas para cada cliente, sin abrumar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <Check className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Mentoria Semántica</h4>
                  <p className="text-slate-400 text-sm">Explicamos conceptos complejos en lenguaje simple. La revolución digital sin miedo es evolución.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
              alt="Equipo AIWIS" 
              className="relative rounded-3xl border border-slate-700 shadow-2xl w-full object-cover h-[500px] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-700">
               <p className="text-slate-300 italic mb-2">"{COMPANY_INFO.philosophy}"</p>
               <p className="text-cyan-400 font-bold text-sm">- Armin Wildo Salazar, CEO</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;