import { Typography } from '@/components/ui/typography/typography'

import React from 'react'

export default function BottomFooter() {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between py-4'>
      <Typography variant='small2' className='text-dizajer-text'>
        ©2023 - DIZAJER | All right reserved
      </Typography>

      <Typography variant='small2' className='text-dizajer-text'>
        Designed and developed by Dizajer
      </Typography>
    </div>
  )
}
