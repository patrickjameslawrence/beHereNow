import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import type { Tab, Post as PostType } from '../types'
import { BASE_API_URL } from '../lib/globals'
import Post from './PostComponent'
import DefaultAvatar from './assets/DefaultAvatar'

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

  const [isLoading, setIsLoading] = React.useState(true)
  const updateIsLoading = () => setIsLoading(!isLoading)

  React.useEffect(() => {
    // dispatch({ type: Actions.Add })
    fetch(BASE_API_URL + 'posts')
      .then((res: Response) => res.json())
      .then((posts: PostType[]) => {
        setPosts(posts)
        updateIsLoading()
      })
      .catch((error: Error) => console.error(error))
  }, [])
  type

  return (
    <>
      {isLoading ? (
        <ArrowPathIcon className='mx-auto my-32 h-10 w-10 animate-spin lg:h-5 lg:w-5' aria-hidden='true' />
      ) : (
        <div className='grid grid-flow-row grid-cols-1 gap-3 lg:grid-cols-2'>
          {posts.map((post: PostType): React.ReactNode => {
            return (
              <>
                <Post id={post._id}>
                  <div className='mb-1 flex space-x-3'>
                    <DefaultAvatar />
                    <div className='min-w-0 flex-1'>
                      <Post.Author name={post.author.name} username={post.author.credentials.username} />
                      <Post.Timestamp value={post.timestamp} />
                    </div>
                    <Post.Menu />
                  </div>
                  <Post.Content value={post.content} />
                </Post>
              </>
            )
          })}
        </div>
      )}
    </>
  )
}
