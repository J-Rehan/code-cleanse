/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../../core/config/testimonials'
import { cn } from '../../../utils/style'

const Testimonials: React.FC = () => {
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
    window.addEventListener(
      'resize',
      function (event) {
        var videos = document.getElementsByTagName('video')
        for (var i = 0, len = videos.length; i < len; i++) {
          videos[i].pause()
        }
      },
      true,
    )
    // TODO: clear listener
  }, [])

  return (
    <div className="py-8 px-4 md:py-8 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-dark text-center">Client Testimonials:</h2>
        <h2 className="mt-2 text-3xl text-dark text-center">
          Real Stories from Real Founders
        </h2>

        <div className="flex mt-12 gap-8 items-center justify-center">
          <div className="md:w-[40%] space-y-6">
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={testimonial.id}
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className={cn(
                    'rounded-[24px] p-6 cursor-pointer transition-all duration-200',
                    'bg-white shadow-custom1 border',
                    selectedTestimonial?.id !== testimonial.id &&
                      'md:shadow-transparent',
                    selectedTestimonial.id === testimonial.id
                      ? 'border-[#3AD6F9]'
                      : 'border-[#DDDDDD]',
                  )}
                >
                  <div className="flex justify-center md:hidden relative mb-4">
                    <video
                      key={testimonial.id}
                      height="100%"
                      className="h-full w-[340px] rounded-2xl"
                      poster={testimonial.videoThumbnail}
                      controls
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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
                          alt="App Icon"
                          className="rounded-md w-12 h-12 object-contain"
                          src={testimonial.iconUrl}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="hidden relative cursor-pointer text-center md:flex">
            <video
              key={selectedTestimonial.id}
              height="100%"
              className="h-[606px] w-[340px] rounded-2xl"
              poster={selectedTestimonial.videoThumbnail}
              controls
            >
              <source src={selectedTestimonial.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
