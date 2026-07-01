import Link from 'next/link'

// ─── Substitua o conteúdo abaixo pelo texto real do estúdio ───────────────
// Para a imagem: coloque em public/media/sobre/equipe.jpg
// e troque o <div className="aspect-[4/3]..."> por:
// <div className="relative aspect-[4/3]">
//   <Image src="/media/sobre/equipe.jpg" fill alt="Equipe Estúdio Brancalion" className="object-cover" />
// </div>
// ───────────────────────────────────────────────────────────────────────────

export default function QuemSomos() {
  return (
    <section id="sobre" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Visual — lado esquerdo */}
        <div className="relative">
          {/* Placeholder de imagem */}
          <div className="aspect-[4/3] bg-gray-mist flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/8 to-transparent" />
            <span
              className="font-display text-ink/10 select-none leading-none"
              style={{ fontSize: 'clamp(5rem, 15vw, 10rem)' }}
            >
              EB
            </span>
          </div>
          {/* Ornamentos */}
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-orange pointer-events-none" />
          <div className="absolute -top-5 -left-5 w-14 h-14 border-2 border-ink pointer-events-none" />
        </div>

        {/* Texto — lado direito */}
        <div>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-4">
            Quem somos
          </span>

          <h2 className="font-display text-ink leading-none mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Animação com alma<br />e propósito
          </h2>

          <p className="font-body text-gray-mid text-base leading-relaxed mb-4">
            O Estúdio Brancalion é um estúdio de animação independente localizado em Garopaba,
            Santa Catarina. Fundado por Mauricio Brancalion, trabalhamos com animação 2D, 3D e
            mix media, criando histórias que conectam e emocionam.
          </p>

          {/* ↓ Substitua por texto real sobre história/valores/missão */}
          <p className="font-body text-gray-mid text-base leading-relaxed mb-8">
            [Parágrafo sobre a história, os valores e a missão do estúdio. O que torna o
            Estúdio Brancalion único? Qual a proposta criativa? Quantas pessoas compõem a equipe?]
          </p>

          <Link
            href="/sobre"
            className="inline-flex items-center gap-3 bg-ink text-cream font-mono text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-orange transition-colors"
          >
            Saiba mais
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
