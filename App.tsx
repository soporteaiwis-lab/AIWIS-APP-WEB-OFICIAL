import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsultingSection from './components/ConsultingSection';
import ProductsSection from './components/ProductsSection';
import ClientSolutionsSection from './components/ClientSolutionsSection';
import PortfolioSection from './components/PortfolioSection';
import PhilosophySection from './components/PhilosophySection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-[#172554] text-slate-200 selection:bg-rose-500/30 scroll-smooth font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Bloque 1: Soluciones/Productos (Destacado) */}
        <ProductsSection />

        {/* Bloque 2: Metodología */}
        <ConsultingSection />
        
        {/* Bloque 3: Acceso Clientes (B2B) */}
        <ClientSolutionsSection />
        
        {/* Bloque 4: I+D (Netflix Style) */}
        <PortfolioSection />
        
        <PhilosophySection />
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;