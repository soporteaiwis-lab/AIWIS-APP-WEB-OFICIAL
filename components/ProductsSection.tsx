import React from 'react';
import { PRODUCTS } from '../constants';
import { Music, GraduationCap, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="soluciones" className="py-32 bg-aiwis-dark relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">
            Ecosistema de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Innovación</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            Soluciones donde la creatividad humana se encuentra con la precisión de la máquina.
          </p>
        </div>

        <div className="space-y-32">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image / Visual Side */}
                <div className="w-full lg:w-3/5 group">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800">
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                    
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 group-hover:saturate-150" 
                    />

                    {/* Category Tag on Image */}
                    <div className="absolute top-6 left-6 z-20">
                       <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 px-4 py-2 rounded-full text-cyan-400">
                        {product.id === 'armonia' && <Music className="w-4 h-4" />}
                        {product.id === 'edulabs' && <GraduationCap className="w-4 h-4" />}
                        {product.id === 'corporate' && <Building2 className="w-4 h-4" />}
                        <span className="text-xs font-bold uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating Decor */}
                  <div className={`hidden lg:block absolute w-full h-full top-4 ${isEven ? 'left-4' : '-left-4'} border border-slate-700 rounded-3xl -z-10`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5">
                  <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{product.title}</h3>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-blue-500/50 pl-6">
                    {product.description}
                  </p>

                  <div className="space-y-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="group flex gap-5 items-start">
                        <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">{feature.name}</h4>
                          <p className="text-slate-500 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-12 group flex items-center gap-2 text-white font-semibold border-b border-transparent hover:border-blue-500 transition-all pb-1">
                    Explorar solución <ArrowUpRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;