import React from 'react'
import OnjectId from 'mongodb'

export type Tab = {
  title: Tabs
  icon: React.ReactNode
}

export type UserTab = {
  title: UserTabs
  isLink: boolean
  to?: string | undefined
  icon: React.ReactNode
}

export type Option = {
  name: Options
  icon: React.ReactNode
}

// API

const ObjectId = mongodb.ObjectId

type Post = {
  _id: ObjectId
  author: User
  content: string
  location: Location
  timestamp: Date
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
