import React from 'react';
import { PRODUCTS } from '../constants';
import { Music, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="soluciones" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ecosistema de <span className="gradient-text">Innovación</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde la música hasta la alta ingeniería bancaria. Soluciones prácticas y humanas.
          </p>
        </div>

        <div className="space-y-24">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.id} className={`flex flex-col md:flex-row gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image / Visual Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10"></div>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent z-20">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        {product.id === 'armonia' && <Music className="w-5 h-5" />}
                        {product.id === 'edulabs' && <GraduationCap className="w-5 h-5" />}
                        {product.id === 'corporate' && <Building2 className="w-5 h-5" />}
                        <span className="text-sm font-semibold uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-white font-semibold">{feature.name}</h4>
                          <p className="text-slate-500 text-sm">{feature.description}</p>
                        </div>
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