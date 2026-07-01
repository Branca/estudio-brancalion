'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const nav = [
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Bastidores', href: '/bastidores' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'
  // Header transparente só na home quando não rolou; sólido em todas as outras páginas
  const solid = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-cream shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-estudio.png"
            alt="Estúdio Brancalion"
            width={160}
            height={48}
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              solid ? '' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-[11px] tracking-widest uppercase transition-colors hover:text-orange ${
                solid ? 'text-ink' : 'text-white'
              } ${pathname === href ? 'text-orange' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Redes sociais — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <SocialLinks solid={solid} />
        </div>

        {/* Hamburger — mobile */}
        <button
          className={`md:hidden p-2 ml-auto ${solid ? 'text-ink' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream ${
          menuOpen ? 'max-h-screen border-t border-gray-mist' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block font-mono text-xs tracking-widest uppercase hover:text-orange transition-colors ${
                pathname === href ? 'text-orange' : 'text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-5 pt-4 border-t border-gray-mist">
            <SocialLinks solid />
          </div>
        </div>
      </div>
    </header>
  )
}

function SocialLinks({ solid }: { solid: boolean }) {
  const cls = solid
    ? 'text-ink hover:text-orange'
    : 'text-white hover:text-yellow'
  return (
    <>
      {/* Substitua os hrefs pelos perfis reais */}
      <a href="https://instagram.com/estudiobrancalion" target="_blank" rel="noopener noreferrer"
        className={`transition-colors ${cls}`} aria-label="Instagram">
        <IconInstagram />
      </a>
      <a href="https://youtube.com/@estudiobrancalion" target="_blank" rel="noopener noreferrer"
        className={`transition-colors ${cls}`} aria-label="YouTube">
        <IconYouTube />
      </a>
      <a href="https://vimeo.com/estudiobrancalion" target="_blank" rel="noopener noreferrer"
        className={`transition-colors ${cls}`} aria-label="Vimeo">
        <IconVimeo />
      </a>
    </>
  )
}

function IconInstagram() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconVimeo() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z"/>
    </svg>
  )
}
