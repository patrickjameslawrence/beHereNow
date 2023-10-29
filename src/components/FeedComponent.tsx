import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import type { Tab, Post as PostType } from "../types";
import { BASE_API_URL } from "../lib/globals";
import Post from "./PostComponent";
import DefaultAvatar from "./assets/DefaultAvatar";

// const enum Actions {
//   Add = "add"
// }

export default function Feed({ type }: { type: Tab }): React.ReactNode {
  // const [ posts, dispatch ] = React.useReducer((state, action) => {
  //   switch (action.type) {
  //     case Actions.Add:
  //       return [ ...state];
  //     default:
  //       return posts;
  //   }
  // }, []);
  const [ posts, setPosts ] = React.useState<PostType[]>([])

  const [ isLoading, setIsLoading ] = React.useState(true);
  const updateIsLoading = () => setIsLoading(!isLoading);

  React.useEffect(() => {
    // dispatch({ type: Actions.Add })
    fetch(BASE_API_URL + "posts")
    .then((res: Response) => res.json())
    .then((posts: PostType[]) => {
      setPosts(posts);
      updateIsLoading();
    })
    .catch((error: Error) => console.error(error));
  }, []);
  type;

  return (
    <>
      {isLoading ? (
        <ArrowPathIcon
          className="w-10 h-10 lg:w-5 lg:h-5 mx-auto my-32 animate-spin"
          aria-hidden="true"
        />
      ) : (
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
            <Post.Content value={posts[0]._id} />
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
      )}
    </>
  );
}
