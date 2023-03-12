/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'

const stats = [
  { label: 'Clients', value: '500+' },
  { label: 'Projects', value: '1000+' },
  { label: 'Bugs Fixed', value: '10K+' },
]

const quotes = [
  {
    id: '1',
    description:
      'CodeClanse helped us streamline our operations and increase efficiency',
    founder: 'Madelyn Allor',
    role: 'Founder',
    productName: 'Reco App',
  },
  {
    id: '2',
    description:
      'Their solutions exceeded expectations and helped us stay ahead of the curve',
    founder: 'Nicholas Nedelisky',
    role: 'Founder',
    productName: 'Foodiaz',
  },
  {
    id: '3',
    description:
      "We couldn't have done it without CodeClanse's expertise and guidance",
    founder: 'Aly Johnson',
    role: 'Founder',
    productName: 'Village App',
  },
]

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Code Cleanse</title>
      </Head>
      <NextSeo
        title="Code Cleanse - Simplifying software development for non-technical"
        description="Hire the top 1% engineers to Review your code, Manage your development team, Ensure your app is scalable, Ensure transparency in your development."
        canonical="https://www.codecleanse.com"
      />
      <CloseHeader />

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <div className="relative overflow-hidden rounded-2xl py-10  shadow-xl">
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  {quotes.map((quote) => (
                    <blockquote className="mt-8" key={quote.id}>
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">{quote.description}</p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-indigo-200">
                          {quote.founder}, {quote.role} at {quote.productName}
                        </p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower non-technical founders
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-base leading-7">
                  At Code Cleanse, we understand that non-technical founders
                  face unique challenges when it comes to managing their
                  development team and ensuring their product is built to the
                  highest standards, bug free and in a timely manner. With a
                  lack of technical knowledge, it can be difficult to know
                  whether your team is delivering the best possible product or
                  if you&apos;re getting the value for your money.
                </p>
                <p className="text-base leading-7">
                  That&apos;s why we created Code Cleanse - to help
                  non-technical founders navigate the complex world of software
                  development. We&apos;ve assembled a team of the top 1% of
                  engineers who have gone through a rigorous hiring process, so
                  you can be sure you&apos;re working with the best in the
                  industry.
                </p>
                <p className="text-base leading-7">
                  Our mission is to empower non-technical founders by providing
                  them with senior-level consultants who can manage their
                  development team, ensure the best coding practices are
                  followed, and identify and solve problems before they become
                  major issues. With our help, you can focus on growing your
                  business and leave the technical details to us.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-[#f3f4f6] pt-6"
                  >
                    <dt className="text-base font-medium text-[#6b7280]">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-[#111827]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
