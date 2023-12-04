import { IconBase } from '@/components/ui/custom/icon-bg'
import { SocialsData } from '@/data/socials-data'

export function Socials() {
  return (
    <div className='flex gap-4 text-dizajer-black items-center'>
      {SocialsData.map(({ href, icon }, index) => (
        <IconBase key={index} href={href} icon={icon} />
      ))}
    </div>
  )
}
