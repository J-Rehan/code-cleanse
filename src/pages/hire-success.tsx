import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { InlineWidget } from 'react-calendly'
import Header from '../components/shared/Header/Header'

const HireSuccessPage: NextPage = () => {
  const haveDeveloper = 'NO'
  return (
    <div>
      <div className="hire-header w-full bg-black p-6">
        <div className="flex justify-between items-center">
          <div />
          <Link href="/">
            <Image src="/logo-full.png" width={200} height={32} alt="logo" />
          </Link>
          <Link href="/">
            <Image src="/close.png" width={24} height={24} alt="close" />
          </Link>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-10 text-dark">
        <h2 className="text-4xl font-semibold text-center">Thank you.</h2>
        <p className="text-3xl text-center mt-4 mb-6">
          Please schedule a meeting with us to prepare your first report.
        </p>

        <InlineWidget url="https://calendly.com/codecleanse" />
      </div>

      <div className="pt-8 border-t border-t-gray flex flex-col items-center">
        <p>In the meantime add us to your code base</p>
        <div className="flex space-x-4 items-center mt-4">
          <Image src="/icons/github.png" width={100} height={40} alt="Github" />
        </div>
        <p className="text-2xl font-light mt-2">@codecleanse</p>
        <p className="mt-2 font-light">
          If you prefer, you can email us your code.
        </p>
      </div>
    </div>
  )
}

export default HireSuccessPage
