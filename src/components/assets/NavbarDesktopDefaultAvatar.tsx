import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function DefaultAvatar() {
  return (
    <StaticImage
      className='h-8 w-8 rounded-full outline outline-1 outline-neutral-700'
      src='../../images/defaultAvatar.svg'
      alt='Default avatar'
    />
  )
}
