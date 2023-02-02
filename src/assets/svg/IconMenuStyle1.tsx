import { styleToObject } from '@/utils'
import React, { memo } from 'react'

const IconMenuStyle1: React.FC<{ size?: number }> = memo((props) => {
  const { size = 48 } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <defs>
        <rect id="path_0" x="0" y="0" width="48" height="48" />
      </defs>
      <g opacity="1" transform="translate(0 0)  rotate(0 24 24)">
        <rect
          fill="#F0F2F5"
          opacity="1"
          transform="translate(0 0)  rotate(0 24 24)"
          x="0"
          y="0"
          width="48"
          height="48"
        />
        <mask id="bg-mask-0" fill="white">
          <use xlinkHref="#path_0" />
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            id="矩形 1"
            fillRule="evenodd"
            style={styleToObject('fill:#222222')}
            transform="translate(0 0)  rotate(0 7.5 24)"
            opacity="1"
            d="M0,48L15,48L15,0L0,0L0,48Z "
          />
          <path
            id="矩形 2"
            fillRule="evenodd"
            style={styleToObject('fill:#FFFFFF')}
            transform="translate(15 0)  rotate(0 16.5 6)"
            opacity="1"
            d="M0,12L33,12L33,0L0,0L0,12Z "
          />
        </g>
      </g>
    </svg>
  )
})

export default IconMenuStyle1
