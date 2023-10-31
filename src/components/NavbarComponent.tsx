import React from 'react'
import { Link } from 'gatsby'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  GlobeAmericasIcon,
  MapIcon,
  MapPinIcon,
  UserCircleIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import type { Tab, UserTab } from '../types'
import { Tabs, UserTabs } from '../lib/globals'

import WideLogo from './assets/NavbarWideLogo'
import DesktopDefaultAvatar from './assets/NavbarDesktopDefaultAvatar'
import MobileDefaultAvatar from './assets/NavbarMobileDefaultAvatar'

import joinClassNames from '../lib/joinClassNames'

export default function Navbar({
  currentTab,
  updateCurrentTab,
}: {
  currentTab: Tabs
  updateCurrentTab: (tab: Tabs) => void
}): React.ReactNode {
  const tabs: Tab[] = [
    {
      title: Tabs.Explore,
      icon: <MapIcon className='h-6 w-6' aria-hidden='true' />,
    },
    {
      title: Tabs.Following,
      icon: <UserGroupIcon className='h-6 w-6' aria-hidden='true' />,
    },
    {
      title: Tabs.Nearby,
      icon: <MapPinIcon className='h-6 w-6' aria-hidden='true' />,
    },
    {
      title: Tabs.Global,
      icon: <GlobeAmericasIcon className='h-6 w-6' aria-hidden='true' />,
    },
  ]
  const userTabs: UserTab[] = [
    {
      title: UserTabs.Profile,
      to: '/profile',
      icon: <UserCircleIcon className='h-6 w-6' aria-hidden='true' />,
    },
    {
      title: UserTabs.Settings,
      to: '/settings',
      icon: <Cog6ToothIcon className='h-6 w-6' aria-hidden='true' />,
    },
    {
      title: UserTabs.LogOut,
      to: '/log-in',
      icon: <ArrowRightOnRectangleIcon className='h-6 w-6' aria-hidden='true' />,
    },
  ]

  return (
    <Disclosure as='nav' className='bg-neutral-950 outline outline-1 outline-neutral-900'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <WideLogo />
                </div>
                <div className='hidden md:ml-6 md:flex md:space-x-8'>
                  {tabs.map((tab: Tab): React.ReactNode => {
                    return (
                      <button
                        key={tab.title}
                        onClick={() => updateCurrentTab(Tabs[tab.title as keyof typeof Tabs])}
                        className={joinClassNames(
                          tab.title === currentTab
                            ? 'border-purple-500 hover:border-purple-500'
                            : 'border-neutral-900 hover:border-neutral-800',
                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors',
                        )}
                      >
                        {tab.title}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className='hidden md:ml-6 md:flex md:items-center'>
                <button
                  type='button'
                  className='relative rounded-full bg-neutral-900 p-1 text-neutral-400 outline outline-1 outline-neutral-900 transition-colors hover:bg-neutral-800 hover:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-2'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='relative flex rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-purple-500'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <DesktopDefaultAvatar />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right bg-neutral-950 outline outline-1 outline-neutral-900 ring-1 ring-black ring-opacity-5'>
                      {userTabs.map((userTab: UserTab): React.ReactNode => {
                        return (
                          <Menu.Item key={userTab.title}>
                            {({ active }) => (
                              <Link
                                to={userTab.to}
                                onClick={() => console.log('User logging out')}
                                className={joinClassNames(
                                  active ? 'bg-neutral-900 text-neutral-300' : '',
                                  'flex gap-3 px-4 py-2 text-sm text-neutral-400',
                                )}
                              >
                                {userTab.icon}
                                {userTab.title}
                              </Link>
                            )}
                          </Menu.Item>
                        )
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-full p-2 text-neutral-400 outline outline-1 outline-neutral-900 hover:bg-neutral-900 hover:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-purple-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {tabs.map((tab: Tab): React.ReactNode => {
                return (
                  <Disclosure.Button
                    key={tab.title}
                    as='button'
                    onClick={() => updateCurrentTab(Tabs[tab.title as keyof typeof Tabs])}
                    className={joinClassNames(
                      tab.title === currentTab
                        ? 'border-purple-700 text-purple-700'
                        : 'text-neutral-500 hover:border-purple-500 hover:text-purple-700',
                      'flex w-full gap-3 border-l-4 border-neutral-900 bg-neutral-950 py-2 pl-3 pr-4 text-left text-base font-medium transition-colors hover:bg-neutral-900',
                    )}
                  >
                    {tab.icon}
                    {tab.title}
                  </Disclosure.Button>
                )
              })}
            </div>
            <div className='border-t border-neutral-900'>
              <div className='flex items-center px-4 pb-4 pt-3 transition-colors hover:bg-neutral-900'>
                <Link to='/profile'>
                  <div className='flex-shrink-0'>
                    <MobileDefaultAvatar />
                  </div>
                </Link>
                <div className='ml-3'>
                  <Link to='/profile'>
                    <div className='text-base font-medium text-white'>John Doe</div>
                  </Link>
                  <Link to='/profile'>
                    <div className='text-sm font-medium text-neutral-500'>johndoe@example.com</div>
                    <div className='text-sm font-medium text-neutral-500'>@johndoe</div>
                  </Link>
                </div>
                <button
                  type='button'
                  className='relative ml-auto flex-shrink-0 rounded-full bg-neutral-900 p-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-purple-500'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                {userTabs.map((userTab: UserTab): React.ReactNode => {
                  return (
                    <Disclosure.Button
                      key={userTab.title}
                      as={Link}
                      onClick={() => console.log('User logging out')}
                      to={userTab.to}
                      className='flex gap-3 border-l-4 border-neutral-900 px-4 py-2 text-base font-medium text-neutral-500 transition-colors hover:border-purple-500 hover:bg-neutral-900 hover:text-purple-700'
                    >
                      {userTab.icon}
                      {userTab.title}
                    </Disclosure.Button>
                  )
                })}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
