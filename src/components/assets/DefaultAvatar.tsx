import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function WideLogo() {
  return (
    <StaticImage
      className='h-12 w-12 rounded-full outline outline-1 outline-neutral-900'
      src='../../images/defaultAvatar.svg'
      alt='Default avatar'
    />
  )
}
