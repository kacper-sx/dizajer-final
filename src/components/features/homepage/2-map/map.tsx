import PolandIcon from './poland'
import { Typography } from '@/components/ui/typography/typography'
import { Banner } from '@/components/ui/custom/banner'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Map() {
  return (
    <div className='flex flex-col bg-dizajer-black lg:px-32 px-5 lg:pb-24 pb-8'>
      <Banner className='flex flex-col lg:flex-row py-6 px-8 lg:justify-between gap-4'>
        <div className='flex flex-col lg:justify-between gap-2'>
          <div className='flex flex-col lg:gap-2 gap-0'>
            <Typography variant={'h2'} weight={'black'}>
              Jesteśmy stąd
            </Typography>
            <Typography variant={'h3'} weight={'regular'}>
              i tu nam się opłaca
            </Typography>
            <Typography variant={'h3'} weight={'regular'}>
              jeździć
            </Typography>
          </div>
          <Link href='tel:+48 662 630 912' className='flex w-max '>
            <Button variant={'desireCall'}>Call me maybe!</Button>
          </Link>
          <div className='flex flex-col'>
            <Typography
              variant={'p'}
              weight={'bold'}
              className='text-dizajer-yellow'
            >
              a dokładnie z Parczewa, które lokalni artyści opisują tak:
            </Typography>
            <Typography variant={'h4'} weight={'bold'}>
              W miasteczku niewielkim, spokojnym gdzie Nurt Konotopy w dal cicho
              mknie...
            </Typography>
          </div>
        </div>
        <PolandIcon className='flex max-w-md' />
      </Banner>
    </div>
  )
}
