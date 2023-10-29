export const API_PORT = 3001;
export const BASE_API_URL = `http://localhost:${API_PORT}/api/v1/`;

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