import React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import WideLogo from '../components/assets/LogInWideLogo'
import { BASE_API_URL } from '../lib/globals'
import { goTrue } from '../lib/globals'

const LogInPage: React.FC<PageProps> = () => {
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // if (emailRef.current != 'undefined' && passwordRef.current != 'undefined') {
    //   const response = await fetch(BASE_API_URL + '/users/log-in', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: emailRef.current.value,
    //       password: passwordRef.current.value,
    //     }),
    //   })
    //   console.log(response)
    // }

    //   goTrue
    //     .login(emailRef.current.value, passwordRef.current.value)
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((e) => console.error(e))

    //   goTrue.confirm('biRRZFuGR4rk7jY0vrHcSg', true)
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
                  <Link to='/' className='font-semibold text-purple-600 hover:text-purple-500'>
                    Forgot password?
                  </Link>
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
              <div className='mb-3 flex items-center gap-3'>
                <input
                  id='rememberMe'
                  name='rememberMe'
                  type='checkbox'
                  className='h-4 w-4 border-neutral-800 bg-neutral-900 text-purple-600 focus:ring-purple-600'
                />
                <label className='block text-sm font-medium leading-6 text-gray-400' htmlFor='rememberMe'>
                  Remember me
                </label>
              </div>
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

export default LogInPage

export const Head: HeadFC = () => <title>BeHereNow | Log in</title>
