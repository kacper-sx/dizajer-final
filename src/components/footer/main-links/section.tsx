import Link from 'next/link'
import React from 'react'

import { Typography } from '@/components/ui/typography/typography'

type MainLinksType = {
  name: string
  href: string
}

export function MainLinksSections({ name, href }: MainLinksType) {
  return (
    <div className='flex flex-col gap-4'>
      <Link href={href}>
        <Typography
          variant={'h4'}
          weight={'medium'}
          className='text-dizajer-text text-center decoration-dizajer-red underline underline-offset-8 max-w-max'
        >
          {name}
        </Typography>
      </Link>
    </div>
  )
}
