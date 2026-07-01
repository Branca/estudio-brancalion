import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { label: 'Portfólio',  href: '/portfolio'  },
  { label: 'Notícias',   href: '/noticias'   },
  { label: 'Bastidores', href: '/bastidores' },
  { label: 'Sobre',      href: '/sobre'      },
  { label: 'Contato',    href: '/contato'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Grid superior */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Marca */}
          <div className="md:col-span-2">
            <Image
              src="/logo-estudio.png"
              alt="Estúdio Brancalion"
              width={160}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="font-body text-sm text-white/55 leading-relaxed max-w-xs mb-6">
              Estúdio de animação 2D, 3D e mix media.<br />
              Garopaba, Santa Catarina — Brasil.
            </p>
            {/* Redes sociais — substitua os hrefs pelos links reais */}
            <div className="flex gap-5">
              <a href="https://instagram.com/estudiobrancalion" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-orange transition-colors" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="https://youtube.com/@estudiobrancalion" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-orange transition-colors" aria-label="YouTube">
                <IconYouTube />
              </a>
              <a href="https://vimeo.com/estudiobrancalion" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-orange transition-colors" aria-label="Vimeo">
                <IconVimeo />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/35 mb-6">
              Menu
            </h4>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="font-body text-sm text-white/60 hover:text-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/35 mb-6">
              Contato
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/60">
              <li>
                <a href="mailto:estudiobrancalion@gmail.com"
                  className="hover:text-orange transition-colors">
                  estudiobrancalion@gmail.com
                </a>
              </li>
              {/* Substitua pelo endereço e telefone reais */}
              <li className="leading-relaxed">
                Garopaba<br />
                Santa Catarina — SC<br />
                Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4
            font-mono text-[10px] text-white/30">
          <span>© {year} Estúdio Brancalion. Todos os direitos reservados.</span>
          <span>Animação 2D · 3D · Mix Media</span>
        </div>
      </div>
    </footer>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconVimeo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z"/>
    </svg>
  )
}
