import React, { useRef, useState } from 'react';
import { INNOVATION_PROJECTS } from '../constants';
import { Play, Info, ChevronLeft, ChevronRight, FlaskConical, ExternalLink } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // We'll use the first item as the "Featured" Hero item (Netflix style)
  const featuredProject = INNOVATION_PROJECTS[0];
  const carouselProjects = INNOVATION_PROJECTS.slice(1);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -500 : 500;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-aiwis-dark pb-20 pt-10 overflow-hidden relative">
        
        {/* SECTION HEADER */}
        <div className="container mx-auto px-6 mb-8 flex items-end gap-4">
             <div>
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <FlaskConical className="w-5 h-5" />
                    <span className="text-sm font-display font-bold tracking-widest uppercase">Research & Development</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">AIWIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">INNOVATION LABS</span></h2>
             </div>
        </div>

      {/* FEATURED HERO PROJECT (Netflix Banner Style) */}
      <div className="relative w-full h-[500px] md:h-[600px] mb-12 group">
        <div className="absolute inset-0">
          <img 
            src={featuredProject.image} 
            alt={featuredProject.title} 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-aiwis-dark via-aiwis-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-aiwis-dark via-aiwis-dark/80 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 flex flex-col justify-end h-full max-w-4xl">
           <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-bold rounded mb-4 w-fit backdrop-blur-md">
              {featuredProject.badge?.toUpperCase()}
           </span>
           <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-none tracking-tight">
             {featuredProject.title}
           </h3>
           <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl font-sans">
             {featuredProject.description}
           </p>
           
           <div className="flex gap-4">
              <a 
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-slate-200 transition-colors flex items-center gap-2 text-lg"
              >
                <Play className="w-5 h-5 fill-black" />
                Ejecutar Prototipo
              </a>
              <button className="px-8 py-3 bg-slate-600/60 text-white font-bold rounded backdrop-blur-md hover:bg-slate-500/60 transition-colors flex items-center gap-2 text-lg">
                <Info className="w-5 h-5" />
                Más Información
              </button>
           </div>
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <div className="relative group/slider px-4 md:px-12">
        <h4 className="text-white font-display font-semibold text-xl mb-4 pl-2">Explorar Universo de Prototipos</h4>
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/80 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/80 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-8 px-2"
          style={{ scrollPaddingLeft: '2rem' }}
        >
          {carouselProjects.map((project) => (
            <div 
              key={project.id}
              className="flex-none w-[280px] md:w-[320px] relative transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer group/card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="aspect-video rounded-md overflow-hidden bg-slate-800 relative shadow-lg group-hover/card:shadow-cyan-500/20">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:brightness-110"
                    />
                    
                    {/* Badge */}
                    {project.badge && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
                            {project.badge}
                        </div>
                    )}

                    {/* Content Overlay (Appears on Hover usually, or static for simplicity in mobile) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                             <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <Play className="w-4 h-4 fill-black text-black" />
                                </div>
                                <span className="text-white font-display font-bold uppercase text-xs tracking-wider border border-white/30 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                             </div>
                             <h4 className="text-white font-bold font-display text-lg leading-tight">{project.title}</h4>
                             <p className="text-slate-300 text-xs mt-1 line-clamp-2 font-sans">{project.description}</p>
                        </div>
                    </div>
                  </div>
                  
                  {/* Title below card (visible when not hovered, hides when hovered to reduce clutter if expanded, or stays) */}
                  <div className="mt-2 group-hover/card:opacity-50 transition-opacity px-1">
                      <h5 className="text-slate-200 font-semibold text-sm">{project.title}</h5>
                  </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;