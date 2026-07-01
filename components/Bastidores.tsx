import Link from 'next/link'

// ─── Substitua pelos posts reais ───────────────────────────────────────────
// Para thumbnail: coloque em public/media/bastidores/{slug}.jpg
// e troque a <div className="aspect-[16/9]..."> por:
// <div className="relative aspect-[16/9]">
//   <Image src={`/media/bastidores/${p.slug}.jpg`} fill alt={p.title} className="object-cover" />
// </div>
const posts = [
  {
    id: 1,
    title: 'O processo de criação de personagens 2D',
    category: 'Making Of',
    slug: 'criacao-personagens-2d',
    date: 'Jan 2025',
  },
  {
    id: 2,
    title: 'Bastidores: a sonorização em animação',
    category: 'Técnica',
    slug: 'sonorizacao-animacao',
    date: 'Fev 2025',
  },
  {
    id: 3,
    title: 'Roteiro: do texto à storyboard',
    category: 'Processo',
    slug: 'roteiro-storyboard',
    date: 'Mar 2025',
  },
]
// ───────────────────────────────────────────────────────────────────────────

export default function Bastidores() {
  return (
    <section id="bastidores" className="bg-gray-mist py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
              Por trás das cenas
            </span>
            <h2 className="font-display text-ink leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Bastidores
            </h2>
          </div>
          <Link
            href="/bastidores"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-gray-mid hover:text-orange transition-colors"
          >
            Ver todos
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/bastidores/${p.slug}`}
              className="group block bg-cream overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-light overflow-hidden">
                {/* Placeholder ↓ — substitua por <Image> */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-10 transition-opacity duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B6864" strokeWidth="1.5" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-orange opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              </div>

              {/* Conteúdo */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-orange">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] text-gray-mid">{p.date}</span>
                </div>
                <h3 className="font-display text-[1.2rem] text-ink leading-tight group-hover:text-orange transition-colors">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* "Ver todos" mobile */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/bastidores"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-gray-mid hover:text-orange transition-colors border border-gray-light px-6 py-3"
          >
            Ver todos os bastidores
          </Link>
        </div>
      </div>
    </section>
  )
}
