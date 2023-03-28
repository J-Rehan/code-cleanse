import { NextPage } from 'next'
import {
  BoltIcon,
  BugAntIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '../utils/style'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import Head from 'next/head'

const features = [
  {
    name: 'Existing Product Review',
    description:
      'For non-technical founders who have built an application that already has a lot of issues and are trying to get to the root of the problem and find a solution, we conduct a thorough review of the code and system to provide a game plan to help get the product to production.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Monthly Consulting',
    description:
      'For non-technical founders who are in the early stages of development and have hired a development team, we recommend using our monthly consulting service until the project is complete. This will ensure that the code is of high quality every month, the developers are held accountable every month, and the project is scalable and bug-free.',
    icon: ScaleIcon,
  },
  {
    name: 'Hiring Assistance and Monthly Consulting',
    description:
      'For non-technical founders who need help hiring and also want to keep us on a monthly basis to ensure development is being done the right way, the product is scalable, and bug-free, we offer our hiring assistance service in addition to our monthly consulting service.',
    icon: BoltIcon,
  },
]

const monthlyFeatures = [
  {
    name: 'Monthly Development Team Management & Transparency for you',
    description:
      "Our team of senior-level consultants will manage your development team, ensuring they're working efficiently and delivering the best possible product.",
    icon: UserGroupIcon,
  },
  {
    name: 'Monthly Code Reviews',
    description:
      "We'll review your codebase to ensure it's of the highest quality and follows best practices in coding.",
    icon: CodeBracketIcon,
  },
  {
    name: 'Monthly Scalability Analysis',
    description:
      "We'll ensure your product is built to scale, so it can handle thousands of users as your business grows.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Monthly Bug Identification and Root Cause Analysis',
    description:
      "We'll identify and fix any bugs in your code, and help you understand the root cause of the problem.",
    icon: BugAntIcon,
  },
]

const UserDetailPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Services | Code Cleanse</title>
      </Head>
      <CloseHeader />

      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              Our Services
            </h2>
            {/* <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              lorem ipsum
            </p> */}
            <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
              At Code Cleanse, we offer a range of services to help
              non-technical founders manage their development teams and ensure
              their products are built to the highest standards. We understand
              that every customer is unique, and we&apos;re here to help in
              three different scenarios:
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    'flex flex-col md:flex-row items-center',
                    index % 2 == 1 && 'md:flex-row-reverse',
                  )}
                >
                  <div className="relative mt-4 md:mt-0">
                    <p className="text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <h2 className="text-xl font-bold my-10">
            Our Monthly Consulting Includes:
          </h2>

          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {monthlyFeatures.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-base leading-7 mt-10">
            At Code Cleanse, we&apos;re committed to ensuring that non-technical
            founders have the support they need to succeed in the complex world
            of software development. Contact us today to learn more about how we
            can help your business grow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage
