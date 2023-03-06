/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'
import Button from '../components/shared/Button/Button'

const HireSuccessPage: NextPage = () => {
  const haveDeveloper = 'NO'
  const [loaded, setLoaded] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

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
      <div className="max-w-[680px] mx-auto py-10 text-dark">
        <h2 className="text-4xl font-semibold text-center">Thank you.</h2>
        <p className="text-3xl text-center mt-4">Now let&apos;s chat.</p>
        <p className="text-3xl text-center mt-1 mb-6">
          Schedule a call to prepare your first report
        </p>

        <div id="calendly-widget"></div>

        {loaded && (
          <div className="max-w-[384px] mx-auto">
            <Button>
              <PopupButton
                url="https://calendly.com/codecleanse"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById('calendly-widget')}
                text="Click here to schedule!"
              />
            </Button>
          </div>
        )}

        <p className="mt-12 mb-6 text-center">
          Watch our video to know what to expect when you speak with our CEO,
          Rehan. He&apos;s eager to chat with you and explore how we can help
          you reach your goals.
        </p>
        {/* <div className="text-dark">
            <p className="text-base">{testimonial.client.name}</p>
            <p className="text-sm">
              {testimonial.client.role} of {testimonial.client.company}
            </p>
          </div> */}

        <div
          className="hidden md:block col-span-7 relative cursor-pointer"
          onClick={() => setIsVideoModalOpen(true)}
        >
          <img
            className="w-full h-full object-cover object-top rounded-[16px]"
            src="/rehan.png"
            alt="Rehan speaking about Code Cleanse"
          />
          <div className="w-[125px] h-[125px] bg-white absolute top-1/2 left-1/2 z-10 rounded-full flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 hover:shadow-lg">
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.250061 4.00596C0.250061 0.92676 3.58339 -0.997734 6.25006 0.541867L28.0001 13.0992C30.6667 14.6388 30.6667 18.4878 28.0001 20.0274L6.25006 32.5848C3.58339 34.1244 0.250062 32.1999 0.250062 29.1207L0.250061 4.00596Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
        </div>
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
