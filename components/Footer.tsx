import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { label: 'Serviços',  href: '/servicos'  },
  { label: 'Originais', href: '/originais' },
  { label: 'Sobre',     href: '/sobre'     },
]

const YOUTUBE  = 'https://youtube.com/@estudiobrancalion'
const INSTAGRAM = 'https://instagram.com/estudiobrancalion'
const BEHANCE   = 'https://www.behance.net/estudiobrancalion'
const EMAIL     = 'estudiobrancalion@gmail.com'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-logo-blue text-white">

      {/* CTA strip */}
      <div className="border-b border-white/8 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3
              className="font-display text-white leading-none mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Vamos trabalhar juntos?
            </h3>
            <p className="font-body text-sm text-white/45">
              Envie um briefing ou acompanhe nossas narrativas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/servicos#contato"
              className="inline-flex items-center gap-2 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-5 py-3 hover:bg-yellow hover:text-ink transition-colors"
            >
              Solicitar orçamento
            </Link>
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-mono text-[11px] tracking-widest uppercase px-5 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              <IconYouTube />
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Marca */}
          <div className="md:col-span-2">
            <Image
              src="/logo-estudio.png"
              alt="Estúdio Brancalion"
              width={160}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="font-body text-sm text-white/45 leading-relaxed max-w-xs mb-5">
              Narrativas visuais, audiovisuais<br />
              e interativas. Garopaba, SC — Brasil.
            </p>
            <div className="flex gap-5">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="text-white/35 hover:text-orange transition-colors" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer"
                className="text-white/35 hover:text-orange transition-colors" aria-label="YouTube">
                <IconYouTube />
              </a>
              <a href="https://www.linkedin.com/company/106661923/" target="_blank" rel="noopener noreferrer"
                className="text-white/35 hover:text-orange transition-colors" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a href={BEHANCE} target="_blank" rel="noopener noreferrer"
                className="text-white/35 hover:text-orange transition-colors" aria-label="Behance">
                <IconBehance />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-5">
              Menu
            </h4>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="font-body text-sm text-white/50 hover:text-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-5">
              Contato
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/50">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-orange transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="leading-relaxed">
                Garopaba<br />
                Santa Catarina — SC<br />
                Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] text-white/25">
          <span>© {year} Estúdio Brancalion. Todos os direitos reservados.</span>
          <span>Visual · Audiovisual · Interativo</span>
        </div>
      </div>
    </footer>
  )
}

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function IconBehance() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.49.36-1.06.62-1.7.78-.64.17-1.3.25-1.99.25H0V4.51l6.938-.007zm-.498 5.93c.577 0 1.04-.13 1.395-.4.354-.27.53-.69.53-1.26 0-.32-.058-.58-.172-.8-.116-.22-.27-.39-.472-.52-.2-.13-.43-.22-.695-.27-.265-.05-.54-.07-.83-.07H3.16v3.32h3.28zm.187 6.18c.32 0 .618-.03.9-.09s.526-.17.737-.33c.21-.16.376-.37.5-.63.12-.26.186-.6.186-1.01 0-.81-.217-1.38-.655-1.72-.44-.34-1.02-.51-1.75-.51H3.16v4.29h3.467zm8.37-1.17c.33.32.817.48 1.457.48.456 0 .844-.11 1.17-.34.328-.23.528-.48.602-.74h2.336c-.374 1.16-.944 1.99-1.716 2.49-.77.5-1.71.75-2.81.75-.763 0-1.45-.12-2.06-.36-.612-.24-1.13-.59-1.558-1.04-.427-.45-.755-1-.983-1.63-.23-.63-.344-1.33-.344-2.1 0-.74.118-1.43.353-2.06.235-.63.57-1.18 1.004-1.64.435-.47.958-.83 1.568-1.09.61-.26 1.288-.39 2.03-.39.83 0 1.558.16 2.18.47.62.31 1.13.73 1.533 1.26.403.53.694 1.14.87 1.82.177.68.238 1.4.183 2.15H14.5c.04.74.25 1.29.497 1.61zm2.56-4.35c-.27-.3-.704-.45-1.305-.45-.385 0-.703.07-.955.2-.252.13-.456.3-.61.5-.154.2-.26.41-.317.63-.058.22-.09.42-.098.61h3.847c-.083-.63-.29-1.19-.562-1.49zm-3.35-4.43h4.893v1.15H14.21V6.66z"/>
    </svg>
  )
}
