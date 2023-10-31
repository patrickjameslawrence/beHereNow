import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function DefaultAvatar() {
  return (
    <StaticImage
      className='outline-3 h-10 w-10 rounded-full outline outline-neutral-700'
      src='../../images/defaultAvatar.svg'
      alt='Default avatar'
    />
  )
}
