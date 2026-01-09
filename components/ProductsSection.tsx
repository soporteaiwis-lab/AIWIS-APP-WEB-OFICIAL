import React from 'react';
import { PRODUCTS } from '../constants';
import { Music, GraduationCap, Code, ArrowRight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="soluciones" className="py-32 bg-aiwis-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-purple-500 font-semibold tracking-widest uppercase text-sm">Proprietary Technology</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6">
            Plataformas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">AIWIS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nuestros productos insignia, diseñados para revolucionar la música, la educación y el desarrollo de software.
          </p>
        </div>

        <div className="grid gap-20">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual */}
                <div className="w-full lg:w-1/2">
                   <a href={product.link} target="_blank" rel="noopener noreferrer" className="block group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src={product.image} alt={product.title} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                      <div className="absolute bottom-4 right-4 z-20 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                   </a>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        {product.id === 'armonia' && <Music className="w-5 h-5 text-purple-400" />}
                        {product.id === 'edulabs' && <GraduationCap className="w-5 h-5 text-yellow-400" />}
                        {product.id === 'academy-dev' && <Code className="w-5 h-5 text-blue-400" />}
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{product.category}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{product.title}</h3>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, i) => (
                            <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg hover:bg-slate-800 transition-colors">
                                <h4 className="text-white font-bold text-sm mb-1">{feature.name}</h4>
                                <p className="text-slate-500 text-xs">{feature.description}</p>
                            </div>
                        ))}
                    </div>
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