import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Mic, Play, Pause, FastForward, Sliders, Music, GraduationCap, Users, BookOpen, BarChart3, Grip, Sparkles } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="soluciones" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-blue-900/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
             <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-900/10 mb-4 inline-block">
                Tecnología Proprietaria
             </span>
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AIWIS</span>
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                Nuestras plataformas insignia redefinen la producción musical y la educación escolar mediante Inteligencia Artificial Híbrida.
             </p>
        </div>

        <div className="flex flex-col gap-40">
            
            {/* PRODUCTO 1: ARMONÍA (DAW Style Mockup) */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-3/5 perspective-1000 group">
                    <div className="relative bg-[#121212] rounded-xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_-10px_rgba(124,58,237,0.15)] transform transition-transform duration-700 hover:rotate-x-2 group-hover:scale-[1.02]">
                        {/* Toolbar */}
                        <div className="h-12 bg-[#1e1e1e] border-b border-white/10 flex items-center px-4 justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                                <Music className="w-3 h-3 text-purple-500" /> ArmonIA v17.0 Pro
                            </div>
                            <div className="w-20"></div>
                        </div>

                        {/* Main DAW Area */}
                        <div className="flex h-[400px]">
                            {/* Left Sidebar (Tracks) */}
                            <div className="w-48 bg-[#181818] border-r border-white/5 flex flex-col pt-2">
                                {[
                                    { name: "Vocal Lead", color: "bg-purple-500" },
                                    { name: "Suno Gen A", color: "bg-blue-500" },
                                    { name: "Drum Lab", color: "bg-yellow-500" },
                                    { name: "Bass AI", color: "bg-red-500" }
                                ].map((track, i) => (
                                    <div key={i} className="h-20 border-b border-white/5 p-3 flex flex-col justify-center relative hover:bg-white/5 transition-colors">
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${track.color}`}></div>
                                        <span className="text-xs text-slate-300 font-bold mb-1">{track.name}</span>
                                        <div className="flex gap-1">
                                            <div className="w-4 h-4 rounded bg-white/10 text-[8px] flex items-center justify-center text-slate-400">M</div>
                                            <div className="w-4 h-4 rounded bg-white/10 text-[8px] flex items-center justify-center text-slate-400">S</div>
                                            <Sliders className="w-4 h-4 text-slate-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline / Arrangement */}
                            <div className="flex-1 bg-[#121212] relative overflow-hidden p-2">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="flex-1 border-r border-white/5 h-full"></div>
                                    ))}
                                </div>
                                
                                {/* Clips */}
                                <div className="relative space-y-4 pt-4">
                                    <div className="h-12 w-2/3 bg-purple-900/40 border border-purple-500/50 rounded ml-4 relative overflow-hidden group/clip">
                                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/clip:opacity-100 transition-opacity">
                                            <span className="text-[10px] text-white bg-black/50 px-2 rounded">Processing Audio Lens...</span>
                                         </div>
                                         {/* Waveform Sim */}
                                         <div className="h-full flex items-center gap-0.5 opacity-50 px-2">
                                             {[...Array(40)].map((_,i) => (
                                                 <div key={i} className="w-1 bg-purple-400 rounded-full" style={{height: `${Math.random() * 100}%`}}></div>
                                             ))}
                                         </div>
                                    </div>
                                    <div className="h-12 w-1/2 bg-blue-900/40 border border-blue-500/50 rounded ml-32 flex items-center px-2">
                                        <span className="text-[10px] text-blue-300 font-mono">Suno_Idea_v4.wav</span>
                                    </div>
                                    <div className="h-12 w-3/4 bg-yellow-900/40 border border-yellow-500/50 rounded ml-0 grid grid-cols-12 gap-1 p-1">
                                         {[...Array(12)].map((_,i) => (
                                             <div key={i} className={`rounded-sm ${i%3===0 ? 'bg-yellow-500/80' : 'bg-yellow-500/20'}`}></div>
                                         ))}
                                    </div>
                                </div>

                                {/* Floating "Suno Lab" Panel */}
                                <div className="absolute bottom-4 right-4 w-64 bg-[#1e1e1e] border border-slate-700 rounded-lg shadow-2xl p-3 animate-float-delayed">
                                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                                        <span className="text-xs font-bold text-white flex items-center gap-2">
                                            <Sparkles className="w-3 h-3 text-purple-400" /> Suno Copilot
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="bg-slate-800 p-2 rounded text-[10px] text-slate-300">
                                            Genera un ritmo Lofi a 85 BPM...
                                        </div>
                                        <div className="bg-purple-900/20 p-2 rounded text-[10px] text-purple-300 border border-purple-500/30">
                                            Generando 2 variaciones...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/5">
                    <div className="flex items-center gap-2 mb-4">
                        <Music className="w-6 h-6 text-purple-500" />
                        <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">Investigación & Audio</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">ArmonIA 17</h3>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        El primer DAW híbrido diseñado para la co-creación. Integra <strong>Suno Lab</strong> para generación, 
                        <strong> Audio Lens</strong> para análisis espectral y un potente motor de baterías.
                        <br/><br/>
                        <span className="text-slate-500 italic">"No reemplazamos al músico, evitamos su obsolescencia."</span>
                    </p>
                    <ul className="space-y-3 mb-8">
                        {PRODUCTS[0].features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                <CheckCircleMini color="text-purple-500" />
                                <span><strong className="text-white">{f.name}:</strong> {f.description}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={PRODUCTS[0].link} target="_blank" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all">
                        Entrar al Estudio <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* PRODUCTO 2: EDU STUDIO (LMS Style Mockup) */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                <div className="w-full lg:w-3/5 perspective-1000 group">
                     <div className="relative bg-slate-100 rounded-xl overflow-hidden border border-slate-300 shadow-[0_20px_50px_-10px_rgba(59,130,246,0.15)] transform transition-transform duration-700 hover:rotate-x-2 group-hover:scale-[1.02]">
                        {/* LMS Header */}
                        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
                             <div className="flex items-center gap-2">
                                 <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                                     <GraduationCap className="w-5 h-5" />
                                 </div>
                                 <span className="font-bold text-slate-800 text-lg tracking-tight">EduStudio Labs</span>
                             </div>
                             <div className="flex gap-4 text-sm font-medium text-slate-500">
                                 <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Explorer</span>
                                 <span className="hover:text-slate-800">Maker</span>
                                 <span className="hover:text-slate-800">Pro</span>
                             </div>
                             <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                             </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="p-6 bg-slate-50 min-h-[400px] grid grid-cols-12 gap-6">
                             {/* Left Menu */}
                             <div className="col-span-3 space-y-2">
                                 <div className="flex items-center gap-3 p-3 bg-blue-100/50 text-blue-700 rounded-lg font-medium">
                                     <Grip className="w-4 h-4" /> Dashboard
                                 </div>
                                 <div className="flex items-center gap-3 p-3 text-slate-600 hover:bg-white rounded-lg transition-colors">
                                     <BookOpen className="w-4 h-4" /> Mis Cursos
                                 </div>
                                 <div className="flex items-center gap-3 p-3 text-slate-600 hover:bg-white rounded-lg transition-colors">
                                     <BarChart3 className="w-4 h-4" /> Rúbricas
                                 </div>
                             </div>

                             {/* Main Content */}
                             <div className="col-span-9 space-y-6">
                                 {/* Stats Cards */}
                                 <div className="grid grid-cols-3 gap-4">
                                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                         <p className="text-xs text-slate-400 uppercase font-bold">Progreso</p>
                                         <p className="text-2xl font-bold text-slate-800">85%</p>
                                     </div>
                                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                         <p className="text-xs text-slate-400 uppercase font-bold">Proyectos</p>
                                         <p className="text-2xl font-bold text-slate-800">12</p>
                                     </div>
                                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                         <p className="text-xs text-slate-400 uppercase font-bold">Nivel</p>
                                         <p className="text-2xl font-bold text-orange-500">Maker II</p>
                                     </div>
                                 </div>

                                 {/* Active Project: "Piano Roll" Mini Sim */}
                                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                                     <h4 className="font-bold text-slate-800 mb-4 flex justify-between">
                                         Proyecto Actual: Composición Lo-Fi
                                         <span className="text-xs font-normal text-slate-400">Editado hace 2m</span>
                                     </h4>
                                     <div className="bg-slate-900 rounded-lg h-32 w-full relative overflow-hidden p-2">
                                         {/* Notes */}
                                         <div className="absolute top-4 left-4 w-12 h-2 bg-green-400 rounded-sm"></div>
                                         <div className="absolute top-8 left-20 w-8 h-2 bg-green-400 rounded-sm"></div>
                                         <div className="absolute top-12 left-32 w-16 h-2 bg-green-400 rounded-sm"></div>
                                         <div className="absolute top-20 left-4 w-40 h-2 bg-blue-400 rounded-sm opacity-50"></div>
                                         
                                         {/* Playhead */}
                                         <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-red-500"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>

                <div className="w-full lg:w-2/5">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-6 h-6 text-blue-500" />
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Educación 3.0</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Edu Studio Labs</h3>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        Plataforma educativa progresiva. Los alumnos <strong>cantan, tocan y componen</strong> usando la tecnología como puente.
                        Desde el juego (Explorer) hasta la técnica profesional (Pro).
                    </p>
                    <ul className="space-y-3 mb-8">
                        {PRODUCTS[1].features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                <CheckCircleMini color="text-blue-500" />
                                <span><strong className="text-white">{f.name}:</strong> {f.description}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={PRODUCTS[1].link} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all">
                        Acceso Estudiantes <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const CheckCircleMini = ({color}: {color: string}) => (
    <svg className={`w-5 h-5 ${color} flex-shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default ProductsSection;