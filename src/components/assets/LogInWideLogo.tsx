import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function WideLogo() {
  return (
    <StaticImage
      className='mx-auto block h-32 w-full max-w-7xl animate-pulse rounded-full outline outline-1 outline-neutral-900'
      src='../../images/logos/wide.svg'
      alt='BeHereNow logo'
    />
  )
}
