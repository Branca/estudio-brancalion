import Link from 'next/link'

function IconComicBubble({ className }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function IconFilmStrip({ className, size = 64 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {/* corpo da tira */}
      <rect x="1" y="5" width="22" height="14" rx="1"/>
      {/* linhas divisórias das perfurações */}
      <line x1="1" y1="8" x2="23" y2="8"/>
      <line x1="1" y1="16" x2="23" y2="16"/>
      {/* furos superiores */}
      <rect x="3"  y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="7"  y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="11" y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="15" y="5.5" width="2" height="2.5" rx="0.3"/>
      <rect x="19" y="5.5" width="2" height="2.5" rx="0.3"/>
      {/* furos inferiores */}
      <rect x="3"  y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="7"  y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="11" y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="15" y="16" width="2" height="2.5" rx="0.3"/>
      <rect x="19" y="16" width="2" height="2.5" rx="0.3"/>
      {/* quadros do filme */}
      <rect x="2"  y="9" width="6" height="6" rx="0.5"/>
      <rect x="9"  y="9" width="6" height="6" rx="0.5"/>
      <rect x="16" y="9" width="6" height="6" rx="0.5"/>
    </svg>
  )
}

function IconVRGlasses({ className }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"/>
      <circle cx="8.5" cy="12" r="2.5"/>
      <circle cx="15.5" cy="12" r="2.5"/>
      <path d="M11 12h2"/>
    </svg>
  )
}

const fronts = [
  {
    num:     '01',
    eyebrow: 'Narrativa Visual',
    title:   'Quadrinhos e ilustração narrativa',
    desc:    'HQs, graphic novels e ilustração sequencial para impressão e digital.',
    Icon:    IconComicBubble,
  },
  {
    num:     '02',
    eyebrow: 'Narrativa Audiovisual',
    title:   'Animação 2D, 3D e motion',
    desc:    'Vídeos animados para marcas, plataformas e séries autorais.',
    Icon:    IconFilmStrip,
  },
  {
    num:     '03',
    eyebrow: 'Narrativa Interativa',
    title:   'Webcomics, games e experiências digitais',
    desc:    'Histórias que o leitor atravessa — formatos que combinam leitura, interação e jogo.',
    Icon:    IconVRGlasses,
  },
]

const cases = [
  {
    slug:     'mu-mulkshake',
    label:    'Narrativa audiovisual · Para cliente',
    title:    '+Mu Mulkshake',
    desc:     'Animação 3D produzida para +Mu. Lançamento Mulkshake Natural Tech 2025.',
    href:     '/servicos',
    ctaLabel: 'Ver serviços',
    videoSrc: '/media/hero/16-9_1.mp4',
  },
  {
    slug:      'tostex',
    label:     'Narrativa audiovisual · Autoral',
    title:     'Tostex',
    desc:      'Episódio piloto de série animada para o YouTube.',
    href:      '/originais',
    ctaLabel:  'Ver originais',
    youtubeId: 'mYYVCtGaNVw',
  },
]

export default function HomeShowcase() {
  return (
    <>
      {/* ── Três frentes ──────────────────────────────────────────────── */}
      <section className="bg-ink py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-3">
              O que criamos
            </span>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Três frentes de narrativa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/8">
            {fronts.map((f) => (
              <div key={f.num} className="bg-ink p-8 md:p-10">
                <div className="flex items-end gap-3 mb-6">
                  <span className="font-display text-[3rem] text-orange/20 leading-none">
                    {f.num}
                  </span>
                  <f.Icon className="text-red-500" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-orange block mb-3">
                  {f.eyebrow}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-4">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destaques ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-3">
                Destaques
              </span>
              <h2
                className="font-display text-ink leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Trabalhos em destaque
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((c) => (
              <div key={c.slug} className="group">

                {/* Thumbnail */}
                <div className="relative aspect-video bg-ink overflow-hidden mb-4 rounded-lg">
                  {'youtubeId' in c && c.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${c.youtubeId}`}
                      title={c.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : 'videoSrc' in c && c.videoSrc ? (
                    <video
                      src={c.videoSrc as string}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-hidden
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" aria-hidden>
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  )}

                  <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.2em] uppercase bg-orange text-white px-2 py-1">
                    {c.label}
                  </span>
                </div>

                {/* Info */}
                <div className="flex items-center gap-2 mb-2">
                  <IconFilmStrip size={22} className="text-red-500 flex-shrink-0" />
                  <h3
                    className="font-display text-ink leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    {c.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-gray-mid leading-relaxed mb-4">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-ink hover:text-orange transition-colors group-hover:gap-3"
                >
                  {c.ctaLabel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
