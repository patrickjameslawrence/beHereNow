import React from "react";

import Navbar from "./NavbarComponent";
import Feed from "./FeedComponent";

import { Tabs } from "../types";

export default function Layout({
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}): React.ReactNode {
  const [ currentTab, setCurrentTab ] = React.useState(Tabs.Explore)
  return (
    <>
      <div className="h-full p-7 text-white">
          <Navbar currentTab={currentTab} updateCurrentTab={setCurrentTab} />
          <header>
            <h1 className="my-7 text-5xl font-bold">{currentTab}</h1>
          </header>
          <main>
            <Feed type={currentTab} />
            {children}
          </main>
      </div>
    </>
  );
}
