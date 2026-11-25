import { NextResponse, type NextRequest } from 'next/server'

// Webcomic Centauri (estática em public/centauri).
// Usa req.url (caminho bruto) porque req.nextUrl remove a barra final.
// A barra é obrigatória para os caminhos relativos (css/, assets/) do index.html.
export function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url)

  if (pathname === '/centauri') {
    return NextResponse.redirect(new URL('/centauri/', req.url), 308)
  }
  if (pathname === '/centauri/') {
    return NextResponse.rewrite(new URL('/centauri/index.html', req.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/centauri', '/centauri/'] }
