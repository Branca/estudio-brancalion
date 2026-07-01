import HeroCarousel from '@/components/HeroCarousel'
import NossosTrabalhos from '@/components/NossosTrabalhos'
import QuemSomos from '@/components/QuemSomos'
import Bastidores from '@/components/Bastidores'
import TrabalheConosco from '@/components/TrabalheConosco'

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <NossosTrabalhos />
      <QuemSomos />
      <Bastidores />
      <TrabalheConosco />
    </main>
  )
}
