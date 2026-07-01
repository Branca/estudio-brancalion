import Link from 'next/link'

// ─── Substitua pelos projetos reais ────────────────────────────────────────
// Para thumbnail: coloque em public/media/portfolio/{slug}.jpg
// e troque o <div> de placeholder por:
// <Image src={`/media/portfolio/${p.slug}.jpg`} fill alt={p.title} className="object-cover" />
const projects = [
  { id: 1, title: 'Projeto Alpha',   category: 'Animação 2D', slug: 'projeto-alpha'   },
  { id: 2, title: 'Projeto Beta',    category: 'Animação 3D', slug: 'projeto-beta'    },
  { id: 3, title: 'Projeto Gamma',   category: 'Mix Media',   slug: 'projeto-gamma'   },
  { id: 4, title: 'Projeto Delta',   category: 'Animação 2D', slug: 'projeto-delta'   },
  { id: 5, title: 'Projeto Epsilon', category: 'Animação 3D', slug: 'projeto-epsilon' },
  { id: 6, title: 'Projeto Zeta',    category: 'Mix Media',   slug: 'projeto-zeta'    },
]
// ───────────────────────────────────────────────────────────────────────────

export default function NossosTrabalhos() {
  return (
    <section id="portfolio" className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
              Nosso trabalho
            </span>
            <h2 className="font-display leading-none text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Portfólio
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/50 hover:text-orange transition-colors"
          >
            Ver todos
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid de cards — proporção retrato 3:4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.slug}`}
              className="group block"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#242020]">
                {/* Placeholder ↓ — substitua por <Image> quando tiver as imagens */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-5 transition-opacity duration-300">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" aria-hidden>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-orange flex flex-col items-center justify-center gap-3
                    opacity-0 group-hover:opacity-90 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white">Ver projeto</span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-1">
                  {p.category}
                </span>
                <h3 className="font-display text-xl text-white leading-tight group-hover:text-orange transition-colors">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* "Ver todos" mobile */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/50 hover:text-orange transition-colors border border-white/15 px-6 py-3"
          >
            Ver todos os trabalhos
          </Link>
        </div>
      </div>
    </section>
  )
}
