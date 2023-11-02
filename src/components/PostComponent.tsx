import React from 'react'
import { Menu as HeadlessUIMenu, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import type { Location } from '../types'
import { ObjectId } from 'mongodb'

import { Loader } from '@googlemaps/js-api-loader'

import {
  ArrowPathRoundedSquareIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FlagIcon,
  HeartIcon,
  StarIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'
import type { Option, Action } from '../types'
import { Options, Actions, GOOGLE_MAPS_API_KEY } from '../lib/globals'

import joinClassNames from '../lib/joinClassNames'

export function Menu() {
  const options: Option[] = [
    {
      name: Options.Bookmark,
      icon: <StarIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />,
    },
    {
      name: Options.Report,
      icon: <FlagIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />,
    },
    {
      name: Options.Share,
      icon: <ArrowTopRightOnSquareIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />,
    },
  ]

  return (
    <>
      <div className='flex flex-shrink-0 self-center'>
        <HeadlessUIMenu as='div' className='relative inline-block text-left'>
          <div>
            <HeadlessUIMenu.Button className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-300'>
              <span className='sr-only'>Open options</span>
              <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
            </HeadlessUIMenu.Button>
          </div>

          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <HeadlessUIMenu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right bg-neutral-950 outline outline-1 outline-neutral-900 ring-1 ring-black ring-opacity-5'>
              {options.map((option) => {
                return (
                  <HeadlessUIMenu.Item key={option.name}>
                    {({ active }) => (
                      <button
                        className={joinClassNames(
                          active ? 'bg-neutral-900 text-neutral-300' : '',
                          'flex w-full px-4 py-2 text-left text-sm text-neutral-400',
                        )}
                      >
                        {option.icon}
                        <span>{option.name}</span>
                      </button>
                    )}
                  </HeadlessUIMenu.Item>
                )
              })}
            </HeadlessUIMenu.Items>
          </Transition>
        </HeadlessUIMenu>
      </div>
    </>
  )
}
Post.Menu = Menu

export function Avatar({ src }) {
  return (
    <>
      <div className='flex-shrink-0'>
        <img className='h-10 w-10 rounded-full' src={src} alt='Post avatar' />
      </div>
    </>
  )
}
Post.Avatar = Avatar

export function Author({ name, username }) {
  return (
    <>
      <p className='text-sm'>
        <Link to='#' className='mr-2 font-semibold text-white hover:underline'>
          {name}
        </Link>
        <Link to='#' className='text-gray-500 hover:underline'>
          @{username}
        </Link>
      </p>
    </>
  )
}
Post.Author = Author

function Timestamp({ value }) {
  return (
    <>
      <p className='text-sm text-gray-500'>
        <Link to='#' className='hover:underline'>
          {value}
        </Link>
      </p>
    </>
  )
}
Post.Timestamp = Timestamp

export function Content({ _id, text, location }: { _id: ObjectId; text: string; location: Location }) {
  const loader = new Loader({
    apiKey: 'AIzaSyC6ujuGGn488bptn_U3pTaMu1BPQZG6UrY',
    version: 'weekly',
  })

  if (location.isUsing && process.env.NODE_ENV === 'production') {
    loader
      .importLibrary('maps')
      .then(async () => {
        const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
        new Map(document.getElementById(_id.toString()) as HTMLElement, {
          center: { lat: location.latitude, lng: location.longitude },
          zoom: 15,
          mapId: GOOGLE_MAPS_API_KEY,
          gestureHandling: 'none',
          mapTypeControl: false,
          fullscreenControl: true,
          streetViewControl: false,
          clickableIcons: false,
          zoomControl: false,
          keyboardShortcuts: false,
        })
      })
      .catch((e: Error) => console.error(e))
  }

  return (
    <>
      <div className='my-3 flex flex-col justify-between gap-3 md:h-48 md:flex-row'>
        <p className='min-h-full flex-1 overflow-y-auto overscroll-y-auto break-normal bg-gradient-to-b text-sm'>
          {text}
        </p>
        {location.isUsing && (
          <div
            id={_id.toString()}
            className='lg:w-964 block h-48 w-full rounded-xl bg-neutral-900 outline outline-1 outline-neutral-800 md:h-full md:w-96 lg:w-64'
          ></div>
        )}
      </div>
    </>
  )
}
Post.Content = Content

export default function Post({ id, children }) {
  const actions: Action[] = [
    {
      name: Actions.Like,
      icon: <HeartIcon className='h-5 w-5 text-gray-400 hover:text-gray-300' aria-hidden='true' />,
    },
    {
      name: Actions.Repost,
      icon: <ArrowPathRoundedSquareIcon className='h-5 w-5 text-gray-400 hover:text-gray-300' aria-hidden='true' />,
    },
    {
      name: Actions.Comment,
      icon: <ChatBubbleOvalLeftEllipsisIcon className='h-5 w-5 text-gray-400 hover:text-gray-300' aria-hidden='true' />,
    },
  ]

  return (
    <>
      <div className='bg-neutral-950 p-3 outline outline-1 outline-neutral-900 sm:px-6'>
        {children}
        <div className='border-1 flex w-full justify-around border-t border-neutral-900 pt-3'>
          {actions.map((action) => {
            return (
              <div key={action.name}>
                <span className='sr-only'>{action.name}</span>
                {action.icon}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
