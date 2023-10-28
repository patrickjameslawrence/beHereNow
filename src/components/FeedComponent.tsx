import React from "react";
import { Tab } from "../types";

import DefaultAvatar from "./assets/DefaultAvatar";

import Post from "./PostComponent";

export default function Feed({ type }: { type: Tab }): React.ReactNode {
  // const [ posts, dispatch ] = React.useReducer(async (state, action) => {
  // fetch(BASE_API_URL + "posts")
  //   .then((response) => response.json()) // one extra step
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => console.error(error));
  // // })
  return (
    <>
      <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-3">
        <Post>
          <div className="flex space-x-3 mb-1">
            <DefaultAvatar />
            <div className="min-w-0 flex-1">
              <Post.Author name="BeHereNow" username="beHereNow" />
              <Post.Timestamp value={new Date().getTime().toLocaleString()} />
            </div>
            <Post.Menu />
          </div>
          <Post.Content value="Welcome to BeHereNow; the geolocation based social media app." />
        </Post>
        <Post>
          <div className="flex space-x-3 mb-1">
            <DefaultAvatar />
            <div className="min-w-0 flex-1">
              <Post.Author name="BeHereNow" username="beHereNow" />
              <Post.Timestamp value={new Date().getTime().toLocaleString()} />
            </div>
            <Post.Menu />
          </div>
          <Post.Content value="This is the Explore page." />
        </Post>
      </div>
    </>
  );
}
