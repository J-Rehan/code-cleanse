/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Fragment } from 'react'

interface SectionProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string
  desktopImageUrl: string
  items: string[]
  reverse?: boolean
}

const Section: React.FC<SectionProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    imageUrl,
    items,
    desktopImageUrl,
    reverse,
  } = props

  return (
    <div className="max-w-[400px] md:max-w-full">
      <h4 className="uppercase text-xs font-bold text-blue">{title}</h4>
      <div
        className={`md:flex md:items-start ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        <div>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-light text-dark leading-10">
            {subtitle}
          </h2>
          <Image
            width={342}
            height={152}
            alt={title}
            className="mt-6 md:hidden"
            src={imageUrl}
          />
          <p className="mt-6 text-dark leading-6">{description}</p>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex w-full items-center">
                <Image
                  src="/list-item.png"
                  width={16}
                  height={16}
                  alt="List Item"
                />
                <span className="ml-[18px] leading-5 text-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={desktopImageUrl}
          alt={title}
          className={`image mt-6 hidden md:block w-[50%] ${
            reverse ? 'mr-10' : 'ml-10'
          }`}
        />
      </div>
    </div>
  )
}

export default Section
