import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const bannerVariants = cva(
  'bg-gradient-to-r from-[#161213] via-[rgba(23,23,23,0)] to-black border border-dizajer-brown drop-shadow-lg',
  {
    variants: {
      variant: {
        default: 'rounded-2xl lg:rounded-32',
        'less-rounded': 'rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const Banner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof bannerVariants>
>(({ children, className, variant }, ref) => {
  return (
    <div ref={ref} className={cn(bannerVariants({ variant }), className)}>
      {children}
    </div>
  )
})

Banner.displayName = 'Banner'
