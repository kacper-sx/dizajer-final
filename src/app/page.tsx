import Hero from '@/components/features/homepage/0-hero/hero'
import { Banner } from '@/components/ui/custom/banner'
import { Heading } from '@/components/ui/custom/heading'
import { Advantages } from '@/components/features/homepage/1-advantages/advantages'
import { Map } from '@/components/features/homepage/2-map/map'
import { WhyDizajer } from '@/components/features/homepage/4-why-dizajer/why-dizajer'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <Advantages />
      <Map />
      <WhyDizajer />
    </main>
  )
}
