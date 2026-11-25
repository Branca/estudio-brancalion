import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className="hero-full bg-ink flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Vídeo de fundo */}
      <video
        src="/media/hero/16-9_1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Overlay escuro sobre o vídeo */}
      <div className="absolute inset-0 bg-ink/60" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Localização */}
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/35 mb-6 block">
          Garopaba · Santa Catarina
        </span>

        {/* Nome */}
        <h1
          className="font-display text-white leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}
        >
          Estúdio Brancalion
        </h1>

        {/* Posicionamento */}
        <p className="font-mono text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-white/85 mb-14 md:mb-16">
          Criação de Narrativas · Visuais · Audiovisuais · Interativas
        </p>

        {/* ── Dual CTA ──────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-px w-full max-w-3xl bg-white/10">

          {/* Para clientes — Serviços */}
          <Link
            href="/servicos"
            className="group block bg-cream p-8 md:p-10 text-left hover:bg-white transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-orange block mb-3">
              Para clientes
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-3">
              Narrativas sob encomenda
            </h2>
            <p className="font-body text-sm text-gray-mid leading-relaxed mb-6">
              Do briefing à entrega — quadrinhos, animação e experiências interativas para marcas, editoras e agências.
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-ink group-hover:gap-4 transition-all duration-200">
              Ver serviços <Arrow />
            </span>
          </Link>

          {/* Produção autoral — Originais */}
          <Link
            href="/originais"
            className="group block bg-orange p-8 md:p-10 text-left hover:bg-yellow transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70 block mb-3 group-hover:text-ink/60">
              Produção autoral
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white leading-tight mb-3 group-hover:text-ink">
              Narrativas do estúdio
            </h2>
            <p className="font-body text-sm text-white/80 leading-relaxed mb-6 group-hover:text-ink/70">
              Projetos próprios — quadrinhos, animação e webcomics que nascem aqui.
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white group-hover:text-ink group-hover:gap-4 transition-all duration-200">
              Ver originais <Arrow />
            </span>
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2 text-white/25 pointer-events-none">
          <div className="w-px h-10 bg-white/20" />
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
