import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfólio — Estúdio Brancalion',
}

// ─── Substitua pelos projetos reais ────────────────────────────────────────
const projects = [
  { id: 1, title: 'Projeto Alpha',   category: 'Animação 2D', slug: 'projeto-alpha'   },
  { id: 2, title: 'Projeto Beta',    category: 'Animação 3D', slug: 'projeto-beta'    },
  { id: 3, title: 'Projeto Gamma',   category: 'Mix Media',   slug: 'projeto-gamma'   },
  { id: 4, title: 'Projeto Delta',   category: 'Animação 2D', slug: 'projeto-delta'   },
  { id: 5, title: 'Projeto Epsilon', category: 'Animação 3D', slug: 'projeto-epsilon' },
  { id: 6, title: 'Projeto Zeta',    category: 'Mix Media',   slug: 'projeto-zeta'    },
  { id: 7, title: 'Projeto Eta',     category: 'Animação 2D', slug: 'projeto-eta'     },
  { id: 8, title: 'Projeto Theta',   category: 'Mix Media',   slug: 'projeto-theta'   },
  { id: 9, title: 'Projeto Iota',    category: 'Animação 3D', slug: 'projeto-iota'    },
]
// ───────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-ink pt-20">
      {/* Hero da página */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
            Nosso trabalho
          </span>
          <h1 className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Portfólio
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#242020]">
                <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-5 transition-opacity">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" aria-hidden>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-orange flex flex-col items-center justify-center gap-3
                    opacity-0 group-hover:opacity-90 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white">Ver projeto</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-1">
                  {p.category}
                </span>
                <h2 className="font-display text-xl text-white leading-tight group-hover:text-orange transition-colors">
                  {p.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
