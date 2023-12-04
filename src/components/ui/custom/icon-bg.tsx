import Link from 'next/link'

type IconBaseProps = {
  href: string
  icon: JSX.Element
}

export function IconBase({ href, icon }: IconBaseProps) {
  return (
    <Link href={href}>
      <div className='flex w-[45px] h-[45px] bg-dizajer-red items-center justify-center text-2xl rounded-xl shadow-icon hover:shadow-icon-hover'>
        {icon}
      </div>
    </Link>
  )
}
