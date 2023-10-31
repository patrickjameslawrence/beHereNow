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
  author: User
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
  isPrivate: boolean
  name: string
  credentials: Credentials
  city?: string
  stateOrProvince?: StatesAndProvinces
  country?: Countries
}

type Credentials = {
  username: string
  email: string
  password: string
}
