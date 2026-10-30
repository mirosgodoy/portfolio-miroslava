import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface EmbedItem {
  titulo: string;
  subtitulo?: string;
  iframeHtml: string;
}

interface Project {
  subtitulo: string;
  titleLine1: string;
  titleLine2?: string;
  tag: string;
  desafio: string;
  solucao: string;
  impactos: { titulo: string; desc: string }[];
  apresentacoes?: EmbedItem[];
  videos?: EmbedItem[];
  apresentacaoUrl?: string;
  midiaTexto?: string;
}

const projectsData: Record<string, Project> = {
  "faber-castell": {
    subtitulo: "LIVE EXPERIENCE | ATIVAÇÃO COLABORATIVA",
    titleLine1: "FABER-CASTELL",
    tag: "Live Marketing",
    desafio: "Estreia da Faber-Castell na CCXP posicionando a marca e a linha profissional Art & Graphic em um território inédito (público geek/adulto de 18 a 35 anos), tendo como objetivo gerar experimentação de produtos e conversão em vendas diretas em um estande de 63m².",
    solucao: "Partindo da tendência de consumo colaborativo, idealizei o 'Desenho Épico': o maior desenho colaborativo do mundo focado em bater um recorde oficial do Guinness World Records. A premissa provou que 'se a criatividade não tem limites, os materiais também não devem ter'.",
    impactos: [
      { titulo: "Métricas Principais", desc: "A ação mobilizou milhares de participantes, alcançou marcas expressivas de consumo de materiais no local e entrou oficialmente para o Guinness Book (com 11,5 km e 4 mil pessoas envolvidas), gerando retorno de mídia e conversão de vendas no local." },
      { titulo: "Desdobramentos", desc: "O projeto foi além do esperado, além de virar case de PR, também se tornou uma ação de endomarketing para a marca: foi finalizado em São Carlos (interior paulista), pelos colaboradores da Faber-Castell e também pela comunidade local." }
    ],
    apresentacoes: [
      {
        titulo: "A ESTRATÉGIA POR TRÁS DO RECORDE",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRoNBS_JH4Y83i9TcmcAfX0U91ced4uvlIyhhASQMO5DVLH3YxbhHKnZx_MrlzYAw/pubembed?start=false&amp;loop=true&amp;delayms=3000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      },
      {
        titulo: "APRESENTAÇÃO DOS RESULTADOS: DO BRIEFING AO GUINNESS",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUkLIQUG-S5uq1Lv8rPw1gb6VgnOoOZfOUsJLGgKoI60felgEJ52iPu4LQv1zno7_ywdA18Vzo5dpS/embed?start=false&amp;loop=true&amp;delayms=3000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ],
    videos: [
      {
        titulo: "COMIC CON EXPERIENCE (SÃO PAULO)",
        subtitulo: "DESAFIO LANÇADO NO MAIOR FESTIVAL GEEK DO MUNDO",
        iframeHtml: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/95r4X3BRCh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      },
      {
        titulo: "FÁBRICA DA FABER-CASTELL (SÃO CARLOS/SP)",
        subtitulo: "DESAFIO CONCLUÍDO NA MAIOR FÁBRICA DE ECO-LÁPIS DO MUNDO",
        iframeHtml: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/_Pah4qFL8zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  "munich-re": {
    subtitulo: "LIVE EXPERIENCE | ATIVAÇÃO COM IA",
    titleLine1: "MUNICH RE",
    tag: "Live Marketing",
    desafio: "Posicionar a Munich Re como a principal parceira de gerenciamento de riscos na América Latina perante um público altamente qualificado (Presidentes, C-Level e executivos do setor), tangibilizando seus 3 pilares de atuação (Clima, Mobilidade e Agricultura) em um projeto com budget de R$ 2 milhões.",
    solucao: "Diagnóstico de marca, conceito criativo, jornada 360º, ativação phygital com IA para geração de leads e curadoria de experiências C-Level.",
    impactos: [
      { titulo: "Inovação Aplicada (Interactive Wall + DALL-E)", desc: "Idealização de parede interativa unindo Data Analytics (gráficos interativos sobre clima, mobilidade e agro), soluções de Green Tech e cocriação de futuros sustentáveis no Rio de Janeiro usando Inteligência Artificial (DALL-E), convertendo a experiência em captação de leads e estratégia de pós-evento com envio de reports segmentados por interesse captado na ativação." },
      { titulo: "Resultado de Negócio", desc: "Captação de leads altamente qualificados traduzindo inovação tecnológica em valor real." }
    ],
    apresentacoes: [
      {
        titulo: "A ESTRATÉGIA COMPLETA DE BRAND EXPERIENCE",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQSyLqyHDINC3I6cL-sH_TbGfFq3SXK3gfsrf2iwB1sWyMjD2TGBUQIXrcrnXYP06w4jwIB4gHRz3gA/embed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ],
    videos: [
      {
        titulo: "ATIVAÇÃO: GERAÇÃO DE LEADS COM IA",
        iframeHtml: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/LXU5ee8DuGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  "grupo-malwee": {
    subtitulo: "LIVE EXPERIENCE | CONVENÇÃO DE VENDAS (ESG & INOVAÇÃO)",
    titleLine1: "GRUPO MALWEE",
    tag: "Live Marketing",
    desafio: "Transformar a convenção de vendas numa prova real do compromisso ESG da marca, elevando o representante a agente transformador.",
    solucao: "Criação da jornada imersiva 'Glocal XP' (pensar global, agir local) baseada nos pilares do Plano ESG 2030, integrando pré-evento, cenografia sustentável, ativações com IA e materiais ecológicos.",
    impactos: [
      { titulo: "Estratégia de Conexão", desc: "Alinhamento perfeito entre propósito de marca e engajamento de negócio." },
      { titulo: "Experiência 360º", desc: "Festa de encerramento e ativações focadas em conscientização ambiental." }
    ],
    apresentacoes: [
      {
        titulo: "ESTRATÉGIA, INOVAÇÃO E ATIVAÇÕES",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS6K83IJcumnlzmrZW8U7kzZfO1OOKetcOLa2ogKuk4macEF6ukmMUawbhB6uzdLgwnuL5hOaGaVK8K/embed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "greenpeace-brasil": {
    subtitulo: "DATA STRATEGY | CAPTAÇÃO DE LEADS E DOAÇÕES",
    titleLine1: "GREENPEACE BRASIL",
    tag: "Social Media",
    desafio: "Simplificar o discurso climático e transformar o engajamento digital em conversão real de novos doadores mensais.",
    solucao: "Estudo profundo de comportamento, social listening e benchmarking global para redefinir a vocação de cada plataforma social, criando o novo posicionamento: 'Cuidar do meio ambiente é da nossa natureza'.",
    impactos: [
      { titulo: "Jornadas Conectadas", desc: "Desenho de duas jornadas distintas: Jornada do Ciberativista (foco em petições/leads) e Jornada do Doador (foco em conversão financeira)." },
      { titulo: "Plano Tático", desc: "Entrega de diretrizes de conteúdo baseadas em novos targets identificados por dados." }
    ],
    apresentacoes: [
      {
        titulo: "O ECOSSISTEMA DE CONVERSÃO DIGITAL",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRMn_X-HKgLkw66kVq5Z3vby9pA0uZYx8pUaD-1FZ9x3jEEvHRzgSePHp1eTCtFxjXJdYXsEUwOFx9s/pubembed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "linea": {
    subtitulo: "SHOPPER EXPERIENCE | COMUNICAÇÃO OMNICHANNEL",
    titleLine1: "LINEA ALIMENTOS",
    tag: "Trade Marketing",
    desafio: "Aumentar o sell out de chocolates e ovos de Páscoa sem açúcar em redes de farmácias e supermercados, provando que saudabilidade não exclui o sabor e a indulgência.",
    solucao: "Jornada omnichannel mapeando drivers de compra (presentear, variedade, preço e conveniência) unindo digital, social e ativação no PDV.",
    impactos: [
      { titulo: "Digital e Redes Sociais", desc: "Campanhas de Awareness com a embaixadora Juliana Paes no Instagram e estratégias de Search baseadas em comparação de preço." },
      { titulo: "Conveniência e Conversão", desc: "Parcerias via Rappi, 'Clique e Retire' e Social Ads para delivery." },
      { titulo: "Ativação no PDV", desc: "Presença física com gôndolas interativas e cross-merchandising estratégico." }
    ],
    apresentacoes: [
      {
        titulo: "Indulgência Sem Culpa: A Estratégia de Páscoa Linea",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRbGPYZJ2wwsfUEO_7cAYUU880zDafVabj9H87vufZO_6khgfiOnKClIqevPhd4HdtpR9fKGViUzvqj/pubembed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "boehringer-ingelheim": {
    subtitulo: "LIVE EXPERIENCE | EVENTO HÍBRIDO",
    titleLine1: "BOEHRINGER INGELHEIM",
    titleLine2: "(BI BRASIL)",
    tag: "Live Marketing",
    desafio: "Garantir uma retomada presencial segura, engajadora e 100% carbon free no período pós-vacinação para 100 líderes sêniores.",
    solucao: 'Para tangibilizar o novo modelo de trabalho híbrido e celebrar o reencontro, criei o conceito "Back Together", transformando o formato de um clássico programa de auditório de TV (realizado nos estúdios da RedeTV!) em uma experiência phygital interativa.',
    impactos: [
      { titulo: "Integração Tecnológica", desc: "Conexão direta entre os estúdios da RedeTV! e uma plataforma virtual proprietária para revezamento dinâmico." },
      { titulo: "Sustentabilidade", desc: "Compromisso ESG com evento neutro em carbono." }
    ],
    apresentacoes: [
      {
        titulo: "ESTRATÉGIA, SUSTENTABILIDADE E RESULTADOS",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT7o6ojh-5bl_R37mQEZWa-spdsEE08e_a8BlEILjuU4xc8P_xmLK7BMfoQ3yaw1i9cEzRGt_YTO-NH/embed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ],
    videos: [
      {
        titulo: "EXPERIÊNCIA PHYGITAL: ENTRETENIMENTO + ENGAJAMENTO",
        iframeHtml: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/V8FKSfksh7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  "whirlpool": {
    subtitulo: "SHOPPER BEHAVIOR | LANÇAMENTO DE FOGÕES",
    titleLine1: "BRASTEMP & CONSUL",
    tag: "Trade Marketing",
    desafio: "Diferenciar marcas líderes numa categoria commodity saturada, mudando a decisão de compra de puramente racional/técnica para emocional.",
    solucao: "Mapeamento profundo da jornada de compra em campo para traduzir especificações técnicas em benefícios de estilo de vida, reposicionando o lançamento das linhas Brastemp Ative! e Consul Facilite.",
    impactos: [
      { titulo: "Inovação no PDV", desc: "MPDVs interativos para guiar a escolha de forma lúdica." }
    ],
    apresentacoes: [
      {
        titulo: "ESTRATÉGIA, PESQUISA E POSITIVAÇÃO",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTJtSLyxZK6RmLucASMX_GqbDZwGeYBJiJxjC69c_Rk6WTBDOQO0fsB-ooCJRM-I6YU4_2w5pbcZ0cl/pubembed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "elmex": {
    subtitulo: "LIVE EXPERIENCE | EVENTO DE LANÇAMENTO",
    titleLine1: "ELMEX",
    titleLine2: "(COLGATE-PALMOLIVE)",
    tag: "Live Marketing",
    desafio: "Introduzir no competitivo mercado brasileiro uma marca com 50 anos de liderança na Suíça, atingindo o público de maior influência (dentistas e clientes do canal farma).",
    solucao: "Experiência imersiva no Museu da Casa Brasileira unindo herança europeia e tecnologia de ponta para materializar o posicionamento premium da marca.",
    impactos: [
      { titulo: "Execução Tecnológica", desc: "Uso de vídeo mapping arquitetónico na fachada, exposição imersiva e ativações tecnológicas como holografias 3D na apresentação dos produtos." }
    ],
    apresentacoes: [
      {
        titulo: "A ESTRATÉGIA DE EXPERIÊNCIA",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQJnb23FRBjC3OjktM-9aFu7hqty9KvQptxOVmEHl1G6BskGK-5IsC9P_wc3soRQsOnw1TylyZE-sdQ/embed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ],
    videos: [
      {
        titulo: "DO CONCEITO À EXECUÇÃO",
        iframeHtml: '<iframe class="w-full h-full" src="https://www.youtube.com/embed/zhgUhYaPDFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  "claro": {
    subtitulo: "SHOPPER EXPERIENCE | ESTRATÉGIA DE POSITIVAÇÃO",
    titleLine1: "CLARO",
    tag: "Trade Marketing",
    desafio: "Destacar a proposta de valor da Claro combatendo a poluição visual e otimizando a navegação.",
    solucao: "Redesenho completo da arquitetura de Trade Marketing e materiais de ponto de venda (MPDV) com base no comportamento do shopper por zonas de distância e momentos de compra.",
    impactos: [
      { titulo: "Arquitetura Tática", desc: "Substituição de peças genéricas por materiais utilitários de navegação em canais próprios e indiretos (lojas, bancas de jornal, supermercados e farmácias)." }
    ],
    apresentacoes: [
      {
        titulo: "Estratégia de MPDV & Jornada do Shopper no Varejo",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT9hCzY0xfuBtJyP1fOJwhx85S9UD0anR-sEyPA6cREadrHdM1uFFhHOBGmLy0W5aZkO9VsQIrWPluU/pubembed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "elma-chips": {
    subtitulo: "PROMOPACK | PRODUCT INNOVATION",
    titleLine1: "ELMA CHIPS",
    titleLine2: "(PEPSICO)",
    tag: "Trade Marketing",
    desafio: "Campanha promocional (Promopack) para a Elma Chips com foco na sazonalidade de maior relevância para o mercado nordestino: o São João com um orçamento restrito a R$ 4 por brinde.",
    solucao: "Design estratégico de novo produto em vez de simples ação promocional: criação do 'Bowl Infinito', solução modular inovadora em polipropileno (PP) com uma única faca de corte, permitindo peças que funcionam sozinhas (mini-bowls) ou se encaixam infinitamente (travessa gigante), unindo baixo custo produtivo e altíssimo valor percebido pelo shopper.",
    impactos: [
      { titulo: "Mecânica Promocional de Alto Impacto", desc: "Estruturação da dinâmica de recompensa no varejo regional estimulando o aumento do tíquete médio e o sell-out." },
      { titulo: "Alinhamento Tático Regional", desc: "Integração completa entre o design do brinde, a facilidade de manuseio e empacotamento logístico para o canal de distribuição (650 pontos de venda), garantindo execução impecável no campo." }
    ],
    apresentacoes: [
      {
        titulo: "PLANEJAMENTO ESTRATÉGICO DA ANÁLISE DE COMPORTAMENTO À INOVAÇÃO",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRaLn0xk5JmE3CjpBnG8fj8CWdyvi3Jt_Oii9hElJMAdrt2ONdpAXLcTmylYMw8vLjr0K2VDJW6U53K/pubembed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  },
  "smirnoff-ice": {
    subtitulo: "BRAND EXPERIENCE | CAMPANHA DE INCENTIVO",
    titleLine1: "SMIRNOFF ICE",
    titleLine2: "(DIAGEO)",
    tag: "Live Marketing",
    desafio: "Reengajar e motivar a força de vendas de 400 participantes e premiar os 10 melhores colocados com uma viagem internacional inesquecível, utilizando a temporada da Copa do Mundo de 2018 na Rússia para esquentar as vendas da categoria Ice e conectar a equipe às origens da marca.",
    solucao: "O direcionamento estratégico utilizou o próprio destino e o contexto do mundial como mote motivador, promovendo um sentimento de orgulho e conduzindo uma jornada 360º de longo prazo (pré-lançamento, lançamento em atmosfera de estádio, hotsite, gamificação com realidade virtual e vivência internacional de alto padrão).",
    impactos: [
      { titulo: "Jornada & Engajamento Multicanal", desc: "Régua de relacionamento contínua estruturada com teasers via WhatsApp, disparo quinzenal de áudios motivacionais, envio de packs de Smirnoff Ice para a casa da equipe e hotsite exclusivo para acompanhamento de ranking." },
      { titulo: "Ativação Presencial & Gamificação", desc: "Start com evento de lançamento em grande estilo transformando a plenária em arquibancada (com abanadores, bandeirões e ambientação de estádio) e ativação interativa de Realidade Virtual (VR) com chute a gol para premiar os 50 melhores pontuadores com vales Decathlon." },
      { titulo: "Premiação & Vivência Internacional", desc: "Gestão de ponta a ponta da experiência dos 10 ganhadores na Rússia, abrangendo kit viagem temático, hospedagens premium, jantares exclusivos em locais históricos e roteiros culturais guiados." }
    ],
    apresentacoes: [
      {
        titulo: "Incentivo em Campo: A Jornada de Vendas Rumo à Rússia",
        iframeHtml: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSCrtcO1xpvKS9IdWYPRJLEWQj10ZEaqwzyblSVxBi90FjFW_Xq65vc2DJvm0tCqQyi91tQhXrofENZ/pubembed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" width="100%" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>'
      }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function ProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#191919] font-sans pb-20">
      {/* Barra de Navegação Superior */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-[#0A66C2] font-semibold text-sm hover:underline flex items-center gap-2">
            &larr; Voltar para a Página Inicial
          </Link>
          <span className="text-xs bg-blue-50 text-[#0A66C2] font-semibold px-3 py-1 rounded-full">
            {project.tag}
          </span>
        </div>
      </div>

      {/* Cabeçalho do Case */}
      <header className="max-w-4xl mx-auto px-6 pt-14 pb-10 text-center">
        <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
          {project.subtitulo}
        </p>
        <div className="text-3xl md:text-5xl font-extrabold text-[#0A66C2] tracking-tight flex flex-col items-center justify-center gap-1">
          <span>{project.titleLine1}</span>
          {project.titleLine2 && (
            <span>{project.titleLine2}</span>
          )}
        </div>
      </header>

      {/* Ficha Resumo (Quick Facts - Pilares Estratégicos) */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-lg font-bold text-[#0A66C2] border-b pb-3">
            Ficha Resumo & Estratégia
          </h2>
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Desafio Central</h3>
            <p className="text-gray-800 text-base leading-relaxed">{project.desafio}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Solução Estratégica</h3>
            <p className="text-gray-800 text-base leading-relaxed">{project.solucao}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Impacto & Entregas</h3>
            <div className="space-y-3">
              {project.impactos.map((imp, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-semibold text-[#0A66C2] text-sm block mb-1">{imp.titulo}</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{imp.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Apresentações Incorporadas (Google Slides) */}
          {project.apresentacoes && project.apresentacoes.length > 0 && (
            <div className="pt-6 border-t border-gray-100 space-y-6">
              {project.apresentacoes.map((apres, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">{apres.titulo}</h4>
                  <div className="w-full overflow-hidden rounded-lg shadow-inner bg-black" dangerouslySetInnerHTML={{ __html: apres.iframeHtml }} />
                </div>
              ))}
            </div>
          )}

          {/* Seção de Vídeos Incorporados (YouTube) */}
          {project.videos && project.videos.length > 0 && (
            <div className="pt-6 border-t border-gray-100 space-y-6">
              {project.videos.map((vid, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">{vid.titulo}</h4>
                    {vid.subtitulo && <p className="text-sm font-bold text-gray-800">{vid.subtitulo}</p>}
                  </div>
                  <div className="w-full aspect-video overflow-hidden rounded-lg shadow-inner bg-black" dangerouslySetInnerHTML={{ __html: vid.iframeHtml }} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Rodapé Interno */}
      <footer className="max-w-4xl mx-auto px-6 text-center pt-10 border-t border-gray-200 text-gray-500 text-sm">
        <p>Miroslava Godoy · Planner & Estrategista Sênior</p>
      </footer>
    </main>
  );
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center text-gray-500">Carregando case...</div>}>
      <ProjectContent params={params} />
    </Suspense>
  );
}