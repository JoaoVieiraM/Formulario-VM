
import React, { useState, useMemo } from 'react';
import { FormSection } from './components/FormSection';
import { CircuitDecoration } from './components/CircuitDecoration';
import { FormData } from './types';

const App: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [processLogs, setProcessLogs] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    brandName: '',
    userEmail: '',
    brandSoul: '',
    realWhy: '',
    targetAudience: '',
    competitiveTerritory: '',
    services: {
      branding: false,
      webDev: false,
      socialMedia: false,
    },
    currentMaturity: '',
    techPainPoints: '',
    visualReferences: '',
    voiceTone: '',
    successGoal: '',
  });

  const protocolNumber = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const random = Math.floor(1000 + Math.random() * 9000);
    return `VM-${year}${random}-X`;
  }, [isSubmitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: keyof FormData['services']) => {
    setFormData(prev => ({
      ...prev,
      services: { ...prev.services, [service]: !prev.services[service] }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setProcessLogs([]);
    
    const logs = [
      "> HANDSHAKE: ESTABELECENDO CONEXÃO COM CENTRAL VM...",
      "> ANALISANDO DNA DA MARCA: " + formData.brandName.toUpperCase(),
      "> CRIPTOGRAFANDO DADOS SENSÍVEIS (AES-GCM)...",
      "> MAPEANDO ECOSSISTEMA E TERRITÓRIO COMPETITIVO...",
      "> SINCRONIZANDO MATRIZ DE ALQUIMIA DIGITAL...",
      "> TRANSMISSÃO COMPLETA. STATUS: 200 OK"
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProcessLogs(prev => [...prev, logs[i]]);
    }

    try {
      const response = await fetch('https://formspree.io/f/xykkzkkg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `[DIAGNÓSTICO] ${formData.brandName}`,
          _protocol: protocolNumber,
          services_summary: Object.entries(formData.services)
            .filter(([_, active]) => active)
            .map(([name]) => name)
            .join(' | ')
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Falha no servidor");
      }
    } catch (error) {
      alert("ERRO DE TRANSMISSÃO: Verifique sua conexão com o ecossistema.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black">
        <CircuitDecoration position="top-left" />
        <CircuitDecoration position="bottom-right" className="rotate-180" />
        
        <div className="glass-box max-w-2xl w-full p-12 border-[#00FF00]/40 text-center relative scanline-anim">
          <div className="mb-10 flex justify-center">
            <div className="w-20 h-20 rounded-full border border-[#00FF00] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              <svg className="w-10 h-10 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 text-white italic">
            Alquimia Iniciada
          </h1>
          <p className="font-mono text-[10px] text-[#00FF00] mb-10 uppercase tracking-[0.4em] opacity-70">
            // Protocolo Gerado com Sucesso
          </p>

          <div className="bg-black/60 p-8 rounded-lg border border-gray-800 text-left font-mono text-[11px] text-gray-400 mb-10 space-y-3 leading-relaxed">
            <p className="text-[#00FF00] mb-4 font-bold border-b border-gray-800 pb-2 flex justify-between">
              <span>RESUMO_DA_OPERACAO</span>
              <span>ID: {protocolNumber}</span>
            </p>
            <p><span className="text-gray-600">CLIENTE:</span> {formData.brandName}</p>
            <p><span className="text-gray-600">EMAIL:</span> {formData.userEmail}</p>
            <p><span className="text-gray-600">STATUS:</span> <span className="bg-[#00FF00]/10 text-[#00FF00] px-1">AGUARDANDO ANALISE TÉCNICA</span></p>
            <p className="mt-6 pt-4 border-t border-gray-900 text-[10px] italic">
              Nossos engenheiros entrarão em contato em até 48 horas úteis para apresentar o mapa de execução.
            </p>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="group font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#00FF00] transition-all flex items-center gap-2 mx-auto"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
            Reiniciar Protocolo
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 relative overflow-hidden">
      {isProcessing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6">
          <div className="glass-box max-w-lg w-full p-10 border-[#00FF00]/30 relative scanline-anim">
            <h2 className="font-mono text-[#00FF00] text-sm mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-ping" />
              CENTRAL_PROCESS_v1.0
            </h2>
            <div className="font-mono text-[10px] text-gray-400 space-y-3">
              {processLogs.map((log, i) => (
                <p key={i} className="animate-in fade-in slide-in-from-left-4 duration-500">
                  {log}
                </p>
              ))}
            </div>
            <div className="mt-10 h-1 bg-gray-900 overflow-hidden">
              <div className="h-full bg-[#00FF00] animate-[shimmer_2s_infinite] w-full shadow-[0_0_15px_#00FF00]" />
            </div>
          </div>
        </div>
      )}

      <CircuitDecoration position="top-left" />
      <CircuitDecoration position="top-right" className="rotate-90" />
      <CircuitDecoration position="bottom-left" className="-rotate-90" />
      <CircuitDecoration position="bottom-right" className="rotate-180" />

      <header className="mb-24 border-b border-gray-800 pb-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#00FF00] text-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                BUILD_2026.04
              </span>
              <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest border-l border-gray-800 pl-4">
                Status: Grid Online
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2 leading-none italic">
              VMsolutions
            </h1>
            <p className="text-[#00FF00] font-mono text-sm tracking-[0.5em] uppercase opacity-60">
              Code. Craft. Culture.
            </p>
          </div>
        </div>

        <div className="mt-16 glass-box p-8 border-l-2 border-[#00FF00]">
          <h3 className="text-[#00FF00] font-mono text-xs font-bold uppercase mb-3 tracking-widest">
            Imersão Diagnóstica
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-light">
            Mapeie o DNA do seu organismo digital. Cada resposta abaixo servirá como coordenada para nossa engenharia criativa.
          </p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="relative z-10">
        <FormSection number="01" title="Identidade do Organismo" subtitle="Arquitetura do Negócio">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Nome da Marca</label>
              <input required type="text" name="brandName" value={formData.brandName} onChange={handleInputChange} className="w-full p-5 text-white placeholder-gray-800" placeholder="Ex: CyberDyne Systems" />
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">E-mail Corporativo</label>
              <input required type="email" name="userEmail" value={formData.userEmail} onChange={handleInputChange} className="w-full p-5 text-white placeholder-gray-800" placeholder="contato@empresa.com" />
            </div>
          </div>
          <div className="mt-8 group">
            <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">A Alma do Negócio</label>
            <textarea required name="brandSoul" value={formData.brandSoul} onChange={handleInputChange} className="w-full p-5 h-40 text-white" placeholder="Descreva a atmosfera e o propósito..." />
          </div>
          <div className="mt-8 group">
            <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">O Impacto Desejado</label>
            <textarea required name="realWhy" value={formData.realWhy} onChange={handleInputChange} className="w-full p-5 h-24 text-white" placeholder="Que transformação você busca?" />
          </div>
        </FormSection>

        <FormSection number="02" title="Ecossistema e Público" subtitle="Mapeamento de Território">
          <div className="space-y-8">
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Público-Alvo</label>
              <textarea required name="targetAudience" value={formData.targetAudience} onChange={handleInputChange} className="w-full p-5 h-24 text-white" placeholder="Quem são? O que valorizam?" />
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Vizinhos de Mercado</label>
              <textarea required name="competitiveTerritory" value={formData.competitiveTerritory} onChange={handleInputChange} className="w-full p-5 h-24 text-white" placeholder="Principais competidores e seu diferencial..." />
            </div>
          </div>
        </FormSection>

        <FormSection number="03" title="Engenharia de Solução" subtitle="Especificações de Backend">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { id: 'branding' as const, label: 'Branding', desc: 'DNA Visual' },
                { id: 'webDev' as const, label: 'Web Dev', desc: 'Alta Performance' },
                { id: 'socialMedia' as const, label: 'Social', desc: 'Engajamento' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleCheckboxChange(s.id)}
                  className={`p-8 text-left border transition-all duration-500 relative overflow-hidden group ${
                    formData.services[s.id] ? 'border-[#00FF00] bg-[#00FF00]/5 shadow-[0_0_20px_rgba(0,255,0,0.1)]' : 'border-gray-900 bg-black/40'
                  }`}
                >
                  {formData.services[s.id] && <div className="absolute top-0 right-0 w-16 h-16 bg-[#00FF00]/10 rotate-45 translate-x-8 -translate-y-8" />}
                  <h4 className={`text-xl font-bold mb-1 ${formData.services[s.id] ? 'text-white' : 'text-gray-500'}`}>{s.label}</h4>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">{s.desc}</span>
                  <div className={`mt-4 font-mono text-[10px] ${formData.services[s.id] ? 'text-[#00FF00]' : 'text-gray-700'}`}>
                    {formData.services[s.id] ? '[✓ ATIVADO]' : '[+ SELECIONAR]'}
                  </div>
                </button>
              ))}
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Infraestrutura Atual</label>
              <input required type="text" name="currentMaturity" value={formData.currentMaturity} onChange={handleInputChange} className="w-full p-5 text-white" placeholder="Links de redes e site atual..." />
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Fricções Técnicas</label>
              <textarea required name="techPainPoints" value={formData.techPainPoints} onChange={handleInputChange} className="w-full p-5 h-24 text-white" placeholder="O que te impede de escalar hoje?" />
            </div>
          </div>
        </FormSection>

        <FormSection number="04" title="Alquimia Criativa" subtitle="Estética e Tom de Voz">
          <div className="space-y-8">
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Referências de Benchmark</label>
              <input required type="text" name="visualReferences" value={formData.visualReferences} onChange={handleInputChange} className="w-full p-5 text-white" placeholder="3 marcas que te inspiram" />
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Personalidade da Marca</label>
              <input required type="text" name="voiceTone" value={formData.voiceTone} onChange={handleInputChange} className="w-full p-5 text-white" placeholder="Ex: Especialista, Descontraída, etc..." />
            </div>
            <div className="group">
              <label className="block font-mono text-[10px] text-gray-500 uppercase mb-3 group-focus-within:text-[#00FF00] transition-colors">Visão de Sucesso (6 Meses)</label>
              <textarea required name="successGoal" value={formData.successGoal} onChange={handleInputChange} className="w-full p-5 h-24 text-white" placeholder="Qual o KPI de felicidade para este projeto?" />
            </div>
          </div>
        </FormSection>

        <div className="mt-20 flex flex-col items-center md:items-end pb-32">
          <p className="font-mono text-[9px] text-gray-600 uppercase mb-6 tracking-widest italic">
            [Aviso: Os dados serão transmitidos sob protocolo de segurança VM]
          </p>
          <button 
            type="submit"
            className="group relative px-16 py-6 bg-[#00FF00] text-black font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:shadow-[0_0_50px_rgba(0,255,0,0.4)]"
          >
            Transmitir Diagnóstico
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </form>

      <footer className="fixed bottom-0 left-0 w-full py-5 bg-black/90 backdrop-blur-md border-t border-gray-900 z-50">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span>VMsolutions // Engineering House</span>
          </div>
          <span className="hidden md:block opacity-30">© 2026 Code. Craft. Culture.</span>
          <span className="text-[#00FF00]/50 font-bold">Aclimação_V.Mariana_Global</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
