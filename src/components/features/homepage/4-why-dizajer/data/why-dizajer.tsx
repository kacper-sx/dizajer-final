import Link from 'next/link'
import { BiLogoYoutube } from 'react-icons/bi'

type AccordionData = {
  title: string
  content: React.ReactNode
}

export const AccordionData: AccordionData[] = [
  {
    title: 'Muzyka',
    content:
      'Muzykujemy od ponad 9 lat. Mamy za sobą występy na imprezach takie jak dożynki, dni miasta, osiemnastki, koncerty dla studentów czy studniówki. Specjalizujemy się w polskiej muzyce rozrywkowej, a reszta to kwestia aranżacji...',
  },
  {
    title: 'Towarzystwo',
    content: (
      <>
        Dizajer to przede wszystkim uśmiechnięci, przystojni i kulturalni
        mężczyźni. Potrafimy dostosować się do każdego towarzystwa. Ze
        wszystkimi łapiemy nić porozumienia i to nie tylko przy butelce...
        Jednak my som dobrze wychowani i na każdą propozycję spożycia wyrobów
        etanolowych mówimy stanowcze: ({''}
        <Link
          href={'https://youtu.be/n4egL4oPKRo?t=128'}
          className='text-dizajer-yellow'
          rel='noreferrer noopener'
          target={'_blank'}
        >
          {''}
          &quot;click me&quot;{' '}
        </Link>{' '}
        )
      </>
    ),
  },
  {
    title: 'Kinematografia',
    content: (
      <div className=''>
        Żeby odwrócić uwagę od naszego nieczystego grania, przed każdym występem
        wypuszczamy głośne teasery. Najgłośniejsza produkcja Dizajera to wysoko
        oceniany przez krytyków serial detektywistyczny
        <a
          href={'https://youtu.be/n4egL4oPKRo'}
          className='text-dizajer-red relative pl-8'
          rel='noreferrer noopener'
          target={'_blank'}
        >
          <BiLogoYoutube className='absolute left-2 -top-0.5 w-6 h-6' />{' '}
          &quot;Ojciec Kacper&quot;.
        </a>
      </div>
    ),
  },
  {
    title: 'Barmaństwo',
    content: (
      <>
        Nie zna życia ten co nie był na afterze Dizajera. Koncert koncertem ale,
        <Link
          href={'https://youtu.be/n4egL4oPKRo?t=545'}
          className='text-dizajer-yellow'
          rel='noreferrer noopener'
          target={'_blank'}
        >
          {' '}
          &quot;człowiek nie wielbłąd - wypić se musi.&quot;{' <- click me '}
        </Link>
        Gdy skosztujesz naszych drinków zapomnisz o wszystkich troskach i
        problemach. Być może na prawdę nic nie będziesz pamiętał...
      </>
    ),
  },
]
