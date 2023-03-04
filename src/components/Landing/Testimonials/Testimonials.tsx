/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'
import ReactPlayer from 'react-player'
import 'node_modules/video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import { testimonials } from '../../../core/config/testimonials'
import { cn } from '../../../utils/style'

const Testimonials: React.FC = () => {
  // const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0],
  )

  useEffect(() => {
    document.addEventListener(
      'play',
      function (e) {
        var videos = document.getElementsByTagName('video')
        for (var i = 0, len = videos.length; i < len; i++) {
          if (videos[i] != e.target) {
            videos[i].pause()
          }
        }
      },
      true,
    )
    // TODO: clear listener
  }, [])

  return (
    <div className="py-8 px-4 md:py-8 bg-[#f8f8f8]">
      {/* <ModalVideo
        channel="custom"
        autoplay
        isOpen={isVideoModalOpen}
        url={selectedTestimonial?.videoUrl}
        onClose={() => setIsVideoModalOpen(false)}
      /> */}

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-dark text-center">Client Testimonials:</h2>
        <h2 className="mt-2 text-3xl text-dark text-center">
          Real Stories from Real Customers
        </h2>

        <div className="grid grid-cols-12 mt-12 space-x-4">
          <div className="col-span-12 md:col-span-5 space-y-2">
            {testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className={cn(
                    'rounded-[48px] p-6 cursor-pointer transition-all duration-200',
                    'bg-white shadow-custom1',
                    selectedTestimonial?.id !== testimonial.id &&
                      'md:bg-transparent',
                    selectedTestimonial?.id !== testimonial.id &&
                      'md:shadow-transparent',
                  )}
                >
                  <div className="md:hidden relative mb-4">
                    <Player
                      playsInline
                      width="auto"
                      height={500}
                      fluid={false}
                      aspectRadio="4:3"
                      poster={testimonial.videoThumbnail}
                      src={testimonial.videoUrl}
                    >
                      <BigPlayButton position="center">Hello</BigPlayButton>
                    </Player>
                  </div>
                  <p className="text-dark text-base">”{testimonial.content}”</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        width={56}
                        height={56}
                        className="rounded-full w-14 h-14 object-cover object-top mr-2"
                        src={testimonial.client.imageUrl}
                        alt={testimonial.client.name}
                      />
                      <div className="text-dark">
                        <p className="text-base">{testimonial.client.name}</p>
                        <p className="text-sm">
                          {testimonial.client.role} of{' '}
                          <a
                            href={testimonial.productUrl}
                            target="_blank"
                            className="text-blue"
                            rel="noreferrer"
                          >
                            {testimonial.client.company}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div>
                      <a
                        href={testimonial.productUrl}
                        target="_blank"
                        className="text-blue"
                        rel="noreferrer"
                      >
                        <img
                          // width={40}
                          // height={40}
                          alt="App Icon"
                          className="rounded-md w-10 h-10 object-contain"
                          src={testimonial.iconUrl}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="hidden relative md:block col-span-7 cursor-pointer">
            <Player
              playsInline
              width="auto"
              height={500}
              fluid={false}
              aspectRadio="4:3"
              poster={selectedTestimonial.videoThumbnail}
              src={selectedTestimonial.videoUrl}
            >
              <BigPlayButton position="center" />
            </Player>
            {/* <img
              className="w-full h-[550px] object-center object-cover rounded-[48px]"
              src={selectedTestimonial?.videoThumbnail}
              alt={selectedTestimonial.client.name}
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
