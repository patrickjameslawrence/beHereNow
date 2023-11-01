import React from 'react'
import { Link } from 'gatsby'
import WideLogo from '../components/assets/LogInWideLogo'
import { BASE_API_URL } from '../lib/globals'
import { goTrue } from '../lib/globals'

import { StatesAndProvinces, Countries } from '../lib/globals'

export default function CreateAccount() {
  const nameRef = React.useRef()
  const usernameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const cityRef = React.useRef()
  const stateOrProvinceRef = React.useRef()
  const countryRef = React.useRef()

  goTrue
    .confirm('fuTVZTTO3PgawchvT5vJSw', true)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => console.error(e))

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

    goTrue
      .signup(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.error(e))
  }
  return (
    <>
      <div className="fixed -right-1/2 -top-1/2 -z-10 h-[200%] w-[200%] -rotate-45 bg-[url('../images/logos/rectangular.svg')] bg-repeat opacity-5"></div>
      <div className='mx-auto flex min-h-full w-fit flex-1 flex-col justify-center bg-black px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to='/'>
            <WideLogo />
          </Link>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Create a new account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium leading-6 text-neutral-400'>
                Name *
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  placeholder='John Doe'
                  name='name'
                  ref={nameRef}
                  type='text'
                  autoComplete='name'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label htmlFor='username' className='block text-sm font-medium leading-6 text-neutral-400'>
                Username *
              </label>
              <div className='mt-2 flex text-neutral-400 outline outline-1 outline-neutral-900 ring-1 transition-colors focus-within:text-white focus-within:ring focus-within:ring-purple-600 sm:max-w-md'>
                <span className='flex select-none items-center bg-neutral-950 pl-3 text-inherit sm:text-sm'>@</span>
                <input
                  id='username'
                  placeholder='johndoe'
                  name='username'
                  ref={usernameRef}
                  type='text'
                  autoComplete='username'
                  required
                  className='block w-full border-0 border-neutral-950 bg-neutral-950 py-1.5 pl-0 text-white caret-white transition-colors placeholder:text-neutral-400 focus:ring-neutral-950 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-neutral-400'>
                Email address *
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  placeholder='johndoe@example.com'
                  name='email'
                  ref={emailRef}
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-neutral-400'>
                  Password *
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  placeholder='••••••••••••'
                  name='password'
                  ref={passwordRef}
                  type='password'
                  autoComplete='new-password'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label htmlFor='city' className='block text-sm font-medium leading-6 text-neutral-400'>
                City
              </label>
              <div className='mt-2'>
                <input
                  id='text'
                  placeholder='New York City'
                  name='text'
                  ref={cityRef}
                  type='email'
                  autoComplete='address-level-2'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label htmlFor='stateOrProvince' className='block text-sm font-medium leading-6 text-neutral-400'>
                State / Province
              </label>
              <div className='mt-2'>
                <select
                  id='stateOrProvince'
                  name='stateOrProvince'
                  ref={stateOrProvinceRef}
                  autoComplete='address-level1'
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white ring-1 ring-inset ring-neutral-900 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option></option>
                  {(Object.values(StatesAndProvinces) as Array<keyof typeof StatesAndProvinces>).map(
                    (stateOrProvince: keyof typeof StatesAndProvinces): React.ReactNode => {
                      return (
                        <>
                          <option key={stateOrProvince}>{stateOrProvince}</option>
                        </>
                      )
                    },
                  )}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor='country' className='block text-sm font-medium leading-6 text-neutral-400'>
                Country
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  name='country'
                  ref={countryRef}
                  autoComplete='country-name'
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white ring-1 ring-inset ring-neutral-900 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option></option>
                  {(Object.values(Countries) as Array<keyof typeof Countries>).map(
                    (country: keyof typeof Countries): React.ReactNode => {
                      return (
                        <>
                          <option key={country}>{country}</option>
                        </>
                      )
                    },
                  )}
                </select>
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={handleClick}
                className='my-11 flex w-full justify-center bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white caret-white transition-colors hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
              >
                Create account
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-neutral-400'>
            Already have an account?{' '}
            <Link
              to='/log-in'
              className='font-semibold leading-6 text-purple-600 transition-colors hover:text-purple-500'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
