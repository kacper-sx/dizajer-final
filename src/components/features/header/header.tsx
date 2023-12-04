'use client'
import { useAtom } from 'jotai'
import React from 'react'
import { navAtom } from '@/atoms/nav'
import { cn } from '@/lib/utils'
import NavBar from './navigation/nav'

export default function Header() {
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(navAtom)

  return (
    <div className='fixed flex top-0 z-40 w-full'>
      <header
        className={cn(
          'flex w-[1440px] items-center justify-between transition-all duration-500 s:px-5 s:py-4 s:backdrop-blur-[6px] lg:px-8 lg:py-4 lg:backdrop-blur-[8.5px]',
          isMenuOpen ? 'bg-dizajer-black' : 'bg-transparent'
        )}
      >
        <NavBar />
      </header>
    </div>
  )
}
