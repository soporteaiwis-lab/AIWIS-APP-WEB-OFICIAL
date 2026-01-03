import React, { useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Play, Plus, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-aiwis-dark overflow-hidden group/section">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-display font-bold text-white mb-2">Universo AIWIS</h2>
        <p className="text-slate-400 text-sm">Explora nuestra cartelera de innovación en constante expansión.</p>
      </div>

      {/* Slider Container with Navigation Buttons */}
      <div className="relative w-full">
        
        {/* Left Navigation Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 w-16 bg-gradient-to-r from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 focus:outline-none"
        >
          <ChevronLeft className="w-10 h-10 text-white hover:scale-125 transition-transform drop-shadow-lg" />
        </button>

        {/* Scrollable Area */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PORTFOLIO_ITEMS.map((item) => {
            const CardContent = (
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] z-10 group-hover:z-20 bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors">
                      {item.url ? <ExternalLink className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    {!item.url && (
                        <button className="w-8 h-8 rounded-full border border-slate-400 text-slate-200 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                        </button>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  
                  <div className="flex items-center gap-3 text-xs font-medium">
                    {item.isNew && (
                      <span className="text-green-400 font-bold uppercase tracking-wider">Nuevo</span>
                    )}
                    <span className="text-slate-300">{item.category}</span>
                  </div>
                </div>
              </div>
            );

            return (
              <div 
                key={item.id} 
                className="flex-none w-[280px] md:w-[350px] snap-center group relative cursor-pointer"
              >
                {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {CardContent}
                    </a>
                ) : (
                    CardContent
                )}
              </div>
            );
          })}
          
          {/* Add Placeholder Card */}
          <div className="flex-none w-[280px] md:w-[350px] snap-center flex items-center justify-center border-2 border-dashed border-slate-800 rounded-lg hover:border-slate-600 transition-colors cursor-pointer group bg-slate-900/30">
            <div className="text-center">
              <Plus className="w-12 h-12 text-slate-700 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
              <p className="text-slate-600 font-medium group-hover:text-slate-400 transition-colors">Cargando futuro...</p>
            </div>
          </div>
        </div>

        {/* Right Navigation Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 w-16 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 focus:outline-none"
        >
          <ChevronRight className="w-10 h-10 text-white hover:scale-125 transition-transform drop-shadow-lg" />
        </button>
      </div>
      
      {/* Hide Scrollbar Style for Webkit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;