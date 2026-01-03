import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Globe, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">AIWIS</h2>
            <p className="text-slate-500 mb-6 max-w-sm">
              {COMPANY_INFO.philosophy}
            </p>
            <div className="flex gap-4">
              {COMPANY_INFO.websites.map((site) => (
                <a 
                  key={site} 
                  href={`https://${site}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {site}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#consultoria" className="text-slate-400 hover:text-white transition-colors">Consultoría</a></li>
              <li><a href="#soluciones" className="text-slate-400 hover:text-white transition-colors">Soluciones</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-slate-500 mt-0.5" />
                <span>Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-slate-500" />
                <span>contacto@aiwis.cl</span>
              </li>
              {/* Simpledata website removed from here */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} AIWIS. Todos los derechos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Architectos de la Evolución Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;