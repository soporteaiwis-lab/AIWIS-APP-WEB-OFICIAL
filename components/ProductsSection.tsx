import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Plataformas <span className="text-blue-500">AIWIS</span></h2>
                <p className="text-slate-400 text-lg max-w-xl">
                    Tecnología propietaria diseñada para escalar operaciones en Música, Educación y Desarrollo Corporativo.
                </p>
            </div>
            <button className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-blue-900 transition-all font-medium">
                Ver todo el catálogo
            </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{product.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                        {product.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-800 pt-4 mb-6">
                        {product.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                <Star className="w-3 h-3 text-yellow-500" />
                                <span>{feat.name}</span>
                            </div>
                        ))}
                    </div>

                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-white transition-colors">
                        Explorar Plataforma <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;