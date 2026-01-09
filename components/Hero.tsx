import React from 'react';
import { ArrowRight, MessageSquare, Calendar, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden bg-hero-gradient flex items-center">
      
      {/* Abstract Background Elements (Elipse Style) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: Text Content - Ultra Clean Typography */}
          <div className="lg:w-1/2 text-left space-y-8">
            <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-sm tracking-[0.2em] uppercase border-b border-cyan-500/50 pb-1">AIWIS Ecosystem</span>
                <span className="text-slate-500 text-xs font-mono">v4.0</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight font-display">
              Arquitectos de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Evolución Digital</span>
            </h1>

            <p className="text-slate-300 text-lg lg:text-xl max-w-lg leading-relaxed font-light">
              Fusionamos consultoría estratégica con plataformas propietarias de IA. 
              <span className="text-white font-medium"> Música, Educación y Corporativo</span> centralizados en una suite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#soluciones"
                className="px-8 py-4 bg-white text-[#0f172a] font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all text-center flex items-center justify-center gap-2 group"
              >
                Explorar Plataformas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto" 
                className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all text-center backdrop-blur-sm"
              >
                Agendar Consultoría
              </a>
            </div>
          </div>

          {/* RIGHT: Sophisticated UI Mockup (WhatsApp/Assistant Style) */}
          <div className="lg:w-1/2 relative perspective-1000">
            <div className="relative mx-auto w-[320px] lg:w-[380px] transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out">
              
              {/* Floating Cards Behind */}
              <div className="absolute -right-12 top-20 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-2xl z-20 animate-float-slow">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white"><Check className="w-5 h-5" /></div>
                    <span className="text-sm font-bold text-white">Tarea Completada</span>
                 </div>
                 <div className="h-1 w-32 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-green-500"></div>
                 </div>
              </div>

              <div className="absolute -left-8 bottom-32 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-2xl z-20 animate-float-delayed">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white"><Calendar className="w-5 h-5" /></div>
                    <div>
                        <p className="text-xs text-slate-400">Próxima Reunión</p>
                        <p className="text-sm font-bold text-white">Consultoría Fase 2</p>
                    </div>
                 </div>
              </div>

              {/* Main Phone Mockup */}
              <div className="bg-[#0b101a] rounded-[3rem] p-3 border-[6px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10">
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

                <div className="bg-[#f0f2f5] rounded-[2.5rem] overflow-hidden h-[650px] relative flex flex-col">
                    {/* Header */}
                    <div className="bg-[#1e3a8a] p-6 pt-12 pb-4 text-white shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-0.5">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold">AI</div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1e3a8a] rounded-full"></div>
                            </div>
                            <div>
                                <p className="font-bold text-base">AIWIS Assistant</p>
                                <p className="text-[10px] text-blue-200">Soporte Corporativo 24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-10 p-4 space-y-4 overflow-hidden">
                        
                        {/* Date Separator */}
                        <div className="flex justify-center">
                            <span className="bg-[#e2e8f0] text-slate-500 text-[10px] px-3 py-1 rounded-full shadow-sm font-medium">Hoy</span>
                        </div>

                        {/* Bot Message 1 */}
                        <div className="flex flex-col items-start max-w-[85%] animate-fade-in-up">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-800 relative group">
                                <p>Hola, hemos detectado una optimización disponible en tu portal <strong>Edu Studio</strong>.</p>
                                <span className="text-[10px] text-slate-400 absolute bottom-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity">10:00</span>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex flex-col items-end max-w-[85%] ml-auto animate-fade-in-up delay-100">
                            <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-800">
                                <p>¡Genial! ¿Me das un resumen?</p>
                            </div>
                        </div>

                        {/* Bot Message 2 (Interactive) */}
                        <div className="flex flex-col items-start max-w-[90%] animate-fade-in-up delay-200">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-800 w-full">
                                <p className="mb-2">Aquí tienes el reporte de uso de tus licencias:</p>
                                {/* Mini Chart Simulation */}
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2">
                                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                                        <span>Activas</span>
                                        <span className="font-bold text-green-600">98%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full w-[98%]"></div>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-[#1e3a8a] text-white text-xs font-bold rounded-lg hover:bg-blue-800 transition-colors">
                                    Ver Panel Completo
                                </button>
                            </div>
                        </div>

                        {/* Typing Indicator */}
                         <div className="flex items-center gap-1 bg-white p-2 rounded-full w-12 justify-center shadow-sm">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                         </div>

                    </div>
                    
                    {/* Input Area */}
                    <div className="p-3 bg-white/90 backdrop-blur border-t border-slate-200">
                         <div className="h-10 bg-slate-100 rounded-full flex items-center px-4 text-slate-400 text-sm">
                            Escribe un mensaje...
                         </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;