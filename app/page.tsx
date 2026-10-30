'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface ProjectCard {
  slug: string;
  subtitulo: string;
  titleLine1: string;
  titleLine2?: string;
  tag: string;
  resumo: string;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const projects: ProjectCard[] = [
  {
    slug: "faber-castell",
    subtitulo: "ATIVAÇÃO COLABORATIVA",
    titleLine1: "FABER-CASTELL",
    tag: "Live Marketing",
    resumo: "A ativação Desenho Épico, criada para a estreia da Faber-Castell na CCXP, gerou experimentação de produto, brand awareness, vendas, virou ação de endomarketing, case de PR e entrou para o Guinness Book como “O Maior Desenho Colaborativo do Mundo” com 11,5 km e mais de 4 mil participantes."
  },
  {
    slug: "munich-re",
    subtitulo: "ATIVAÇÃO COM IA",
    titleLine1: "MUNICH RE",
    tag: "Live Marketing",
    resumo: "Planejamento para a participação da resseguradora global alemã Munich Re na FIDES Rio, o maior encontro de líderes do mercado de seguros da América Latina. O projeto engloba: diagnóstico de marca, conceito criativo, jornada 360º, ativação phygital com IA para geração de leads e curadoria de experiências C-Level."
  },
  {
    slug: "grupo-malwee",
    subtitulo: "CONVENÇÃO DE VENDAS",
    titleLine1: "GRUPO MALWEE",
    tag: "Live Marketing",
    resumo: "Em vez de um evento tradicional, desenvolvemos uma experiência imersiva desde o início, baseada nos pilares do Plano ESG 2030 do Grupo Malwee, incluindo cenografia sustentável, ativações com IA, materiais ecológicos e a festa de encerramento com atrações que promovem a consciencialização ambiental."
  },
  {
    slug: "greenpeace-brasil",
    subtitulo: "DATA STRATEGY",
    titleLine1: "GREENPEACE BRASIL",
    tag: "Social Media",
    resumo: "Estudo completo de inteligência de dados e social listening para o Greenpeace Brasil. Apresenta auditoria de conteúdo, vocação de canais (Facebook, Instagram e Twitter), análise de saúde de marca e a jornada estratégica para captação de leads e doadores."
  },
  {
    slug: "linea",
    subtitulo: "COMUNICAÇÃO OMNICHANNEL",
    titleLine1: "LINEA ALIMENTOS",
    tag: "Trade Marketing",
    resumo: "Planejamento de trade marketing para a campanha de Páscoa da Linea Alimentos. Detalha a análise de comportamento de compra, drivers de consumo, jornada omnichannel, campanhas com influenciadores e inovações no PDV e e-commerce."
  },
  {
    slug: "boehringer-ingelheim",
    subtitulo: "EVENTO HÍBRIDO",
    titleLine1: "BOEHRINGER INGELHEIM (BI BRASIL)",
    tag: "Live Marketing",
    resumo: "Planejamento para o Leadership Meeting da farmacêutica Boehringer Ingelheim, marcando a retomada gradual aos eventos físicos em formato híbrido e 100% Carbon Free. Apresenta criação do conceito, incorporação de práticas ESG durante todo os evento, transformação do formato de um clássico programa de auditório de TV em uma experiência phygital por meio de uma plataforma que garantiu a interação entre os públicos on e off."
  },
  {
    slug: "whirlpool",
    subtitulo: "SHOPPER EXPERIENCE",
    titleLine1: "BRASTEMP & CONSUL",
    tag: "Trade Marketing",
    resumo: "A estratégia para o lançamento de fogões da Brastemp e Consul partiu de insights comportamentais para traduzir features de produto em benefícios emocionais claros e desejáveis. Abrange o cenário de categoria, mapeamento profundo do comportamento do shopper e da jornada de compra, além da criação de materiais inovadores para o ponto de venda transformando a experiência na loja física."
  },
  {
    slug: "elmex",
    subtitulo: "EVENTO DE LANÇAMENTO",
    titleLine1: "ELMEX (COLGATE-PALMOLIVE)",
    tag: "Live Marketing",
    resumo: "A estratégia partiu da premissa de traduzir a sofisticação, tradição e alta performance científica de uma marca pioneira para o mercado brasileiro. Abrangeu a ocupação imersiva do Museu da Casa Brasileira com projeção de vídeo mapeado na fachada, interações culturais suíças e ativações tecnológicas."
  },
  {
    slug: "claro",
    subtitulo: "ESTRATÉGIA DE POSITIVAÇÃO",
    titleLine1: "CLARO",
    tag: "Trade Marketing",
    resumo: "Apresentação estratégica de positivação e trade marketing para o ecossistema de lojas da Claro. Detalha o mapeamento da jornada do consumidor, a segmentação de pontos de contato e o redesenho de materiais de PDV segundo os objetivos de comunicação, combatendo a poluição visual e garantindo que a proposta de valor e os benefícios de ser cliente Claro se destacassem frente à concorrência."
  },
  {
    slug: "elma-chips",
    subtitulo: "PROMOPACK",
    titleLine1: "ELMA CHIPS (PEPSICO)",
    tag: "Trade Marketing",
    resumo: "Apresentação estratégica da campanha de São João da Elma Chips para a região Nordeste. Detalha o mapeamento de tendências de consumo, a análise do contexto regional e o design autoral de um brinde modular inovador: o Bowl Infinito."
  },
  {
    slug: "smirnoff-ice",
    subtitulo: "CAMPANHA DE INCENTIVO",
    titleLine1: "SMIRNOFF ICE (DIAGEO)",
    tag: "Live Marketing",
    resumo: "Partindo do contexto da Copa do Mundo na Rússia, transformamos uma campanha de incentivo em uma jornada inesquecível para a força de vendas. Abrangeu o engajamento de 400 participantes, criação de conceito, régua de relacionamento multicanal de longo prazo, gamificação com realidade virtual até a experiência internacional dos ganhadores."
  }
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Olá! Sou o assistente virtual da Miroslava Godoy. Como posso ajudar você hoje? Pergunte sobre sua experiência sênior, cases (Faber-Castell, Diageo, Pepsico, Munich Re) ou inovação com IA.'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-rolagem para a última mensagem do chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "22db70f3-8dd1-44c8-8423-0ab4b16e0d5a");
    formData.append("subject", "Novo Contato de Recrutador - Portfólio Miroslava");
    formData.append("to_email", "miroslava@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('Mensagem enviada com sucesso! Recebi seus dados no e-mail.');
      } else {
        setFormStatus('Houve um erro ao enviar. Tente novamente mais tarde.');
      }
    } catch {
      setFormStatus('Houve um erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const textToSend = customText || inputMessage;
    if (!textToSend.trim()) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInputMessage('');

    // Lógica inteligente do Chatbot integrado simulando o cérebro do agente
    setTimeout(() => {
      const query = textToSend.toLowerCase();
      let botReply = "Essa é uma excelente pergunta! A Miroslava possui mais de 15 anos de experiência como Planner e Estrategista Sênior. Recomendo explorar os cases completos no portfólio acima ou entrar em contato direto pelo e-mail miroslava@gmail.com.";

      if (query.includes('experiência') || query.includes('perfil') || query.includes('anos') || query.includes('quem é') || query.includes('trajetória')) {
        botReply = "A Miroslava é Estrategista Sênior com mais de 15 anos de experiência combinando planejamento de comunicação, comportamento do consumidor, análise de dados e visão de negócios. Com base original em Direção de Arte, ela conecta a visão analítica à execução criativa, unindo Live Marketing, Trade Marketing, Omnichannel, Social Media e Inovação com Inteligência Artificial Aplicada.";
      } else if (query.includes('faber') || query.includes('ccxp') || query.includes('guinness') || query.includes('desenho épico')) {
        botReply = "No case da Faber-Castell (CCXP), a Miroslava criou o 'Desenho Épico' para a estreia da marca no evento. A ação entrou para o Guinness Book com 11,5 km e mais de 4 mil participantes (somando a feira e a fábrica em São Carlos), gerando enorme brand awareness, conversão de vendas, PR e endomarketing.";
      } else if (query.includes('ia') || query.includes('inteligência artificial') || query.includes('munich') || query.includes('fides')) {
        botReply = "A Miroslava é especialista em IA Aplicada. No case da Munich Re (FIDES Rio), ela idealizou um painel interativo (Interactive Wall + DALL-E) combinando Data Analytics, Green Tech e cocriação de futuros sustentáveis para captação de leads qualificados C-Level.";
      } else if (query.includes('diageo') || query.includes('smirnoff') || query.includes('rússia') || query.includes('copa')) {
        botReply = "Para a Smirnoff Ice (Diageo), a Miroslava liderou a Campanha de Incentivo voltada à força de vendas usando a Copa da Rússia como mote. O projeto incluiu régua omnichannel, evento imersivo em atmosfera de estádio, gamificação em realidade virtual e vivência internacional dos ganhadores.";
      } else if (query.includes('pepsico') || query.includes('elma chips') || query.includes('são joão') || query.includes('bowl')) {
        botReply = "Para a Elma Chips (PepsiCo), na campanha de São João no Nordeste, ela criou o 'Bowl Infinito': um brinde modular inovador em polipropileno (PP) com uma única faca de corte, unindo baixo custo de produção (até R$ 4) e altíssimo valor percebido pelo shopper.";
      } else if (query.includes('malwee') || query.includes('esg')) {
        botReply = "Para o Grupo Malwee, ela desenvolveu uma convenção de vendas imersiva ancorada nos pilares do Plano ESG 2030, contando com cenografia sustentável, ativações com IA e materiais ecológicos.";
      } else if (query.includes('greenpeace')) {
        botReply = "Para o Greenpeace Brasil, conduziu um estudo completo de inteligência de dados e social listening, analisando vocação de canais e desenhando a jornada estratégica para captação de leads e doadores.";
      } else if (query.includes('contato') || query.includes('email') || query.includes('falar') || query.includes('recrutador') || query.includes('telefone') || query.includes('whatsapp')) {
        botReply = "Você pode falar diretamente com a Miroslava através dos canais oficiais:\n- E-mail: miroslava@gmail.com\n- WhatsApp: 11 97416-9770\n- LinkedIn: linkedin.com/in/mirosgodoy\nOu preenchendo o formulário de contato ao final da página!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#191919] font-sans relative">
      {/* Cabeçalho Principal / Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-xl md:text-3xl font-extrabold text-[#0A66C2] tracking-tight mb-4">
          MIROSLAVA GODOY
        </h1>
        
        <p className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide uppercase mb-10 max-w-3xl mx-auto leading-relaxed">
          Planner & Estrategista Sênior | Consultoria de Planejamento Estratégico de Comunicação | Brand Experience · Live Marketing · Shopper · Omnichannel · Social Media | Inovação & IA Aplicada
        </p>

        {/* Seção Sobre */}
        <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-xs md:text-sm leading-relaxed">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            SOBRE
          </h2>
          
          <p className="text-gray-700 leading-relaxed text-justify md:text-center">
            Estrategista Sênior com mais de 15 anos de experiência combinando planejamento de comunicação, comportamento do consumidor, análise de dados e visão de negócios. Minha base original na Direção de Arte me dá um repertório para conectar o olhar analítico e a estratégia de marca à realidade criativa e de execução. Utilizo pesquisa de dados, visão integrada da jornada do cliente, tendências culturais e comportamentais para definir os direcionamentos de comunicação para grandes marcas. Recém-especialista em Inteligência Artificial Aplicada, utilizo a tecnologia para potencializar análises, insights e automatizar processos no dia a dia.
          </p>
        </div>
      </header>

      {/* Lista de Cases Profissionais */}
      <section className="max-w-4xl mx-auto px-6 pb-20 pt-8">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
          Cases de Sucesso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projetos/${project.slug}`}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#0A66C2] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {project.subtitulo}
                  </span>
                  <span className="text-[10px] bg-blue-50 text-[#0A66C2] font-semibold px-2.5 py-0.5 rounded-full">
                    {project.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-extrabold text-[#0A66C2] group-hover:underline mb-2 tracking-tight">
                  <span>{project.titleLine1}</span>
                  {project.titleLine2 && <span className="block">{project.titleLine2}</span>}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.resumo}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-[#0A66C2] group-hover:translate-x-1 transition-transform">
                Ver Case Completo &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seção de Contato / Captação de Recrutadores */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0A66C2] mb-2">
              Contato Profissional
            </h2>
            <p className="text-sm text-gray-600">
              Preencha o formulário abaixo para entrar em contato ou solicitar mais informações.
            </p>
          </div>

          {formStatus ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center text-sm font-semibold">
              {formStatus}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Seu Nome / Empresa
                </label>
                <input 
                  type="text" 
                  name="nome"
                  required 
                  placeholder="Ex: Ana Souza (Agência XYZ)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#0A66C2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  E-mail
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="seu.email@empresa.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#0A66C2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Mensagem
                </label>
                <textarea 
                  name="mensagem"
                  rows={4} 
                  required 
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#0A66C2]"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A66C2] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#004182] transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="max-w-4xl mx-auto px-6 text-center py-10 border-t border-gray-200 text-gray-500 text-sm">
        <p>Miroslava Godoy · Planner & Estrategista Sênior © 2026</p>
      </footer>

      {/* WIDGET DE CHAT INTEGRADO NATIVO */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {isChatOpen && (
          <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
            {/* Cabeçalho do Chat */}
            <div className="bg-[#0A66C2] text-white p-4 flex justify-between items-center shadow-sm">
              <div>
                <h3 className="font-bold text-sm">Assistente IA · Miroslava Godoy</h3>
                <p className="text-[11px] text-blue-100">Planner & Estrategista Sênior</p>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors text-xs font-bold w-7 h-7 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Caixa de Mensagens */}
            <div className="p-4 bg-gray-50 flex-1 overflow-y-auto space-y-3 text-xs md:text-sm">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user' 
                        ? 'bg-[#0A66C2] text-white rounded-br-none shadow-xs' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Atalhos Rápidos */}
            <div className="p-2 bg-gray-100 border-t border-gray-200 flex gap-1.5 overflow-x-auto text-[10px]">
              <button 
                onClick={() => handleSendMessage(undefined, "Qual sua experiência?")}
                className="bg-white px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-[#0A66C2]"
              >
                💼 Experiência
              </button>
              <button 
                onClick={() => handleSendMessage(undefined, "Fale sobre a Faber-Castell")}
                className="bg-white px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-[#0A66C2]"
              >
                🎨 Faber-Castell
              </button>
              <button 
                onClick={() => handleSendMessage(undefined, "Projetos com IA")}
                className="bg-white px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-[#0A66C2]"
              >
                🤖 IA & Munich Re
              </button>
              <button 
                onClick={() => handleSendMessage(undefined, "Como entrar em contato?")}
                className="bg-white px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-[#0A66C2]"
              >
                ✉️ Contato
              </button>
            </div>

            {/* Input de Envio de Mensagem */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2">
              <input 
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-[#0A66C2]"
              />
              <button 
                type="submit"
                className="bg-[#0A66C2] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#004182] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        )}

        {/* Botão Flutuante do Chat */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#0A66C2] text-white p-4 rounded-full shadow-lg hover:bg-[#004182] transition-all hover:scale-105 flex items-center justify-center group relative"
          aria-label="Abrir assistente virtual"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      </div>
    </main>
  );
}