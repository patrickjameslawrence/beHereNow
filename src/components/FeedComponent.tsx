import React from "react";
import { Tab } from "../types";
import { BASE_API_URL } from "../lib/globals";

import DefaultAvatar from './assets/DefaultAvatar'

import Post from "./PostComponent";

export default function Feed({
  type
}: {
  type: Tab,
}): React.ReactNode {
  // const [ posts, dispatch ] = React.useReducer(async (state, action) => {
  fetch('https://api.github.com/orgs/axios')
    .then(response => response.json())    // one extra step
    .then(data => {
      console.log(data) 
  })
  .catch(error => console.error(error))
// })
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="w-full outline outline-1 outline-neutral-900 bg-neutral-950">
          <Post>
            <div className="flex space-x-3 mb-1">
              <DefaultAvatar />
              <div className="min-w-0 flex-1">
                <Post.Author
                  name="BeHereNow"
                  username="beHereNow"
                />
                <Post.Timestamp value={new Date().getTime().toLocaleString} />
              </div>
              <Post.Menu />
            </div>
            <Post.Content value="Welcome to BeHereNow; the geolocation based social media app." />
          </Post>
        </div>
      </div>
    </>
  );
}
