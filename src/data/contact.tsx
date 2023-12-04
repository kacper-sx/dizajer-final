import { Mail, MapPin, Phone } from 'lucide-react'

type ContactType = {
  name: string
  href: string
  icon: JSX.Element
}

export const contactData: ContactType[] = [
  {
    name: '21-200 Parczew woj. lubelskie',
    href: 'https://maps.app.goo.gl/Yib4acVSJJDF8yEB9',
    icon: <MapPin className='h-8 w-8 text-dizajer-red' />,
  },

  {
    name: '+48 662 630 912',
    href: 'tel:+48 662 630 912',
    icon: <Phone className='h-8 w-8 text-dizajer-red' />,
  },
  {
    name: 'dizajerofficial@gmail.com',
    href: 'mailto:dizajerofficial@gmail.com',
    icon: <Mail className='h-8 w-8 text-dizajer-red' />,
  },
]
