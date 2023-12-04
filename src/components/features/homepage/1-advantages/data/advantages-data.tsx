import { FiMap, FiGrid, FiHeart } from 'react-icons/fi'

type WorkData = {
  title: string
  insideIcon: JSX.Element
  content: string
}

export function AdvantagesData() {
  const howWeWorkData: WorkData[] = [
    {
      title: 'Lokalizacja',
      insideIcon: <FiMap className='w-8 h-8 text-dizajer-red' />,
      content:
        'Zespół z miasta musztardy, keczupu i religijnie inspirujących drzew',
    },
    {
      title: 'Wirtuozeria',
      insideIcon: <FiGrid className='w-8 h-8 text-dizajer-red' />,
      content:
        'Zespół gra tak nieczysto i nierówno, że nawet stary wraca z mlekiem... ',
    },
    {
      title: 'Humor',
      insideIcon: <FiHeart className='w-8 h-8 text-dizajer-red' />,
      content:
        'Zespół słynie z takiej satyry, że z koncertu bezdomni uciekają na chatę...',
    },
  ]
  return howWeWorkData
}
