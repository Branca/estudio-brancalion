import Link from 'next/link'

export default function TrabalheConosco() {
  return (
    <section className="bg-orange py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Texto */}
        <div>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/70 block mb-3">
            Faça parte do estúdio
          </span>
          <h2 className="font-display text-white leading-none mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Trabalhe conosco
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed max-w-lg">
            Buscamos talentos apaixonados por animação e narrativa visual. Se você quer fazer
            parte de um estúdio criativo e independente, envie seu portfólio.
          </p>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-ink text-cream font-mono text-[11px] tracking-widest uppercase px-8 py-4 hover:bg-yellow hover:text-ink transition-colors"
          >
            Enviar portfólio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
