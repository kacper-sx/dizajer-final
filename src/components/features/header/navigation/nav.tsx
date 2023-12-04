'use client'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { useIsClient, useMediaQuery } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { navAtom } from '@/atoms/nav'
import { RemoveScroll } from 'react-remove-scroll'
import DesireIcon from '../desire-icon'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from './mobile-nav'
import { navListDataApp } from '../../../../data/nav-list-data'
import { Typography } from '@/components/ui/typography/typography'
import { IconBase } from '@/components/ui/custom/icon-bg'

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(navAtom)
  const isClient = useIsClient()
  const logo = {
    href: '/',
    icon: <DesireIcon className='w-[45px] h-[45px]' />,
  }
  return (
    <>
      <nav className='flex justify-between items-center w-full'>
        <IconBase icon={logo.icon} href={logo.href} />
        <div className='hidden md:flex gap-8 py-3'>
          {navListDataApp.map(({ name, href }, index) => (
            <Link key={index} href={href}>
              <Typography
                variant={'p'}
                className='text-dizajer-text active:text-sawers-red'
              >
                {name}
              </Typography>
            </Link>
          ))}
        </div>
        {isClient && isMobile && (
          <Hamburger
            label='open navigation'
            toggled={isMenuOpen}
            toggle={() => setMenuOpen((p) => ({ open: !p.open }))}
            duration={0.5}
            color='#d71f26'
          />
        )}
      </nav>
      <RemoveScroll enabled={isMenuOpen}>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <Navigation />
            </>
          )}
        </AnimatePresence>
      </RemoveScroll>
    </>
  )
}
