import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const blurVariants = cva('absolute blur-3xl', {
  variants: {
    variant: {
      small: 'w-[100px] h-[100px]',
      middle: 'w-[172px] h-[100px]',
      big: 'h-[129px] w-[228px]',
    },
    color: {
      red: 'bg-dizajer-red',
      yellow: 'bg-dizajer-yellow',
    },
  },
})
type BlurProps = VariantProps<typeof blurVariants> & {
  className?: string
}

export const Blur: React.FC<BlurProps> = ({ className, ...props }) => {
  const combinedClassName = cn(blurVariants(props), className)

  return <div className={combinedClassName}>{/* Your content goes here */}</div>
}
