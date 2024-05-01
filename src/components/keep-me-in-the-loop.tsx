'use client'

import { useState } from 'react'

import { GradientButton } from './ui/gradient-button'

export function KeepMeInTheLoop() {
  const [hasSubscribed, setHasSubscribed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsSubscribing(true)

      const email = new FormData(event.currentTarget).get('email') as string
      const body = `userGroup=${encodeURIComponent('pxcli.com')}&email=${encodeURIComponent(email)}`
      const response = await fetch(
        'https://app.loops.so/api/newsletter-form/clpsl4mk5008ml20ozvjha4wy',
        {
          method: 'POST',
          body,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      if (response.ok) {
        setHasSubscribed(true)
      } else {
        const error = await response.json()
        throw error
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h2 className="font-merriweather text-2xl font-bold sm:text-3xl sm:!leading-14 lg:text-5xl">
        Keep me in the Loop
      </h2>

      <p className="mt-3 max-w-[320px] text-center text-lg font-light sm:max-w-full sm:text-xl sm:leading-8">
        Get the latest updates and news for this project!
      </p>

      {hasSubscribed ? (
        <div className="mt-11 h-12 text-center">
          <span className="text-gradient-primary font-ibm-plex-mono text-xl font-medium">
            Thank you for subscribing!
          </span>
        </div>
      ) : (
        <form
          onSubmit={handleSubscribe}
          className="mt-11 flex flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="h-12 w-80 rounded-md bg-neutral-800 px-3 ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-50"
            required
            disabled={isSubscribing}
          />
          <GradientButton
            type="submit"
            className="w-full sm:w-fit"
            disabled={isSubscribing}
          >
            Subscribe
          </GradientButton>
        </form>
      )}
    </section>
  )
}
