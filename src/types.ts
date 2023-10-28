import React from 'react'

export type Tab = {
  title: Tabs,
  icon: React.ReactNode
}

export type UserTab = {
  title: UserTabs,
  isLink: boolean,
  to?: string | undefined,
  icon: React.ReactNode
}

export type Option = {
  name: Options,
  icon: React.ReactNode
}


export enum Tabs {
  Explore = "Explore",
  Following = "Following",
  Nearby = "Nearby",
  Global = "Global",
}

export enum UserTabs {
  Profile = "Profile",
  Settings = "Settings",
  SignOut = "Sign out",
}

export enum Options {
  AddToFavorites = "Add to Favorites",
  Report = "Report",
  Share = "Share",
}
