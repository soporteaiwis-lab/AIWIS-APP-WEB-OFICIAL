import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsultingSection from './components/ConsultingSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-aiwis-dark text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <ConsultingSection />
        <ProductsSection />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;