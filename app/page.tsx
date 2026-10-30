import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center md:text-left">
        <div className="inline-block mb-4 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
          Planner & Estrategista Sênior
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Miroslava Godoy
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Mais de 15 anos de experiência transformando negócios através de Live Marketing, Trade Marketing, Omnichannel, Social Media e IA Aplicada.
        </p>
      </section>

      {/* Seção de Cases de Sucesso */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-slate-800 pb-4">
          Cases de Sucesso em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exemplo de Case 1 */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Faber-Castell</h3>
            <p className="text-slate-400 text-sm mb-4">
              Estratégia de trade marketing e ativação omnicanal para engajamento de marca e fortalecimento de ecossistema de varejo.
            </p>
          </div>

          {/* Exemplo de Case 2 */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Diageo / Smirnoff Ice</h3>
            <p className="text-slate-400 text-sm mb-4">
              Campanhas de live marketing de grande impacto, otimização de portfólio e posicionamento estratégico junto ao consumidor final.
            </p>
          </div>
        </div>

        {/* Bloco de Integração com o NotebookLM */}
        <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl border border-slate-700 text-center">
          <h3 className="text-2xl font-bold mb-3">Quer explorar os meus cases a fundo?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Desenvolvi um assistente interativo exclusivo com inteligência artificial para que recrutadores e gestores possam mergulhar nos detalhes dos meus projetos, estratégias e resultados.
          </p>
          <a
            href="https://notebook.google.com/notebook/577ce4a7-71d1-4766-9ed2-319c83aff4ee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-colors shadow-md"
          >
            Interagir com o Portfólio IA 🤖
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 text-center text-slate-500 text-sm border-t border-slate-900 mt-20">
        <p>© 2026 Miroslava Godoy. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}