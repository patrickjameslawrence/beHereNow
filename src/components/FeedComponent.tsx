import React from 'react'
import { ArrowPathIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import type { Tab, Post as PostType } from '../types'
import { BASE_API_URL, LoadStates, goTrue } from '../lib/globals'
import Post from './PostComponent'
import DefaultAvatar from './assets/PostDefaultAvatar'

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

  const [posts, setPosts] = React.useState<PostType[]>([])

  const [loadState, setLoadState] = React.useState<LoadStates>(LoadStates.Loading)
  const updateLoadState = (value: LoadStates) => setLoadState(value)

  React.useEffect(() => {
    // dispatch({ type: Actions.Add })
    fetch(BASE_API_URL + '/posts', {
      method: 'GET',
    })
      .then((res: Response) => res.json())
      .then((posts: PostType[]) => {
        setPosts(posts)
        updateLoadState(LoadStates.Loaded)
      })
      .catch((error: Error) => {
        updateLoadState(LoadStates.Error)
        console.error(error)
      })
  }, [])

  return (
    <>
      {loadState === LoadStates.Loaded ? (
        <>
          <div className='grid grid-flow-row grid-cols-1 gap-3 lg:grid-cols-2'>
            {posts.map((post: PostType): React.ReactNode => {
              return (
                <Post id={post._id} key={post._id}>
                  <div className='mb-1 flex space-x-3'>
                    <DefaultAvatar />
                    <div className='min-w-0 flex-1'>
                      <Post.Author name={post.author.name} username={post.author.credentials.username} />
                      <Post.Timestamp value={post.timestamp} />
                    </div>
                    <Post.Menu />
                  </div>
                  <Post.Content _id={post._id} text={post.content.text} location={post.content.location} />
                </Post>
              )
            })}
          </div>
        </>
      ) : loadState === LoadStates.Loading ? (
        <>
          <span className='sr-only'>Loading posts</span>
          <ArrowPathIcon className='mx-auto my-32 h-10 w-10 animate-spin lg:h-5 lg:w-5' aria-hidden='true' />
        </>
      ) : (
        <>
          <span className='sr-only'>Error loading posts</span>
          <ExclamationTriangleIcon
            className='mx-auto my-32 h-10 w-10 animate-pulse text-red-600 lg:h-5 lg:w-5'
            aria-hidden='true'
          />
        </>
      )}
    </>
  )
}
