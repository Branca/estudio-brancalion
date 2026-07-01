import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre — Estúdio Brancalion',
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-gray-mist">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
            Conheça o estúdio
          </span>
          <h1 className="font-display text-ink leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Sobre nós
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Foto / placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-mist flex items-center justify-center">
              <span className="font-mono text-[10px] text-gray-light tracking-wider uppercase">
                Foto da equipe / estúdio
              </span>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-orange pointer-events-none" />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-ink leading-tight">
              Animação independente<br />desde [ano de fundação]
            </h2>
            {/* ↓ Substitua pelos textos reais */}
            <p className="font-body text-gray-mid leading-relaxed">
              [História do estúdio: como tudo começou, de onde veio a inspiração, qual o caminho percorrido até hoje.]
            </p>
            <p className="font-body text-gray-mid leading-relaxed">
              [Missão e valores: o que guia o trabalho do estúdio, que tipo de história você quer contar, qual impacto deseja gerar.]
            </p>
            <p className="font-body text-gray-mid leading-relaxed">
              [Equipe: quem são as pessoas que fazem parte do Estúdio Brancalion, quais as especialidades.]
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-ink transition-colors"
            >
              Entre em contato
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
