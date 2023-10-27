import React from "react";

import Navbar from "./NavbarComponent";
import Feed from "./FeedComponent";

import { Tab } from "../types";

export default function Layout({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}): React.ReactNode {
  const [ currentTab, setCurrentTab ] = React.useState(Tab.Explore)
  return (
    <>
      <div className="h-full p-7 text-white">
          <Navbar currentTab={currentTab} updateCurrentTab={setCurrentTab} />
          <header>
            <h1 className="my-3 text-4xl font-bold">{title}</h1>
            <p className="my-2 text-xl">{description}</p>
          </header>
          <Feed type={currentTab} />
          {children}
      </div>
    </>
  );
}
