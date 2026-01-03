import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToAIWIS } from '../services/geminiService';
import { Message } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de AIWIS. ¿En qué puedo ayudarte hoy sobre nuestra consultoría o productos?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await sendMessageToAIWIS(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110 group"
        >
          <Bot className="w-8 h-8" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Habla con AIWIS
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-[90vw] md:w-96 flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <Bot className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">AIWIS Assistant</h3>
                <p className="text-slate-400 text-xs">Impulsado por Gemini 3</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                  <span className="text-xs text-slate-400">Pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-800 bg-slate-950 rounded-b-2xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pregunta sobre nuestros servicios..."
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default AiAssistant;