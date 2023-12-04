import { AdvantagesData } from './data/advantages-data'
import { AdvantageSection } from './section'
import { Heading } from '@/components/ui/custom/heading'

export function Advantages() {
  const workdata = AdvantagesData()
  return (
    <div className='flex flex-col bg-dizajer-black lg:px-32 px-5 lg:py-24 py-8 lg:gap-8 gap-5 items-center'>
      <Heading
        subHeading={'postrzeleni, nieprofesjonali i głośni'}
        heading={'Ale to nie koniec naszych zalet!'}
      />
      <div className='flex flex-col lg:flex-row lg:gap-16 gap-8'>
        {workdata.map(({ title, insideIcon, content }, index) => (
          <div key={`${index}-how-we-work`}>
            <AdvantageSection
              title={title}
              insideIcon={insideIcon}
              content={content}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
