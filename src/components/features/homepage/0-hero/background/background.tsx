import Vector from './vector'
import { Blur } from './blur'
export default function Background() {
  return (
    <>
      <Blur
        variant={'small'}
        color={'yellow'}
        className='left-[65px] top-[209px] hidden md:block'
      />
      <Blur
        variant={'big'}
        color={'red'}
        className='left-[130px] top-[130px] hidden md:block'
      />
      <Blur
        variant={'big'}
        color={'red'}
        className='left-[35%] top-[527px] hidden lg:block'
      />
      <Blur
        variant={'middle'}
        color={'yellow'}
        className='left-[68px] top-[740px] hidden lg:block'
      />
      <Blur
        variant={'small'}
        color={'yellow'}
        className='left-[1254px] top-[330px] hidden 2xl:block'
      />

      <Vector className='absolute w-[650px] h-[239px] top-[71%] hidden lg:block' />
    </>
  )
}
