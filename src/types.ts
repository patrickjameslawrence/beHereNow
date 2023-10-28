import React from 'react'

export enum Tabs {
  Explore = "Explore",
  Following = "Following",
  Nearby = "Nearby",
  Global = "Global"
}

export type Tab = {
  title: Tabs,
  icon: React.ReactNode
}

export enum UserTabs {
  Profile = "Profile",
  Settings = "Settings",
  SignOut = "Sign out"
}
export type UserTab = {
  title: UserTabs,
  isLink: boolean,
  to?: string | undefined,
  icon: React.ReactNode
}

export enum Options {
  AddToFavorites = "Add to Favorites",
  Report = "Report",
  Share = "Share"
}
export type Option = {
  name: Options,
  icon: React.ReactNode
}