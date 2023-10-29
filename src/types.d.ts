import React from "react";



export type Tab = {
  title: Tabs;
  icon: React.ReactNode;
};


export type UserTab = {
  title: UserTabs;
  isLink: boolean;
  to?: string | undefined;
  icon: React.ReactNode;
};


export type Option = {
  name: Options;
  icon: React.ReactNode;
};
