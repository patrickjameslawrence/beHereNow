import React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import WideLogo from '../components/assets/LogInWideLogo'
import { BASE_API_URL, LoadStates } from '../lib/globals'
import { goTrue } from '../lib/globals'
import joinClassNames from '../lib/joinClassNames'
import { ArrowPathIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const LogInPage: React.FC<PageProps> = () => {
  const [loadState, setLoadState] = React.useState<LoadStates>(LoadStates.NotLoading)
  const updateLoadState = (value: LoadStates) => setLoadState(value)

  const [alertMessage, setAlertMessage] = React.useState<string>('')
  const updateAlertMessage = (value: string) => setAlertMessage(value)

  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const rememberMeRef = React.useRef()

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    goTrue
      .login(emailRef.current.value, passwordRef.current.value, rememberMeRef.current.checked)
      .then((res) => {
        console.log(res)
        updateLoadState(LoadStates.Loaded)
      })
      .catch((e) => {
        if (e.json.error === 'invalid_grant') {
          updateAlertMessage('Invalid email or password')
        } else {
          updateAlertMessage("Couldn't log in. Did you confirm your email?")
        }
        updateLoadState(LoadStates.Error)
      })
  }
  return (
    <>
      <div className="fixed -right-1/2 -top-1/2 -z-10 h-[200%] w-[200%] -rotate-45 bg-[url('../images/logos/rectangular.svg')] bg-repeat opacity-5"></div>
      <div className='mx-auto flex min-h-full w-fit flex-1 flex-col justify-center bg-black px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to='/'>
            <WideLogo key='Wide logo' />
          </Link>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Log in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit} className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-400'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  ref={emailRef}
                  onInput={() => {
                    updateAlertMessage('')
                    updateLoadState(LoadStates.NotLoading)
                  }}
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-400'>
                  Password
                </label>
                <div className='text-sm'>
                  <Link to='/forgot-password' className='font-semibold text-purple-600 hover:text-purple-500'>
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  ref={passwordRef}
                  onInput={() => {
                    updateAlertMessage('')
                    updateLoadState(LoadStates.NotLoading)
                  }}
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='mb-3 flex items-center gap-3'>
                <input
                  id='rememberMe'
                  name='rememberMe'
                  ref={rememberMeRef}
                  type='checkbox'
                  className='h-4 w-4 border-neutral-800 bg-neutral-900 text-purple-600 focus:ring-purple-600'
                />
                <label className='block text-sm font-medium leading-6 text-gray-400' htmlFor='rememberMe'>
                  Remember me
                </label>
              </div>
            </div>
            {alertMessage !== '' ? (
              <div className='border-neutral-900 bg-neutral-950 p-4 outline outline-1 outline-neutral-900'>
                <div className='flex'>
                  <div className='ml-3'>
                    <h3
                      className={joinClassNames(
                        loadState === LoadStates.Loaded ? 'text-green-400' : 'text-red-400',
                        'text-sm font-medium',
                      )}
                    >
                      Attention needed
                    </h3>
                    <div
                      className={joinClassNames(
                        loadState === LoadStates.Loaded ? 'text-green-400' : 'text-red-400',
                        'mt-2 text-sm',
                      )}
                    >
                      <p>{alertMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            <div>
              {loadState === LoadStates.NotLoading ? (
                <button
                  type='submit'
                  className='my-11 flex w-full justify-center bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white transition-colors hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                >
                  Log in
                </button>
              ) : loadState === LoadStates.Loading ? (
                <button
                  type='submit'
                  disabled
                  className='my-11 flex w-full justify-center bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white transition-colors hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                >
                  <ArrowPathIcon className='h-6 w-6 animate-spin transition-colors' />
                </button>
              ) : loadState == LoadStates.Loaded ? (
                <button
                  type='submit'
                  disabled
                  className='my-11 flex w-full justify-center bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white transition-colors'
                >
                  <CheckIcon className='h-6 w-6 transition-colors' />
                </button>
              ) : (
                <button
                  type='submit'
                  disabled
                  className='my-11 flex w-full justify-center bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white transition-colors'
                >
                  <ExclamationTriangleIcon className='h-6 w-6 animate-pulse text-black transition-colors' />
                </button>
              )}
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-400'>
            Don't have an account?{' '}
            <Link to='/create-account' className='font-semibold leading-6 text-purple-600 hover:text-purple-500'>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LogInPage

export const Head: HeadFC = () => <title>BeHereNow | Log in</title>
