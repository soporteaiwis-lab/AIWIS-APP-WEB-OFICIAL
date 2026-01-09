import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-hero-gradient flex items-center">
      
      {/* Background Shapes like reference */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Text Content */}
          <div className="lg:w-1/2 text-left">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-slate-300 font-medium">1 / 4</span>
                <div className="h-[1px] w-12 bg-slate-500"></div>
                <span className="text-cyan-300 font-bold uppercase tracking-widest text-sm">Ecosistema AIWIS</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              AIWIS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Solutions</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-white font-medium mb-6">
              Confirma tu evolución digital <br/> por múltiples canales.
            </h2>

            <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
              Plataformas inteligentes, adopción corporativa y desarrollo de agentes IA. 
              Centralizamos la innovación en una sola suite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#soluciones"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(244,63,94,0.4)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2"
              >
                Más información
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 px-6 py-4 text-white font-medium">
                <span className="text-cyan-400 font-bold">SOLUCIÓN TECNOLÓGICA</span> / CON IA
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Mockup (Phone + Chat) */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 mx-auto w-[300px] md:w-[350px]">
              
              {/* Floating Icons */}
              <div className="absolute -left-12 top-20 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-100 z-20">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className="absolute -right-8 top-40 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce z-20">
                 <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <div className="absolute -right-4 bottom-32 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-75 z-20">
                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>

              {/* Phone Frame */}
              <div className="bg-black rounded-[3rem] p-3 border-4 border-slate-700 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] relative">
                    {/* Phone Header */}
                    <div className="bg-emerald-600 p-4 pt-8 text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20"></div>
                        <div>
                            <p className="font-bold text-sm">AIWIS Assistant</p>
                            <p className="text-[10px] text-emerald-100">En línea</p>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="bg-[#e5ddd5] h-full p-4 flex flex-col gap-4">
                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-xs text-slate-800">Hola, estamos confirmando tu sesión de consultoría para el Lunes a las 9:00.</p>
                            <span className="text-[10px] text-slate-400 block text-right mt-1">10:00 AM</span>
                        </div>

                        <div className="self-end bg-emerald-100 p-2 rounded-lg rounded-tr-none shadow-sm max-w-[50%] flex gap-2">
                             <button className="bg-white px-3 py-1 rounded shadow-sm text-xs font-bold text-emerald-600">SÍ</button>
                             <button className="bg-white px-3 py-1 rounded shadow-sm text-xs font-bold text-slate-600">NO</button>
                        </div>

                        <div className="self-end bg-rose-500 text-white p-2 rounded-lg shadow-md text-center text-xs font-bold w-32">
                            Reagendar
                        </div>

                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop')] bg-cover"></div>
                            <div>
                                <p className="text-xs text-slate-800">Perfecto. Queda agendado.</p>
                                <span className="text-[10px] text-slate-400 block mt-1">AI Agent</span>
                            </div>
                        </div>

                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                             <p className="text-xs text-slate-800">Muchas gracias por usar el servicio.</p>
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