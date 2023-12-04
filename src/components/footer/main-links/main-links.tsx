import { MainLinksSections } from './section'
import { navListDataApp } from '@/data/nav-list-data'

export default function MainLinks() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6'>
      {navListDataApp.map(({ name, href }, index) => (
        <MainLinksSections key={index} href={href} name={name} />
      ))}
    </div>
  )
}
