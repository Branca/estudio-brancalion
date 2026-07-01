'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── Substitua estes dados pelos conteúdos reais ───────────────────────────
// Para imagem de fundo: coloque em public/media/hero/hero-{id}.jpg
// e substitua bgGradient por: style={{ backgroundImage: `url('/media/hero/hero-${slide.id}.jpg')` }}
const slides = [
  {
    id: 1,
    category: 'Destaque',
    title: 'Título da Notícia Principal',
    description:
      'Breve descrição da notícia ou projeto em destaque. Substitua este texto pelo conteúdo real da publicação.',
    href: '/noticias/1',
    accent: '#FF5F1F',
  },
  {
    id: 2,
    category: 'Projeto',
    title: 'Novo Projeto de Animação 2D',
    description:
      'Conheça os bastidores do nosso mais recente trabalho de animação. Técnicas inovadoras e muito esforço da equipe.',
    href: '/portfolio/projeto-1',
    accent: '#F7E735',
  },
  {
    id: 3,
    category: 'Bastidores',
    title: 'Por Trás das Cenas: Making Of',
    description:
      'Um olhar exclusivo sobre o processo criativo do Estúdio Brancalion — do esboço à tela final.',
    href: '/bastidores',
    accent: '#00E5FF',
  },
]
// ───────────────────────────────────────────────────────────────────────────

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  )
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [paused, next])

  const slide = slides[current]

  return (
    <section
      className="hero-full relative flex items-end overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Últimas notícias"
    >
      {/* ── Fundo placeholder ─────────────────────────────────────────────
          Substitua o <div> abaixo por:
          <Image src={`/media/hero/hero-${slide.id}.jpg`} fill alt="" className="object-cover" />
          ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 transition-colors duration-700">
        {/* Grade decorativa fundo */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Monograma — placeholder até ter imagem real */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display select-none leading-none transition-colors duration-500"
            style={{
              fontSize: 'clamp(8rem, 30vw, 20rem)',
              color: slide.accent,
              opacity: 0.06,
            }}
          >
            EB
          </span>
        </div>
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      {/* ── Conteúdo ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="max-w-2xl">
            <span
              className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-4 transition-colors"
              style={{ color: slide.accent }}
            >
              {slide.category}
            </span>

            <h2 className="font-display text-white leading-none mb-4 transition-all duration-500"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              {slide.title}
            </h2>

            <p className="font-body text-white/65 text-base leading-relaxed mb-8 max-w-lg">
              {slide.description}
            </p>

            <Link
              href={slide.href}
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase px-6 py-3 text-white transition-all hover:gap-5"
              style={{ backgroundColor: slide.accent, color: slide.accent === '#F7E735' ? '#1A1715' : '#fff' }}
            >
              Saiba mais
              <ArrowRight />
            </Link>
          </div>

          {/* Dots e controles */}
          <div className="flex items-center gap-6 mt-10">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Notícia ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    i === current ? 'w-8' : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                  style={i === current ? { backgroundColor: slide.accent } : {}}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2 ml-auto">
              <button
                onClick={prev}
                aria-label="Notícia anterior"
                className="w-10 h-10 border border-white/25 text-white flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Próxima notícia"
                className="w-10 h-10 border border-white/25 text-white flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10 pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/25" style={{ animation: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite' }} />
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
