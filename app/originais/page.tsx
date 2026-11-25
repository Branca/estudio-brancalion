import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Originais — Estúdio Brancalion',
  description:
    'Quadrinhos, animação e webcomics criadas pelo Estúdio Brancalion. Produções autorais em narrativa visual, audiovisual e interativa.',
  openGraph: {
    title: 'Originais — Estúdio Brancalion',
    description: 'Narrativas autorais do Estúdio Brancalion.',
  },
}

const YOUTUBE_CHANNEL = 'https://youtube.com/@estudiobrancalion'
const INSTAGRAM       = 'https://instagram.com/estudiobrancalion'

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

export default function OriginaisPage() {
  return (
    <main className="min-h-screen bg-ink">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <Image
          src="/media/hero/hero-originais.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-4">
            Produção autoral
          </span>
          <h1
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            Originais do<br />estúdio
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Histórias que nascem aqui — quadrinhos, animação e webcomics criadas
            pelo Estúdio Brancalion.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF0000] text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-ink transition-colors"
            >
              <IconYouTube />
              Ver no YouTube
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/25 text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              <IconInstagram />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Narrativas Visuais ───────────────────────────────────────── */}
      <section className="border-t border-white/8 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-10">
            Narrativa Visual
          </span>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Capa */}
            <div className="relative aspect-[2/3] w-1/2 bg-[#111] overflow-hidden rounded-lg">
              <Image
                src="/media/portfolio/cover-quadrinhos-cartumclip.jpg"
                alt="Cartumclip Itamar Assumpção"
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <IconComicBubble size={20} className="text-red-500 flex-shrink-0" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-orange">
                  Quadrinhos · Autoral
                </span>
              </div>
              <h2
                className="font-display text-white leading-none mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Cartumclip Itamar Assumpção
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Quadrinho sobre o compositor e poeta Itamar Assumpção, publicado como ebook.
              </p>
              <a
                href="https://www.amazon.com.br/dp/B0HJHS5LH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-yellow hover:text-ink transition-colors"
              >
                Ver na Amazon
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Narrativas Audiovisuais ──────────────────────────────────── */}
      <section className="border-t border-white/8 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-10">
            Narrativa Audiovisual
          </span>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Vídeo */}
            <div className="relative aspect-video bg-[#111] overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/mYYVCtGaNVw"
                title="Tostex"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
              <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.2em] uppercase bg-orange text-white px-2 py-1">
                Em produção
              </span>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <IconFilmStrip size={20} className="text-red-500 flex-shrink-0" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-orange">
                  Série animada · Original autoral
                </span>
              </div>
              <h2
                className="font-display text-white leading-none mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Tostex
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Episódio piloto de série animada para o YouTube.
              </p>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-yellow hover:text-ink transition-colors"
              >
                Assistir no YouTube
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Narrativas Interativas ───────────────────────────────────── */}
      <section className="border-t border-white/8 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-10">
            Narrativa Interativa
          </span>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Capa */}
            <div className="relative aspect-[4/3] bg-[#111] overflow-hidden rounded-lg">
              <Image
                src="/media/portfolio/cover-webcomic-centauri.png"
                alt="Centauri"
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <IconVRGlasses size={20} className="text-red-500 flex-shrink-0" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-orange">
                  Webcomic interativa · Tambabooks
                </span>
              </div>
              <h2
                className="font-display text-white leading-none mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Centauri
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Uma webcomic interativa sobre músicas que distorcem a percepção de
                espaço-tempo — numa viagem rumo a Centauri.
              </p>
              <a
                href="/centauri/"
                className="inline-flex items-center gap-3 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-yellow hover:text-ink transition-colors"
              >
                Ler agora
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Acompanhe a produção ─────────────────────────────────────── */}
      <section className="border-t border-white/8 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-4">
            Bastidores & processo
          </span>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Acompanhe a produção
          </h2>
          <p className="font-body text-white/50 max-w-md mx-auto leading-relaxed mb-10">
            Bastidores, sketches e atualizações do processo criativo no Instagram
            e no YouTube. Vem junto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              <IconInstagram />
              @estudiobrancalion
            </a>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              <IconYouTube />
              Canal YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── Quem está por trás ───────────────────────────────────────── */}
      <section className="border-t border-white/8 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-body text-white/40 text-sm leading-relaxed max-w-lg">
            O Estúdio Brancalion é fundado por Mauricio Brancalion — quadrinista, animador e músico
            radicado em Garopaba, SC. Os originais do estúdio nascem da mesma vontade de contar
            histórias que guia o trabalho desde 2000.
          </p>
          <Link
            href="/sobre"
            className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-orange transition-colors"
          >
            Sobre o estúdio
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

function IconYouTube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}
