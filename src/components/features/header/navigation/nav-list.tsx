'use client'
import { m } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { navAtom } from '@/atoms/nav'
import { navListDataApp } from '../../../../data/nav-list-data'
import { Typography } from '@/components/ui/typography/typography'

import { cn } from '@/lib/utils'
import {
  navListItemVariants,
  navListVariants,
} from '../variants/HeaderVariants'
import Link from 'next/link'

export function NavigationList() {
  const setMobileNavState = useSetAtom(navAtom)
  return (
    <m.ul
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={navListVariants}
      className='flex w-max flex-col gap-8 text-xl [&_li]:w-fit mx-auto'
    >
      {navListDataApp.map(({ name, href }, index) => (
        <m.li
          key={index}
          variants={navListItemVariants}
          className='flex mx-auto'
        >
          <Link
            href={href}
            onClick={() => {
              setMobileNavState({ open: false })
            }}
            className='font-medium bg-clip-text active:bg-link-blue active:text-transparent'
          >
            <Typography
              variant={'h2'}
              weight={'semibold'}
              className='border-b-2 border-dizajer-red text-center'
            >
              {name}
            </Typography>
          </Link>
        </m.li>
      ))}
    </m.ul>
  )
}
