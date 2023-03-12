/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'
import Button from '../components/shared/Button/Button'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'

const HireSuccessPage: NextPage = () => {
  const haveDeveloper = 'NO'
  const [loaded, setLoaded] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div>
      <CloseHeader />
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
                rootElement={document.getElementById('calendly-widget')}
                text="Click here to schedule!"
              />
            </Button>
          </div>
        )}

        <p className="mt-12 mb-6 text-center">
          Watch our video to know what to expect when you speak with our team.
          We look forward to speaking with you.
        </p>

        <video
          height="100%"
          className="h-[603px] w-[340px] mx-auto rounded-2xl border border-blue"
          poster="/jawahar-thumbnail.png"
          controls
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/codecleanse-44375.appspot.com/o/Jawaher%20final.mp4?alt=media&token=9d82a4f6-5b78-4b7b-8cb4-9210ed39103c"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
