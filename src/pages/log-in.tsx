import React from 'react'
import { Link } from 'gatsby'
import WideLogo from '../components/assets/LogInWideLogo'
import { BASE_API_URL } from '../lib/globals'

export default function LogIn() {
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (emailRef.current != 'undefined' && passwordRef.current != 'undefined') {
      const response = await fetch(BASE_API_URL + '/users/log-in', {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      })
      console.log(response)
    }
  }
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to='/'>
            <WideLogo />
          </Link>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Log in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-400'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  ref={emailRef}
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
                  <a href='#' className='font-semibold text-purple-600 hover:text-purple-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  ref={passwordRef}
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={handleClick}
                className='flex w-full justify-center bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
              >
                Log in
              </button>
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
