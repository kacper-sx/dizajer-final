import { Typography } from '../typography/typography'

type HeadingProps = {
  subHeading: string
  heading: string
}
export function Heading({ subHeading, heading }: HeadingProps) {
  return (
    <div className='flex flex-col items-center'>
      <Typography
        variant={'p'}
        weight={'extrabold'}
        className='text-dizajer-yellow text-center'
      >
        {subHeading}
      </Typography>
      <Typography variant={'h1'} weight={'black'} className='text-center'>
        {heading}
      </Typography>
    </div>
  )
}
