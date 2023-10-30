import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function WideLogo() {
  return (
    <StaticImage
      className='h-8 w-24 rounded-full outline outline-1 outline-neutral-900'
      src='../../images/logos/wide.svg'
      alt='BeHereNow logo'
    />
  )
}
