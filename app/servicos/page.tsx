import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Serviços — Estúdio Brancalion',
  description:
    'Narrativas sob encomenda para marcas, editoras, agências e plataformas. Quadrinhos, animação 2D/3D e experiências interativas.',
  openGraph: {
    title: 'Serviços — Estúdio Brancalion',
    description: 'Narrativas visuais, audiovisuais e interativas para o seu projeto.',
  },
}

const casesAudiovisual = [
  {
    slug:     'mu-mulkshake',
    title:    '+Mu Mulkshake',
    client:   '+Mu',
    category: 'Animação 3D',
    desc:     'Animação 3D produzida para +Mu. Lançamento Mulkshake Natural Tech 2025.',
    videoSrc: '/media/hero/16-9_1.mp4',
  },
  {
    slug:     'gooroo-academy',
    title:    'Gooroo Academy',
    client:   'Gooroo Academy',
    category: 'Animação 2D',
    desc:     'Animatic para aula de roteiro.',
    videoSrc: '/media/portfolio/gooroo-academy.mp4',
  },
  {
    slug:     'surf-88performance',
    title:    'Animação 2D para 88 Performance',
    client:   '88 Performance',
    category: 'Animação 2D',
    desc:     'Animação para divulgação de evento de surf.',
    videoSrc: '/media/portfolio/surf.mp4',
  },
]

const casesInterativa = [
  {
    slug:     'tafe-memnon',
    title:    'TAFE',
    client:   'Memnon Edições Científicas',
    category: 'Avaliação cognitiva interativa',
    desc:     'Bateria de avaliação cognitiva interativa desenvolvida para a Memnon Edições Científicas.',
    imageSrc: '/media/portfolio/cover-tafe.png',
  },
]

const steps = [
  {
    num: '01',
    title: 'Briefing',
    desc:  'Conversa inicial para entender o projeto, objetivos, público, plataforma de entrega e prazos. Sem complicação — pode ser por e-mail ou WhatsApp.',
  },
  {
    num: '02',
    title: 'Proposta',
    desc:  'Envio de proposta com escopo, cronograma e investimento. Após aprovação, seguimos com contrato simples e sinal.',
  },
  {
    num: '03',
    title: 'Produção',
    desc:  'Roteiro, storyboard, animação e finalização com checkpoints de aprovação. Você acompanha o processo em cada etapa.',
  },
  {
    num: '04',
    title: 'Entrega',
    desc:  'Arquivo final nos formatos solicitados. Revisões incluídas conforme escopo combinado.',
  },
]

function IconComicBubble({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function IconFilmStrip({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="1" y="5" width="22" height="14" rx="1"/>
      <line x1="1" y1="8" x2="23" y2="8"/>
      <line x1="1" y1="16" x2="23" y2="16"/>
      <rect x="3"  y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="7"  y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="11" y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="15" y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="19" y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="3"  y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="7"  y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="11" y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="15" y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="19" y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="2"  y="9" width="6" height="6" rx="0.5"/>
      <rect x="9"  y="9" width="6" height="6" rx="0.5"/>
      <rect x="16" y="9" width="6" height="6" rx="0.5"/>
    </svg>
  )
}

function IconVRGlasses({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"/>
      <circle cx="8.5" cy="12" r="2.5"/>
      <circle cx="15.5" cy="12" r="2.5"/>
      <path d="M11 12h2"/>
    </svg>
  )
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-ink pt-40 pb-24 px-6 overflow-hidden">
        <Image
          src="/media/hero/hero-servicos-v2.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-4">
            Para clientes
          </span>
          <h1
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            Narrativas sob<br />encomenda
          </h1>
          <p className="font-body text-white/55 text-base md:text-lg max-w-xl leading-relaxed">
            Do briefing à entrega — criamos narrativas visuais, audiovisuais e interativas
            para marcas, editoras, agências e plataformas.
          </p>
        </div>
      </section>

      {/* ── Narrativa Visual ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-mist">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <IconComicBubble size={20} className="text-red-500 flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange">
              Narrativa Visual
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-display text-ink leading-none mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Quadrinhos e ilustração narrativa
              </h2>
              <p className="font-body text-gray-mid leading-relaxed">
                HQs, graphic novels e ilustração sequencial para impressão e digital.
                Do roteiro à arte-final — projetos editoriais, adaptações literárias
                e comunicação visual para marcas que querem contar histórias de forma diferente.
              </p>
            </div>
            <div className="md:pt-2">
              <ul className="space-y-4">
                {[
                  'Roteiro e argumento',
                  'Arte e finalização de quadrinhos',
                  'Ilustração sequencial',
                  'Adaptação literária para HQ',
                  'Quadrinhos para comunicação corporativa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-mid">
                    <span className="text-orange mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Narrativa Audiovisual ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-mist">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <IconFilmStrip size={20} className="text-red-500 flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange">
              Narrativa Audiovisual
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <h2
                className="font-display text-ink leading-none mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Animação 2D, 3D e motion
              </h2>
              <p className="font-body text-gray-mid leading-relaxed">
                Vídeos animados para campanhas, aplicativos, educação e plataformas —
                do animatic à entrega final. 2D, 3D e mix media.
              </p>
            </div>
            <div className="md:pt-2">
              <ul className="space-y-4">
                {[
                  'Animação 2D e 3D para campanhas',
                  'Motion design e infográficos animados',
                  'Animatics e pitches',
                  'Vídeos educacionais animados',
                  'Abertura e identidade animada',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-mid">
                    <span className="text-orange mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cases audiovisual */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {casesAudiovisual.map((c) => (
              <div key={c.slug}>
                <div className="relative aspect-video bg-ink overflow-hidden mb-4 rounded-lg">
                  <video
                    src={c.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden
                  />
                </div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-orange block mb-1">
                  {c.category} · {c.client}
                </span>
                <h3 className="font-display text-xl text-ink mb-2">{c.title}</h3>
                <p className="font-body text-sm text-gray-mid leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Narrativa Interativa ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-mist">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <IconVRGlasses size={20} className="text-red-500 flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange">
              Narrativa Interativa
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <h2
                className="font-display text-ink leading-none mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Webcomics, games e experiências digitais
              </h2>
              <p className="font-body text-gray-mid leading-relaxed">
                Projetos onde a narrativa é ativa — webcomics com navegação própria,
                games com mundo e personagens, experiências transmídia.
              </p>
            </div>
            <div className="md:pt-2">
              <ul className="space-y-4">
                {[
                  'Webcomics interativas',
                  'Design e narrativa de games',
                  'Experiências transmídia',
                  'Avaliação e gamificação interativa',
                  'Roteiro e world-building',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-mid">
                    <span className="text-orange mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cases interativa */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
            {casesInterativa.map((c) => (
              <div key={c.slug}>
                {'imageSrc' in c && c.imageSrc && (
                  <div className="relative aspect-video bg-ink overflow-hidden mb-4 rounded-lg">
                    <Image
                      src={c.imageSrc}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="font-mono text-[9px] tracking-widest uppercase text-orange block mb-1">
                  {c.category} · {c.client}
                </span>
                <h3 className="font-display text-xl text-ink mb-2">{c.title}</h3>
                <p className="font-body text-sm text-gray-mid leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo ─────────────────────────────────────────────────── */}
      <section className="bg-gray-mist py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-3">
            Como funciona
          </span>
          <h2
            className="font-display text-ink leading-none mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Processo de trabalho
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <span className="font-display text-[3rem] text-orange/30 leading-none block mb-3">
                  {s.num}
                </span>
                <h3 className="font-display text-xl text-ink mb-2">{s.title}</h3>
                <p className="font-body text-sm text-gray-mid leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato / Orçamento ──────────────────────────────────────── */}
      <section id="contato" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-3">
              Fale conosco
            </span>
            <h2
              className="font-display text-ink leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Solicite um orçamento
            </h2>
            <p className="font-body text-gray-mid leading-relaxed mb-8">
              Conte um pouco sobre o seu projeto — formato, duração estimada, plataforma de entrega
              e prazo ideal. Retorno em até 48h.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-light block mb-1">E-mail</span>
                <a href="mailto:estudiobrancalion@gmail.com"
                  className="font-body text-sm text-ink hover:text-orange transition-colors">
                  estudiobrancalion@gmail.com
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-light block mb-1">WhatsApp</span>
                <a href="https://wa.me/mauriciobrancalion" target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-ink hover:text-orange transition-colors">
                  @mauriciobrancalion
                </a>
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <div>
            <form
              action="https://formspree.io/f/COLOQUE_SEU_ID_AQUI"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  Nome / Empresa
                </label>
                <input
                  type="text" name="nome" required
                  placeholder="Seu nome ou empresa"
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  E-mail
                </label>
                <input
                  type="email" name="email" required
                  placeholder="seu@email.com"
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  Sobre o projeto
                </label>
                <textarea
                  name="projeto" required rows={5}
                  placeholder="Tipo de narrativa, formato, plataforma, prazo e qualquer contexto que ajude..."
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange text-white font-mono text-[11px] tracking-widest uppercase py-4 hover:bg-ink transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
