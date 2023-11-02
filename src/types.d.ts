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

type Post = {
  _id: ObjectId
  author: {
    _id: ObjectId
    name: string
    credentials: Credentials
  }
  content: Content
  location: Location
  timestamp: Date
}
type Content = {
  text: string
  location: Location
}
type Location = {
  isUsing: boolean
  latitude: number
  longitude: number
}

type User = {
  _id: ObjectId
  accountCreated: Date
  accountUpdated?: Date
  isPrivate: boolean
  name: string
  credentials: Credentials
  city?: string
  stateOrProvince?: StatesAndProvinces
  country?: Countries
  blocked?: {
    users: ObjectId[]
    posts: ObjectId[]
  }
}
type Credentials = {
  netlifyId: string
  username: string
  email: string
}
