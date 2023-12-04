import { prompt, karla } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const typographyVariants = cva(cn(''), {
  variants: {
    variant: {
      h1: 'text-[32px] leading-130% lg:text-[64px] font-heading',
      h2: 'text-2xl leading-130% lg:text-5xl font-heading',
      h3: 'text-xl leading-130% lg:text-[32px] font-sans',
      h4: 'text-lg leading-130% lg:text-2xl',
      p: 'text-base	leading-150%',
      small2: 'text-sm leading-130%',
    },
    weight: {
      black: 'font-black',
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      regular: 'font-normal',
      italic: 'italic',
    },
  },
  defaultVariants: {
    variant: 'p',
    weight: 'regular',
  },
})

type VariantPropType = VariantProps<typeof typographyVariants>

const variantElementMap: Record<
  NonNullable<VariantPropType['variant']>,
  string
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  small2: 'small',
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: string
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div'
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }
