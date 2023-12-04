import { Typography } from '@/components/ui/typography/typography'
import { Banner } from '@/components/ui/custom/banner'
import { AdvantagesData } from './data/advantages-data'

type AdvantageData = {
  title: string
  insideIcon: JSX.Element
  content: string
}

export function AdvantageSection({
  title,
  insideIcon,
  content,
}: AdvantageData) {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-4 gap-5 items-center'>
      <Banner className='flex flex-col gap-4 px-8 py-6'>
        <div className='flex gap-4 items-center'>
          {insideIcon}
          <Typography variant={'h4'} weight={'medium'}>
            {title}
          </Typography>
        </div>
        <Typography
          variant={'small2'}
          weight={'regular'}
          className='text-dizajer-text'
        >
          {content}
        </Typography>
      </Banner>
    </div>
  )
}
