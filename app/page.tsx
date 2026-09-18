const projects = [
  { src: "/portfolio/obra-001.jpg", title: "Loja TIM", type: "Loja de telefonia", wide: true },
  { src: "/portfolio/obra-003.jpg", title: "Experiência de varejo", type: "Interiores comerciais" },
  { src: "/portfolio/obra-005.jpg", title: "Ambiente de atendimento", type: "Execução completa" },
  { src: "/portfolio/obra-007.jpg", title: "Loja Claro", type: "Loja de telefonia", tall: true },
  { src: "/portfolio/obra-009.jpg", title: "Loja JOVI", type: "Fachada e interiores", tall: true },
  { src: "/portfolio/obra-010.jpg", title: "JOVI Experience", type: "Interiores comerciais", wide: true },
  { src: "/portfolio/obra-011.jpg", title: "Loja JOVI", type: "Marcenaria e iluminação" },
  { src: "/portfolio/obra-012.jpg", title: "Estrutura metálica", type: "Sala comercial" },
  { src: "/portfolio/obra-013.jpg", title: "Edifício comercial", type: "Construção e reforma" },
  { src: "/portfolio/novos/savassi-bh-1.jpg", title: "TIM Savassi BH 01", type: "Savassi • Belo Horizonte", wide: true },
  { src: "/portfolio/novos/savassi-bh-2.jpg", title: "TIM Savassi BH 02", type: "Savassi • Belo Horizonte" },
  { src: "/portfolio/novos/jundiai-1.jpg", title: "TIM Jundiaí 01", type: "Jundiaí • São Paulo" },
  { src: "/portfolio/novos/jundiai-2.jpg", title: "TIM Jundiaí 02", type: "Jundiaí • São Paulo", wide: true },
  { src: "/portfolio/novos/curitiba-1.jpg", title: "TIM Curitiba 01", type: "Curitiba • Paraná" },
  { src: "/portfolio/novos/curitiba-2.jpg", title: "TIM Curitiba 02", type: "Curitiba • Paraná", wide: true },
  { src: "/portfolio/novos/curitiba-3.jpg", title: "TIM Curitiba 03", type: "Curitiba • Paraná" },
  { src: "/portfolio/novos/curitiba-4.jpg", title: "TIM Curitiba 04", type: "Curitiba • Paraná" },
  { src: "/portfolio/novos/curitiba-5.jpg", title: "TIM Curitiba 05", type: "Curitiba • Paraná" },
  { src: "/portfolio/novos/curitiba-6.jpg", title: "TIM Curitiba 06", type: "Curitiba • Paraná", wide: true },
  { src: "/portfolio/novos/curitiba-7.jpg", title: "TIM Curitiba 07", type: "Curitiba • Paraná" },
  { src: "/portfolio/novos/goiania-1.jpg", title: "TIM Goiânia 01", type: "Goiânia • Goiás" },
  { src: "/portfolio/novos/goiania-2.jpg", title: "TIM Goiânia 02", type: "Goiânia • Goiás", wide: true },
  { src: "/portfolio/novos/goiania-3.jpg", title: "TIM Goiânia 03", type: "Goiânia • Goiás" },
  { src: "/portfolio/novos/goiania-4.jpg", title: "TIM Goiânia 04", type: "Goiânia • Goiás" },
  { src: "/portfolio/novos/goiania-5.jpg", title: "TIM Goiânia 05", type: "Goiânia • Goiás" },
  { src: "/portfolio/novos/patio-paulista-1.jpg", title: "TIM Pátio Paulista 01", type: "São Paulo • SP", wide: true },
  { src: "/portfolio/novos/patio-paulista-2.jpg", title: "TIM Pátio Paulista 02", type: "São Paulo • SP" },
  { src: "/portfolio/novos/patio-paulista-3.jpg", title: "TIM Pátio Paulista 03", type: "São Paulo • SP" },
  { src: "/portfolio/novos/patio-paulista-4.jpg", title: "TIM Pátio Paulista 04", type: "São Paulo • SP" },
  { src: "/portfolio/novos/piracicaba-1.jpg", title: "TIM Piracicaba 01", type: "Piracicaba • São Paulo", wide: true },
  { src: "/portfolio/novos/piracicaba-2.jpg", title: "TIM Piracicaba 02", type: "Piracicaba • São Paulo" },
  { src: "/portfolio/novos/piracicaba-3.jpg", title: "TIM Piracicaba 03", type: "Piracicaba • São Paulo" },
  { src: "/portfolio/novos/piracicaba-4.jpg", title: "TIM Piracicaba 04", type: "Piracicaba • São Paulo" },
  { src: "/portfolio/novos/piracicaba-5.jpg", title: "TIM Piracicaba 05", type: "Piracicaba • São Paulo", wide: true },
  { src: "/portfolio/novos/piracicaba-6.jpg", title: "TIM Piracicaba 06", type: "Piracicaba • São Paulo" },
  { src: "/portfolio/novos/uberlandia-1.jpg", title: "TIM Uberlândia 01", type: "Uberlândia • Minas Gerais" },
  { src: "/portfolio/novos/uberlandia-2.jpg", title: "TIM Uberlândia 02", type: "Uberlândia • Minas Gerais", wide: true },
  { src: "/portfolio/novos/uberlandia-3.jpg", title: "TIM Uberlândia 03", type: "Uberlândia • Minas Gerais" },
  { src: "/portfolio/novos/uberlandia-4.jpg", title: "TIM Uberlândia 04", type: "Uberlândia • Minas Gerais" },
];

const services = ["Construções e reformas completas", "Instalações elétricas, hidráulicas e de lógica", "Ar-condicionado e montagem de dutos", "Vitrines, fachadas e comunicação visual", "Pisos, revestimentos, mármore e granito", "Mezaninos, coberturas e estruturas metálicas", "Rede de incêndio e detecção de fumaça", "Marcenaria, divisórias e mobiliário em MDF", "Impermeabilização e recuperação estrutural", "Contratos de manutenção predial"];

export default function Home() {
  return <main>
    <header className="nav-shell">
      <a className="brand" href="#inicio" aria-label="Refaz - início"><img src="/refaz-logo.png" alt="Refaz Manutenção Predial" /></a>
      <nav aria-label="Navegação principal"><a href="#sobre">A Refaz</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a className="nav-cta" href="https://wa.me/5511998001294?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20uma%20obra." target="_blank" rel="noreferrer">Fale conosco <span>↗</span></a></nav>
    </header>
    <section className="hero" id="inicio">
      <img className="hero-image" src="/portfolio/obra-001.jpg" alt="Loja de telefonia executada pela Refaz em shopping" /><div className="hero-shade" /><div className="hero-index">01 / PORTFÓLIO</div>
      <div className="hero-content"><p className="eyebrow light">Construção comercial • Jundiaí — SP</p><h1>Construímos<br />espaços que<br /><em>fazem acontecer.</em></h1><div className="hero-bottom"><p>Especialistas em reformas e construção de lojas, com experiência em operações dentro de shopping centers.</p><a href="#projetos" className="circle-link" aria-label="Ver projetos">↓</a></div></div>
    </section>
    <section className="manifesto" id="sobre">
      <div className="section-tag"><span>01</span> A REFAZ</div><div className="manifesto-copy"><h2>Da planta à entrega, cada detalhe importa.</h2><div className="manifesto-grid"><p>Há mais de 10 anos, a Refaz transforma projetos em ambientes comerciais prontos para operar. Unimos execução técnica, gestão próxima e domínio das exigências de obras em shopping centers.</p><p>Atendemos os setores comercial e industrial em construções básicas, reformas completas e manutenção predial, sempre com responsabilidade, pontualidade, segurança e controle de custos.</p></div></div><div className="stat"><strong>+10</strong><span>anos construindo<br />com confiança</span></div>
    </section>
    <section className="values-band" aria-label="Valores Refaz"><span>Ética & transparência</span><i>◆</i><span>Segurança</span><i>◆</i><span>Comprometimento</span><i>◆</i><span>Trabalho em equipe</span></section>
    <section className="projects" id="projetos">
      <div className="section-head"><div className="section-tag"><span>02</span> PROJETOS</div><div><h2>Execuções que<br /><em>falam por nós.</em></h2><p>Ambientes comerciais pensados para receber pessoas, fortalecer marcas e começar a operar.</p></div></div>
      <div className="project-grid">{projects.map((p,i)=><figure className={`${p.wide?"wide":""} ${p.tall?"tall":""}`} key={p.src}><img src={p.src} alt={`${p.title} - ${p.type}`} loading={i>2?"lazy":undefined}/><figcaption><span>{String(i+1).padStart(2,"0")}</span><div><strong>{p.title}</strong><small>{p.type}</small></div><b>↗</b></figcaption></figure>)}</div>
    </section>
    <section className="services" id="servicos">
      <div className="section-tag inverse"><span>03</span> O QUE FAZEMOS</div><div className="services-intro"><p className="eyebrow light">Soluções integradas</p><h2>Uma equipe.<br />Toda a <em>obra.</em></h2><p>Coordenamos diferentes frentes com um corpo técnico preparado para entregar qualidade, agilidade e segurança do início ao fim.</p></div><div className="service-list">{services.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><p>{s}</p><b>—</b></div>)}</div>
    </section>
    <section className="method"><div className="section-tag"><span>04</span> NOSSO JEITO</div><h2>Obra organizada.<br /><em>Resultado previsível.</em></h2><div className="method-grid"><article><span>01</span><h3>Planejamento</h3><p>Leitura técnica, escopo claro e cronograma alinhado com a operação e as regras do empreendimento.</p></article><article><span>02</span><h3>Execução</h3><p>Equipe coordenada, fiscalização próxima e segurança presente em cada etapa da obra.</p></article><article><span>03</span><h3>Entrega</h3><p>Acabamento cuidadoso, compromisso com prazos e ambiente pronto para receber sua marca.</p></article></div></section>
    <footer id="contato"><div className="footer-top"><p>Tem um novo ponto, reforma ou expansão em vista?</p><h2>Vamos tirar<br />seu projeto<br /><em>do papel.</em></h2><a className="contact-line" href="https://wa.me/5511998001294?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20uma%20obra." target="_blank" rel="noreferrer"><span>WhatsApp comercial</span><strong>(11) 99800-1294</strong><b>↗</b></a></div><div className="footer-bottom"><img src="/refaz-logo.png" alt="Refaz Manutenção Predial" /><div><strong>Base operacional</strong><span>Jundiaí — São Paulo</span></div><div className="footer-phone"><strong>Contato</strong><a href="tel:+5511998001294">(11) 99800-1294</a></div><p>© {new Date().getFullYear()} Refaz. Todos os direitos reservados.</p></div></footer>
    <a className="whatsapp-float" href="https://wa.me/5511998001294?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20uma%20obra." target="_blank" rel="noreferrer" aria-label="Conversar com a Refaz pelo WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.05 4A11.8 11.8 0 0 0 5.8 21.66L4 28l6.5-1.7A11.94 11.94 0 1 0 16.05 4Zm6.95 16.9c-.3.85-1.75 1.62-2.42 1.72-.63.1-1.43.15-2.3-.13-.53-.17-1.22-.4-2.1-.78-3.7-1.6-6.1-5.34-6.28-5.59-.18-.25-1.5-2-.5-3.82.5-.9 1.03-1.12 1.4-1.12h1c.32.02.48.03.7.56.27.65.92 2.24 1 2.4.08.17.13.37.03.57-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.3.31-.13.61.18.3.78 1.28 1.68 2.07 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.72-.22 1.57Z"/></svg>
      <span>WhatsApp</span>
    </a>
  </main>;
}
