import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

import Navbar from './NavbarComponent'
import Feed from './FeedComponent'

import { Tabs } from '../lib/globals'

export default function Layout({
  children,
}: {
  title?: string
  description?: string
  children: React.ReactNode
}): React.ReactNode {
  const [currentTab, setCurrentTab] = React.useState(Tabs.Explore)
  return (
    <>
      <div className='h-full p-7 text-white'>
        <Navbar currentTab={currentTab} updateCurrentTab={setCurrentTab} />
        <header className='flex justify-between align-middle md:px-9'>
          <h1 className='my-7 text-5xl font-bold'>{currentTab}</h1>
          <button
            type='button'
            className='text-md my-7 inline-flex items-center bg-neutral-950 px-3 font-semibold text-neutral-400 outline outline-1 outline-neutral-900 hover:bg-neutral-900 hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500'
          >
            <PlusIcon className='mr-3 h-5 w-5' />
            New post
          </button>
        </header>
        <main>
          <Feed type={currentTab} />
          {children}
        </main>
      </div>
    </>
  )
}
