import type { Metadata } from 'next'
import HomeHero from '@/components/HomeHero'
import HomeShowcase from '@/components/HomeShowcase'

export const metadata: Metadata = {
  title: 'Estúdio Brancalion — Narrativas visuais, audiovisuais e interativas',
  description:
    'Estúdio de criação de narrativas. Quadrinhos e ilustração, animação 2D/3D, webcomics interativas e games. Para clientes e em produções próprias. Garopaba, SC.',
  openGraph: {
    title: 'Estúdio Brancalion',
    description: 'Narrativas visuais, audiovisuais e interativas. Garopaba, SC.',
    url: 'https://estudio-brancalion.vercel.app',
    siteName: 'Estúdio Brancalion',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeShowcase />
    </main>
  )
}
