import React from 'react'

function Vector(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 652 221'
      {...props}
    >
      <path
        stroke='url(#paint0_linear_23_7)'
        d='M620.956 1L299.721 220.171H453.44L651 124.996 620.956 1zm0 0L112.045 220.171H1L620.956 1z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_23_7'
          x1='593.394'
          x2='593.394'
          y1='-0.829'
          y2='220.171'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D71F26'></stop>
          <stop offset='1' stopColor='#F1D302'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Vector
