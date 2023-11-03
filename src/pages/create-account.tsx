import React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import WideLogo from '../components/assets/LogInWideLogo'
import { BASE_API_URL, LoadStates } from '../lib/globals'
import { goTrue } from '../lib/globals'

import { StatesAndProvinces, Countries } from '../lib/globals'
import { ArrowPathIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import joinClassNames from '../lib/joinClassNames'
import { User } from '../types'

const CreateAccountPage: React.FC<PageProps> = () => {
  const [loadState, setLoadState] = React.useState<LoadStates>(LoadStates.NotLoading)
  const updateLoadState = (value: LoadStates) => setLoadState(value)

  const [alertMessage, setAlertMessage] = React.useState<string>('')
  const updateAlertMessage = (value: string) => setAlertMessage(value)

  const nameRef = React.useRef()
  const usernameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const confirmPasswordRef = React.useRef()
  const cityRef = React.useRef()
  const stateOrProvinceRef = React.useRef()
  const countryRef = React.useRef()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      confirmPasswordRef.current.setCustomValidity('Passwords do not match')
      return confirmPasswordRef.current.reportValidity()
    }
    updateLoadState(LoadStates.Loading)

    fetch(BASE_API_URL + '/users/create_account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        credentials: {
          username: usernameRef.current.value,
          email: emailRef.current.value,
        },
        city: cityRef.current.value,
        stateOrProvince: stateOrProvinceRef.current.value,
        country: countryRef.current.value,
      }),
    })
      .then((res) => {
        if (res.status != 200) {
          updateAlertMessage(res.statusText)
          return updateLoadState(LoadStates.Error)
        }
        goTrue
          .signup(emailRef.current.value, passwordRef.current.value)
          .then((res) => {
            updateAlertMessage(
              "Check your email for a confirmation link. You won't be able to login without confirming your email",
            )
            updateLoadState(LoadStates.Loaded)
          })
          .catch((e) => {
            console.error(e)
            updateAlertMessage('Email not confirmed')
            updateLoadState(LoadStates.Error)
          })
      })
      .catch((e) => {
        console.error(e)
        updateAlertMessage('Account already made. Check your email')
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
            Create a new account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit} className='space-y-6' method='POST'>
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
                  minLength={1}
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
                  onInput={() => {
                    updateAlertMessage('')
                    updateLoadState(LoadStates.NotLoading)
                  }}
                  minLength={1}
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
                  onInput={() => {
                    updateAlertMessage('')
                    updateLoadState(LoadStates.NotLoading)
                  }}
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
                  onInput={() => updateLoadState(LoadStates.NotLoading)}
                  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$'
                  type='password'
                  autoComplete='new-password'
                  required
                  className='block w-full border-0 bg-neutral-950 py-1.5 text-white caret-white outline outline-1 outline-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                />
                <span className='text-xs text-neutral-400'>
                  8 characters minimum with a lowercase, uppercase, number, and special character
                </span>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='confirmPassword' className='block text-sm font-medium leading-6 text-neutral-400'>
                  Confirm password *
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='confirmPassword'
                  placeholder='••••••••••••'
                  name='confirmPassword'
                  ref={confirmPasswordRef}
                  onInput={(e) => {
                    e.currentTarget.setCustomValidity('')
                    e.currentTarget.reportValidity()
                    updateLoadState(LoadStates.NotLoading)
                  }}
                  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$'
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
                  type='text'
                  autoComplete='address-level-2'
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
                      return <option key={stateOrProvince}>{stateOrProvince}</option>
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
                      return <option key={country}>{country}</option>
                    },
                  )}
                </select>
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
                  Create account
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

export default CreateAccountPage

export const Head: HeadFC = () => <title>BeHereNow | Create account</title>
