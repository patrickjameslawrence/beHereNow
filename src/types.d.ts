import React from 'react'
import ObjectId from 'mongodb'

export type Tab = {
  title: Tabs
  icon: React.ReactNode
}

export type UserTab = {
  title: UserTabs
  to?: string | undefined
  icon: React.ReactNode
}

export type Option = {
  name: Options
  icon: React.ReactNode
}
export type Action = {
  name: Actions
  icon: React.ReactNode
}

export type Button = {
  text: Buttons
  to: string
  icon: React.ReactNode
}

// API

export type Post = {
  _id?: ObjectId
  author: {
    _id?: ObjectId
    name: string
    credentials: Credentials
  }
  content: Content
  location: Location
  timestamp: Date
}
export type Content = {
  text: string
  location: Location
}
export type Location = {
  isUsing: boolean
  latitude: number
  longitude: number
}

export type User = {
  _id: ObjectId
  goTrueId?: string
  accountCreated?: Date
  accountUpdated?: Date
  isPrivate: boolean
  name: string
  credentials: Credentials
  city?: string
  stateOrProvince?: StatesAndProvinces
  country?: Countries
  posts?: {
    authored?: Post[]
    liked?: Post[]
    reposted?: Post[]
    bookmarked?: Post[]
  }
  blocked?: {
    users: ObjectId[]
    posts: ObjectId[]
  }
}
export type Credentials = {
  username: string
  email: string
  isConfirmed: boolean
}
