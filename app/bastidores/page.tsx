import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bastidores — Estúdio Brancalion',
}

const posts = [
  { id: 1, title: 'O processo de criação de personagens 2D', category: 'Making Of', date: 'Jan 2025', slug: 'criacao-personagens-2d' },
  { id: 2, title: 'Bastidores: a sonorização em animação',   category: 'Técnica',   date: 'Fev 2025', slug: 'sonorizacao-animacao'  },
  { id: 3, title: 'Roteiro: do texto à storyboard',          category: 'Processo',  date: 'Mar 2025', slug: 'roteiro-storyboard'   },
  { id: 4, title: 'Rigging de personagens com ToonBoom',     category: 'Técnica',   date: 'Abr 2025', slug: 'rigging-toonboom'     },
  { id: 5, title: 'Como fazemos a composição final',         category: 'Making Of', date: 'Mai 2025', slug: 'composicao-final'     },
  { id: 6, title: 'Layout e background painting',            category: 'Processo',  date: 'Jun 2025', slug: 'layout-background'   },
]

export default function BastidoresPage() {
  return (
    <main className="min-h-screen bg-gray-mist pt-20">
      <section className="py-20 px-6 border-b border-gray-light">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
            Por trás das cenas
          </span>
          <h1 className="font-display text-ink leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Bastidores
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/bastidores/${p.slug}`}
              className="group block bg-cream overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-light flex items-center justify-center overflow-hidden">
                <span className="font-mono text-[10px] text-gray-mid tracking-wider uppercase opacity-50">
                  Foto / Vídeo
                </span>
                <div className="absolute inset-0 bg-orange opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-orange">{p.category}</span>
                  <span className="font-mono text-[10px] text-gray-mid">{p.date}</span>
                </div>
                <h2 className="font-display text-[1.2rem] text-ink leading-tight group-hover:text-orange transition-colors">
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
