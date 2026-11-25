import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre — Estúdio Brancalion',
  description:
    'Mauricio Brancalion — quadrinista, animador e músico. Do @segundoucomorestes à Editora Carayba, da Branca! ao Estúdio Brancalion.',
  openGraph: {
    title: 'Sobre — Estúdio Brancalion',
    description: 'A trajetória por trás do Estúdio Brancalion.',
  },
}

const timeline = [
  {
    period: 'Anos 2000',
    title:  'Quadrinhos',
    desc:   'Começou fazendo HQs na Folha de São Paulo e foi criador do Fanzine Sagu — uma linguagem que ainda atravessa tudo que cria hoje. Narrativa, enquadramento, personagens. [@segundoucomorestes no Instagram reúne parte desse trabalho.]',
  },
  {
    period: 'Anos 2020',
    title:  'Editora Tambabooks',
    desc:   'Em 2021 fundou a Editora Tambabooks, especializada na produção e venda de livros e ebooks de quadrinhos.',
  },
  {
    period: 'Paralelo',
    title:  'Branca!',
    desc:   'Produção musical sob o nome Branca! — outra frente criativa que alimenta o trabalho com timing, ritmo e atmosfera. Música e animação sempre andaram juntas.',
  },
  {
    period: 'Presente',
    title:  'Estúdio Brancalion',
    desc:   'Narrativas visuais, audiovisuais e interativas em Garopaba, Santa Catarina — para clientes e em produções próprias. Cases para +Mu, Memnon e FTD, quadrinhos publicados pela Tambabooks, e o desenvolvimento contínuo de originais do estúdio.',
  },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-mist">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-4">
              Quem somos
            </span>
            <h1
              className="font-display text-ink leading-none"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
            >
              Mauricio<br />Brancalion
            </h1>
          </div>
          <div className="md:pb-4">
            <p className="font-body text-gray-mid text-base md:text-lg leading-relaxed">
              Quadrinista, animador e músico. Desde 2000 criando histórias em diferentes
              linguagens — das HQs à animação, da música ao audiovisual, da tecnologia aos games e interatividades.
              Fundador do Estúdio Brancalion em Garopaba, Santa Catarina.
            </p>
          </div>
        </div>
      </section>

      {/* ── Foto ────────────────────────────────────────────────────── */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image src="/media/sobre/site-brancalion-foto.jpeg" fill alt="Mauricio Brancalion" className="object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ── Trajetória ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange block mb-3">
            Trajetória
          </span>
          <h2
            className="font-display text-ink leading-none mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Uma carreira construída<br />em linguagens
          </h2>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
            {timeline.map((t, i) => (
              <div key={i} className="relative md:border-t-2 md:border-orange md:pt-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-orange block mb-2">
                  {t.period}
                </span>
                <h3 className="font-display text-xl text-ink mb-3 leading-tight">{t.title}</h3>
                <p className="font-body text-sm text-gray-mid leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Link
            href="/servicos"
            className="group block bg-ink p-8 text-left hover:bg-orange transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-orange block mb-3 group-hover:text-white/70">
              Para clientes
            </span>
            <h3 className="font-display text-2xl text-white leading-tight mb-3">
              Contratar narrativas
            </h3>
            <p className="font-body text-sm text-white/60 mb-5 group-hover:text-white/80">
              Cases, processo e formulário de orçamento.
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/50 group-hover:text-white group-hover:gap-4 transition-all">
              Ver serviços
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link
            href="/originais"
            className="group block bg-orange p-8 text-left hover:bg-yellow transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70 block mb-3 group-hover:text-ink/60">
              Para a audiência
            </span>
            <h3 className="font-display text-2xl text-white leading-tight mb-3 group-hover:text-ink">
              Ver os originais
            </h3>
            <p className="font-body text-sm text-white/80 mb-5 group-hover:text-ink/70">
              A série animada e os projetos autorais do estúdio.
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white group-hover:text-ink group-hover:gap-4 transition-all">
              Ver originais
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}
