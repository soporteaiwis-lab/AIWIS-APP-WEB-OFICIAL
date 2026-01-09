import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsultingSection from './components/ConsultingSection';
import ProductsSection from './components/ProductsSection';
import ClientSolutionsSection from './components/ClientSolutionsSection';
import ClientsSection from './components/ClientsSection';
import PortfolioSection from './components/PortfolioSection';
import PhilosophySection from './components/PhilosophySection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-aiwis-dark text-slate-200 selection:bg-blue-500/30 scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <ClientsSection /> {/* Logos de confianza */}
        <PhilosophySection />
        
        {/* Bloque 1: Servicios */}
        <ConsultingSection />
        
        {/* Bloque 2: Productos Propios */}
        <ProductsSection />
        
        {/* Bloque 3: Acceso Clientes (B2B) */}
        <ClientSolutionsSection />
        
        {/* Bloque 4: I+D (Netflix Style) */}
        <PortfolioSection />
        
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;