import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { cn } from '../utils/style'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'

const ContactPage: NextPage = () => {
  const [agreed, setAgreed] = useState(false)
  return (
    <div>
      <CloseHeader />

      <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-full translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-[#e5e7eb]"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-[#e5e7eb]"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Contact Us
            </h2>
            {/* <p className="mt-4 text-lg leading-6 text-gray-500"></p> */}
          </div>
          <div className="mt-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-[#374151]"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Phone Number
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-[#6b7280] focus:border-black focus:ring-black"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-black focus:ring-black"
                    placeholder="+1 (555) 987-6543"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-black focus:ring-black"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={cn(
                        agreed ? 'bg-black' : 'bg-[#e5e7eb]',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          agreed ? 'translate-x-5' : 'translate-x-0',
                          'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-[#6b7280]">
                      By selecting this, you agree to the{' '}
                      <Link
                        href="/terms-of-service"
                        className="font-medium text-[#374151] underline"
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/privacy-policy"
                        className="font-medium text-[#374151] underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  disabled={!agreed}
                  type="submit"
                  className="inline-flex w-full disabled:bg-[#ccc] items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
