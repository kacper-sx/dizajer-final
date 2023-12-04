import Link from 'next/link'
import React from 'react'
import BottomFooter from './bottom-section/bottom-footer'
import { MainContact } from '@/components/common/main-contact'
import { Typography } from '@/components/ui/typography/typography'
import MainLinks from './main-links/main-links'
import Image from 'next/image'
import { Socials } from './socials/socials'

export default function Footer() {
  return (
    <div className='flex flex-col w-full px-5 lg:px-32'>
      <div className='flex flex-col gap-10 lg:items-center items-start lg:justify-between lg:flex-row py-12 border-b-2 border-dizajer-text'>
        <div className='flex flex-col lg:w-[40%] w-11/12 lg:gap-10 gap-6 items-center'>
          <Link href={'/'} className=' place-self-center'>
            <Image
              id='image'
              src='/photos/logo.png'
              alt='logo'
              width={750}
              height={240}
              className='object-cover'
              priority={true}
            />
          </Link>
          <Socials />
        </div>
        <div className='flex flex-col gap-3'>
          <Typography
            variant={'h3'}
            weight={'semibold'}
            className='text-dizajer-text'
          >
            Linki Ogólne
          </Typography>
          <MainLinks />
        </div>
        <div className='flex flex-col gap-3'>
          <Typography
            variant={'h3'}
            weight={'semibold'}
            className='text-dizajer-text'
          >
            Główny Kontakt
          </Typography>
          <MainContact />
        </div>
      </div>

      <BottomFooter />
    </div>
  )
}
