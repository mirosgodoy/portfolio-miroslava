'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCard {
  slug: string;
  subtitulo: string;
  titleLine1: string;
  titleLine2?: string;
  tag: string;
  resumo: string;
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

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#191919] font-sans relative">
      {/* Cabeçalho / Banner do Topo */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-12 text-center">
        {/* Banner com proporção exata 1024x440 */}
        <div className="w-full relative mb-8 rounded-2xl overflow-hidden shadow-sm border border-gray-200 aspect-[1024/440]">
          <Image 
            src="/banner.png" 
            alt="Banner Portfólio Miroslava Godoy"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Subtítulo / Proposta de Valor Atualizado */}
        <p className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide uppercase mb-10 max-w-3xl mx-auto leading-relaxed">
          Consultoria de Planejamento de Comunicação | Brand Experience · Live Marketing · Shopper · Omnichannel · Social Media | Inovação & IA Aplicada
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
      <section className="max-w-4xl mx-auto px-6 pb-8 pt-8">
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

      {/* LINK PARA O NOTEBOOKLM LOGO ABAIXO DOS CASES */}
      <section className="max-w-4xl mx-auto px-6 pb-16 pt-4">
        <div className="bg-gradient-to-r from-blue-900 to-[#0A66C2] text-white p-8 md:p-10 rounded-3xl shadow-xl text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <span className="bg-blue-500/30 text-blue-100 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-blue-400/30 inline-block mb-4">
            🤖 Inteligência Artificial Interativa
          </span>
          
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
            Quer explorar os meus cases a fundo?
          </h3>
          
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Desenvolvi um assistente interativo exclusivo com inteligência artificial para que recrutadores e gestores possam mergulhar nos detalhes dos meus projetos, estratégias e resultados.
          </p>

          <a 
            href="https://notebook.google.com/notebook/577ce4a7-71d1-4766-9ed2-319c83aff4ee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0A66C2] font-bold px-8 py-4 rounded-2xl text-sm md:text-base hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
          >
            <span>Interagir com o Portfólio IA 🤖</span>
            <span>&rarr;</span>
          </a>
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
    </main>
  );
}