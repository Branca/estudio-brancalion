import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notícias — Estúdio Brancalion',
}

// ─── Substitua pelas notícias reais ────────────────────────────────────────
const posts = [
  { id: 1, title: 'Título da Notícia 1', category: 'Destaque', date: 'Jan 2025', excerpt: 'Breve descrição da notícia. Substitua pelo conteúdo real.' },
  { id: 2, title: 'Título da Notícia 2', category: 'Projeto',  date: 'Fev 2025', excerpt: 'Breve descrição da notícia. Substitua pelo conteúdo real.' },
  { id: 3, title: 'Título da Notícia 3', category: 'Prêmios',  date: 'Mar 2025', excerpt: 'Breve descrição da notícia. Substitua pelo conteúdo real.' },
  { id: 4, title: 'Título da Notícia 4', category: 'Evento',   date: 'Abr 2025', excerpt: 'Breve descrição da notícia. Substitua pelo conteúdo real.' },
]
// ───────────────────────────────────────────────────────────────────────────

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-cream pt-20">
      <section className="py-20 px-6 border-b border-gray-mist">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
            Novidades
          </span>
          <h1 className="font-display text-ink leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Notícias
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/noticias/${p.id}`}
              className="group block border border-gray-mist p-8 hover:border-orange transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-orange">
                  {p.category}
                </span>
                <span className="font-mono text-[10px] text-gray-mid">{p.date}</span>
              </div>
              {/* Placeholder de imagem — substitua por <Image> */}
              <div className="aspect-video bg-gray-mist mb-4 flex items-center justify-center">
                <span className="font-mono text-[10px] text-gray-light tracking-wider uppercase">
                  Thumbnail
                </span>
              </div>
              <h2 className="font-display text-2xl text-ink leading-tight group-hover:text-orange transition-colors mb-2">
                {p.title}
              </h2>
              <p className="font-body text-sm text-gray-mid leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
