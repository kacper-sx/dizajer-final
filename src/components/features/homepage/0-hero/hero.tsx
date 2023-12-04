import Image from 'next/image'
import { Typography } from '@/components/ui/typography/typography'
import { Button } from '@/components/ui/button'
import Background from './background/background'
import Vector from './background/vector'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className='relative z-10 min-h-[800px]'>
      <Background />

      <div className='flex flex-col w-full px-5 lg:gap-12 min-h-[800px] gap-8 pt-[120px] lg:pt-[180px] lg:justify-center items-center'>
        <Image
          id='image'
          src='/photos/logo.png'
          alt='logo'
          width={750}
          height={240}
          className='object-cover max-w-[280px] m:max-w-[320px] l:max-w-[350px] md:max-w-xl lg:max-w-3xl'
          priority={true}
        />
        <div className='flex flex-col lg:items-start'>
          <Typography
            variant={'h1'}
            weight={'black'}
            className='text-center lg:text-start'
          >
            MOŻE NIERÓWNO ZA TO NIECZYSTO!
          </Typography>
          <Typography
            variant={'h3'}
            weight={'extrabold'}
            className='text-dizajer-yellow text-center lg:text-start'
          >
            czyli najlepszy zespół po tej stronie piwonii
          </Typography>
          <Link
            href='tel:+48 662 630 912'
            className='flex lg:mt-12 mt-8 lg:place-self-end w-max place-self-center'
          >
            <Button variant={'desireCall'}>Call me maybe!</Button>
          </Link>
        </div>
        <AiOutlineArrowDown className='text-dizajer-yellow self-center w-16 h-24 animate-bounce' />
      </div>
    </div>
  )
}
