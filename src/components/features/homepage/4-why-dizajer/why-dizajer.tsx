'use client'

import { Typography } from '@/components/ui/typography/typography'
import { AccordionCard } from './accordion-card'
import { Heading } from '@/components/ui/custom/heading'
import { m } from 'framer-motion'

export function WhyDizajer() {
  return (
    <div className='flex flex-col items-center bg-dizajer-black px-5 pb-8 lg:gap-8 gap-5 lg:pb-24 lg:px-32'>
      <Heading
        subHeading={'nie polecamy, ale do odważnych świat należy'}
        heading={'Co ten Dizajer właściwie potrafi?'}
      />
      <AccordionCard className='w-full' />
    </div>
  )
}
