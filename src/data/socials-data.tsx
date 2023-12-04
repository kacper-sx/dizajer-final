import { BiLogoFacebook, BiLogoYoutube, BiLogoTiktok } from 'react-icons/bi'

import { AiFillInstagram } from 'react-icons/ai'

type SocialItemsProps = {
  icon: JSX.Element
  href: string
}

export const SocialsData: SocialItemsProps[] = [
  {
    href: 'https://www.facebook.com/desire.parczew',
    icon: <BiLogoFacebook />,
  },
  {
    href: 'https://www.instagram.com/czy_to_dizajer',
    icon: <AiFillInstagram />,
  },
  {
    href: 'https://www.youtube.com/@DizajerOfficial',
    icon: <BiLogoYoutube />,
  },
  {
    href: 'https://www.tiktok.com/@czy_to_dizajer',
    icon: <BiLogoTiktok />,
  },
]
