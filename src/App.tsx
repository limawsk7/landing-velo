import { useState } from 'react';
import Checkout from './Checkout';
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Cloud, Menu, X,
  Package, Boxes, Sparkles, RefreshCw, BarChart3, Store, Zap,
  ShieldCheck, CircleHelp, Layers3, Smartphone, Monitor, ShoppingBag
} from 'lucide-react';

const plans = [
  {
    name: 'Base', price: '97', period: '15 dias de acesso', description: 'Para começar a organizar e acelerar suas publicações.',
    features: [
      'Até 50 anúncios ativos no Mercado Livre',
      '50 publicações durante o período',
      '1 marketplace conectado',
      '1 página de vendas',
      '20 imagens com IA',
      '3 avatares IA',
      '40 mensagens Atlas por dia',
      'Analytics e monitoramento básicos'
    ],
    cta: 'Começar com o Base'
  },
  {
    name: 'Pro', price: '197', period: '30 dias de acesso', description: 'Mais capacidade, automação e ferramentas para crescer.',
    featured: true,
    features: [
      'Até 300 anúncios ativos no Mercado Livre',
      '300 publicações durante o período',
      'Publicação em lote e com variações',
      'Sincronização automática de preço e estoque',
      'Até 2 marketplaces conectados',
      '3 agentes IA e 3 automações',
      '10 páginas de vendas e 3 lojas',
      '100 imagens e 10 vídeos IA',
      '10 avatares IA e 150 mensagens Atlas/dia',
      'Relatórios avançados e suporte prioritário'
    ],
    cta: 'Escolher o Pro'
  },
  {
    name: 'Business', price: '297', period: 'Pagamento único · vitalício', description: 'A experiência completa, com acesso sem mensalidade.',
    lifetime: true,
    features: [
      'Anúncios ilimitados no Mercado Livre',
      'Publicações sem limite mensal',
      'Publicação em lote e com variações',
      'Sincronização automática de preço e estoque',
      'Marketplaces ilimitados',
      'Agentes IA e automações ilimitados',
      'Páginas de vendas e lojas ilimitadas',
      '300 imagens e 30 vídeos IA por mês',
      '30 avatares IA e 400 mensagens Atlas/dia',
      'Analytics premium e monitoramento premium',
      'Respostas automáticas ilimitadas',
      'Relatórios avançados, API e suporte dedicado'
    ],
    cta: 'Quero o vitalício'
  }
];

const faqs = [
  ['O que é a Fornece Cloud?', 'É uma plataforma para centralizar etapas da sua operação de vendas: encontrar produtos, preparar anúncios, publicar e acompanhar sua loja em um só lugar.'],
  ['Como funciona o período de cada plano?', 'O Base libera 15 dias de acesso, o Pro libera 30 dias e o Business oferece acesso vitalício mediante pagamento único.'],
  ['Qual é a diferença entre os planos?', 'Os planos mantêm três níveis de recursos. O Base atende operações menores; o Pro amplia limites e libera mais automações; o Business reúne os recursos mais completos e oferece acesso vitalício.'],
  ['Preciso pagar mensalidade no Business?', 'Não. O Business custa R$ 297 em pagamento único e é apresentado como plano vitalício.'],
  ['Posso conectar minha conta do Mercado Livre?', 'A plataforma foi pensada para trabalhar com integrações de marketplace. A disponibilidade de recursos depende das permissões e configurações da sua conta.']
];

function DashboardMockup() {
  return <div className="device-stage" aria-label="Prévia ilustrativa do painel Fornece Cloud">
    <div className="glow-orb" />
    <div className="laptop">
      <div className="screen">
        <div className="app-window real-app-preview">
          <img
            src="https://image.thum.io/get/width/1440/crop/850/noanimate/https://velo-web-production-10c44cdf.up.railway.app/"
            alt="Captura da página inicial real da Fornece Cloud"
            loading="lazy"
          />
        </div>  </div>
      </div>
      <div className="laptop-base"><div /></div>
    </div>
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-brand"><span className="brand-mark tiny"><Cloud size={10}/></span><b>fornece cloud</b></div>
      <small>RESUMO DA OPERAÇÃO</small><strong>R$ 8.450,00</strong><em>↗ 12,8% este mês</em>
      <div className="phone-mini-chart">{[28,42,35,60,50,75,65,88].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div>
      <div className="phone-line" /><div className="phone-line short" />
      <div className="phone-mini-row"><span>Produtos</span><b>1.284</b></div><div className="phone-mini-row"><span>Anúncios</span><b>348</b></div>
    </div>
    <div className="floating-chip"><span className="chip-check"><Check size={13}/></span><span><b>Publicação concluída</b><small>Seu anúncio está no ar</small></span></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark"><Cloud size={20}/></span><span>fornece<span className="brand-blue">cloud</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#recursos" onClick={closeMenu}>Recursos</a><a href="#como-funciona" onClick={closeMenu}>Como funciona</a><a href="#planos" onClick={closeMenu}>Planos</a><a href="#faq" onClick={closeMenu}>Dúvidas</a>
        <a className="nav-login" href="https://velo-web-production-10c44cdf.up.railway.app/login">Acessar plataforma <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> SUA OPERAÇÃO, EM OUTRO NÍVEL</div>
          <h1>Venda mais.<br/><span>Gerencie melhor.</span></h1>
          <p className="hero-description">Encontre produtos, prepare anúncios e acompanhe sua operação em uma plataforma feita para simplificar o seu dia a dia.</p>
          <div className="hero-actions"><a className="button button-primary" href="#planos">Conhecer os planos <ArrowRight size={17}/></a><a className="button button-quiet" href="#recursos">Explorar recursos <ArrowUpRight size={16}/></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>F</span><span>C</span><span>+</span></div><span>Mais controle para sua operação de vendas</span></div>
        </div>
        <DashboardMockup/>
        <div className="hero-bottom-note"><span/> TECNOLOGIA PARA QUEM VENDE ONLINE</div>
      </section>

      <section className="trust-strip"><div><ShieldCheck/><span>Gestão centralizada</span></div><i/><div><Zap/><span>Mais agilidade na operação</span></div><i/><div><RefreshCw/><span>Processos conectados</span></div><i/><div><BarChart3/><span>Visão clara dos resultados</span></div></section>

      <section className="section-wrap features-section" id="recursos">
        <div className="section-heading"><div className="eyebrow">UMA PLATAFORMA COMPLETA</div><h2>Menos tarefas repetitivas.<br/><span>Mais espaço para crescer.</span></h2><p>As ferramentas que você precisa para tirar sua operação do improviso e colocar tudo em ordem.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-large"><span className="feature-icon"><Package/></span><h3>Catálogo de produtos</h3><p>Explore produtos e leve as informações para sua operação com muito mais praticidade.</p><div className="feature-visual catalog-visual"><div className="catalog-head"><span>Catálogo</span><span className="catalog-search">⌕　Buscar produtos</span></div><div className="catalog-items"><div><span className="product-thumb blue-thumb">⌁</span><b>Eletrônicos</b><small>Produtos selecionados</small></div><div><span className="product-thumb purple-thumb">◈</span><b>Acessórios</b><small>Novas oportunidades</small></div><div><span className="product-thumb green-thumb">▧</span><b>Utilidades</b><small>Mais opções para vender</small></div></div></div></article>
          <article className="feature-card"><span className="feature-icon"><ShoppingBag/></span><h3>Publicação de anúncios</h3><p>Prepare e publique seus anúncios com um fluxo de trabalho mais simples.</p><div className="mini-illustration publish-visual"><div className="publish-check"><Check size={18}/></div><div><b>Anúncio pronto</b><small>Informações organizadas</small></div><span className="publish-status">Publicado</span></div></article>
          <article className="feature-card"><span className="feature-icon"><RefreshCw/></span><h3>Automação inteligente</h3><p>Reduza tarefas manuais com recursos de sincronização e automação.</p><div className="mini-illustration sync-visual"><span className="sync-circle"><RefreshCw/></span><span className="sync-line"/><span className="sync-circle"><Store/></span><span className="sync-line"/><span className="sync-circle"><Cloud/></span></div></article>
          <article className="feature-card"><span className="feature-icon"><Sparkles/></span><h3>Ferramentas com IA</h3><p>Use recursos de inteligência artificial para apoiar a criação e a gestão dos seus conteúdos.</p><div className="ai-pills"><span><Sparkles size={12}/> Imagens IA</span><span><Zap size={12}/> Assistente Atlas</span><span><Layers3 size={12}/> Conteúdo</span></div></article>
          <article className="feature-card"><span className="feature-icon"><BarChart3/></span><h3>Visão da sua operação</h3><p>Acompanhe indicadores e tenha mais clareza sobre o que está acontecendo na sua loja.</p><div className="mini-bars">{[35,58,44,73,60,90,69,100,80].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div></article>
        </div>
      </section>

      <section className="workflow-section" id="como-funciona"><div className="section-wrap workflow-inner">
        <div className="section-heading"><div className="eyebrow">SIMPLES DO INÍCIO AO FIM</div><h2>Sua operação na<br/><span>palma da sua mão.</span></h2><p>Um fluxo pensado para deixar sua rotina mais leve e organizada.</p></div>
        <div className="workflow-grid">
          <div className="workflow-step"><span className="step-number">01</span><span className="step-icon"><Store/></span><h3>Conecte sua operação</h3><p>Prepare sua conta e configure as integrações disponíveis.</p></div>
          <div className="workflow-step"><span className="step-number">02</span><span className="step-icon"><Package/></span><h3>Encontre produtos</h3><p>Explore o catálogo e selecione os produtos para trabalhar.</p></div>
          <div className="workflow-step"><span className="step-number">03</span><span className="step-icon"><Layers3/></span><h3>Prepare e publique</h3><p>Organize as informações e agilize a criação dos anúncios.</p></div>
          <div className="workflow-step"><span className="step-number">04</span><span className="step-icon"><BarChart3/></span><h3>Acompanhe tudo</h3><p>Gerencie sua operação com uma visão mais clara do processo.</p></div>
        </div>
        <div className="device-caption"><Monitor size={15}/> Acesse pelo computador <span/> <Smartphone size={15}/> e acompanhe de onde estiver</div>
      </div></section>

      <section className="section-wrap pricing-section" id="planos">
        <div className="section-heading centered"><div className="eyebrow">PLANOS E ACESSO</div><h2>Escolha o ritmo do<br/><span>seu crescimento.</span></h2><p>Comece com o essencial, avance com mais recursos ou tenha acesso vitalício.</p></div>
        <div className="pricing-grid">{plans.map((plan)=><article key={plan.name} className={'plan-card'+(plan.featured?' plan-featured':'')+(plan.lifetime?' plan-lifetime':'')}>
          {plan.featured && <div className="popular-tag">MAIS ESCOLHIDO</div>}
          {plan.lifetime && <div className="lifetime-tag"><Sparkles size={13}/> ACESSO VITALÍCIO</div>}
          <div className="plan-name">{plan.name}</div><p className="plan-description">{plan.description}</p>
          <div className="price"><span>R$</span>{plan.price}<small>{plan.period}</small></div>
          <button type="button" className={'button plan-button'+(plan.featured?' button-primary':'')} onClick={() => setSelectedPlan(plan.name.toLowerCase())}>{plan.cta} <ArrowRight size={16}/></button>
          <div className="feature-divider"/><div className="included-label">O QUE ESTÁ INCLUÍDO</div>
          <ul>{plan.features.map((feature)=><li key={feature}><Check size={15}/><span>{feature}</span></li>)}</ul>
        </article>)}</div>
        <p className="pricing-footnote">Os limites e recursos variam conforme o plano. O acesso vitalício do Business é um pagamento único.</p>
      </section>

      <section className="closing-section" id="contratar"><div className="closing-glow"/><div className="section-wrap closing-inner"><div className="eyebrow"><span className="eyebrow-dot"/> SUA PRÓXIMA ETAPA COMEÇA AQUI</div><h2>Deixe a operação fluir.<br/><span>Você cuida do crescimento.</span></h2><p>Conheça a Fornece Cloud e descubra uma forma mais organizada de trabalhar.</p><a className="button button-primary" href="https://velo-web-production-10c44cdf.up.railway.app/login">Acessar a plataforma <ArrowUpRight size={17}/></a><small>Já tem uma conta? Entre na plataforma para continuar.</small></div></section>

      <section className="section-wrap faq-section" id="faq"><div className="faq-intro"><div className="eyebrow">AINDA TEM DÚVIDAS?</div><h2>Respostas para<br/><span>começar tranquilo.</span></h2><p>Separamos algumas informações para ajudar você a conhecer a plataforma.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={'faq-item'+(openFaq===i?' faq-open':'')} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>
    </main>

    {selectedPlan && <Checkout plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}

    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#inicio"><span className="brand-mark"><Cloud size={20}/></span><span>fornece<span className="brand-blue">cloud</span></span></a><span>Organize. Publique. Cresça.</span><span>© {new Date().getFullYear()} Fornece Cloud. Todos os direitos reservados.</span></div></footer>
  </div>;
}

export default App;