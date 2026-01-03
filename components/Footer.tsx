import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Globe, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white mb-2">AIWIS</h2>
            <p className="text-slate-500 text-sm max-w-xs">
              {COMPANY_INFO.philosophy}
            </p>
          </div>

          {/* Social / Links */}
          <div className="flex gap-6">
             <a href={COMPANY_INFO.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">WhatsApp</a>
             <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-400 hover:text-blue-400 transition-colors">Email</a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} AIWIS. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {COMPANY_INFO.websites.map((site) => (
                <a 
                  key={site} 
                  href={`https://${site}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-slate-700 hover:text-slate-500 transition-colors"
                >
                  {site}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;