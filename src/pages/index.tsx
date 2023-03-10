/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Section from '../components/Landing/Section/Section'
import Testimonials from '../components/Landing/Testimonials/Testimonials'
import Button from '../components/shared/Button/Button'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'
import { features } from '../core/config/app'
import { NextSeo } from 'next-seo'
import { engineers } from '../core/config/engineers'
import 'animate.css'

const HomePage: NextPage = () => {
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const listener = function () {
      setScrolled(this.scrollY)
    }

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Code Cleanse - Simplifying software development for non-technical
        </title>
      </Head>
      <NextSeo
        title="Code Cleanse - Simplifying software development for non-technical"
        description="Hire the top 1% engineers to Review your code, Manage your development team, Ensure your app is scalable, Ensure transparency in your development."
        canonical="https://www.codecleanse.com"
      />
      <div
        className={`animate__animated ${
          scrolled > 600 ? 'animate__slideInUp' : 'animate__slideOutDown'
        } fixed md:hidden w-full bottom-0 left-0 z-10`}
        style={{ animationDuration: '0.5s' }}
      >
        <div className="bg-[#1C1731] py-[18px] px-4 flex items-center justify-between">
          <Image
            priority
            src="/logo-icon.png"
            width={32}
            height={32}
            alt="Code Cleanse"
          />
          <Link
            href="/begin-hire"
            className="bg-white max-w-[280px] flex items-center justify-center rounded-lg w-full p-4 text-black font-bold text-base"
          >
            Hire Experts Now
          </Link>
        </div>
      </div>
      <div>
        <Header>
          <div className="flex flex-col items-center p-6">
            <h4 className="text-white text-center text-lg md:text-2xl leading-7 px-4 py-2 border-[0.5px] border-white rounded font-bold">
              Are you a non technical founder?
            </h4>

            <h1 className="text-white text-[32px] md:text-[64px] text-center font-bold mt-4">
              <span className="font-normal">Hire the</span>
              <br />
              top 1% engineers <span className="font-normal">to</span>
              <br />
              <div className="text-aqua">
                <Typewriter
                  loop
                  cursor
                  cursorBlinking
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                  words={[
                    'Review your code',
                    'Manage your development team',
                    'Ensure your app is scalable',
                    'Ensure transparency in your development',
                  ]}
                />
              </div>
            </h1>

            <Link href="/begin-hire" className="mt-12">
              <button className="text-base leading-5 font-bold text-dark bg-white min-w-[300px] sm:w-[340px] p-4 rounded-lg">
                Hire Experts Now
              </button>
            </Link>
          </div>
          <div />
        </Header>
        <main className="pt-9">
          <div className="max-w-[394px] flex flex-col w-full items-center mx-auto pb-7">
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/user-three.png"
                  width={24}
                  height={24}
                  alt="user"
                />
                <span className="ml-2 text-sm font-light">500+ Clients</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/git-branch.png"
                  width={24}
                  height={24}
                  alt="user"
                />
                <span className="ml-2 text-sm font-light">
                  1000+ Github repositories
                </span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/bug-report.png"
                  width={24}
                  height={24}
                  alt="user"
                />
                <span className="ml-2 text-sm font-light">
                  10,000+ Bugs fixed
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto">
            <div className="mb-12 px-6 rounded-none border-t border-b md:border-l md:border-r border-[#d7d7d7] p-10 md:rounded-[48px]">
              <h3 className="text-center text-2xl text-dark">
                Hundreds of rigorously selected I.T. professionals
              </h3>
              <h3 className="text-center text-2xl text-dark">
                from all over the world.
              </h3>

              <div
                className="engineers px-14 flex space-x-2 mt-8 overflow-x-scroll lg:overflow-x-hidden pb-4"
                style={{
                  scrollbarWidth: 'none',
                }}
              >
                {engineers.map((engineer) => {
                  return (
                    <div
                      className="flex flex-col items-center"
                      key={engineer.id}
                    >
                      <Image
                        width={104}
                        height={104}
                        src={engineer.imageUrl}
                        alt={engineer.name}
                        className="rounded-[28px]"
                      />
                      <p className="min-w-[164px] text-dark mt-4 text-center font-semibold text-base">
                        {engineer.name}
                      </p>
                      <p className="text-sm text-dark">{engineer.role}</p>
                      <p className="mt-3 text-sm text-dark2">Previously at</p>
                      <Image
                        width={120}
                        height={24}
                        className="mt-1.5"
                        alt="Previously at"
                        src={`/images/previously-at/${engineer.lastCompany}.png`}
                      />
                    </div>
                  )
                })}

                <div className="flex flex-col items-center">
                  <Image
                    width={104}
                    height={104}
                    src="/images/group-image.png"
                    alt="Group Image"
                    className="rounded-[28px]"
                  />
                  <p className="min-w-[164px] text-dark mt-4 text-center font-semibold text-base">
                    1000+
                  </p>
                  <p className="text-sm text-dark">All you need</p>
                  <p className="mt-3 text-sm text-dark2">Coming from</p>
                  <div className="flex space-x-2">
                    <img
                      className="object-contain mt-1.5 w-[120px] h-[24px]"
                      alt="Previously at"
                      src="/images/previously-at/others.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Testimonials />

          <div className="max-w-[1024px] mx-auto pt-[56px]">
            <div className="px-6 flex flex-col md:flex-row md:items-center md:space-x-10">
              <p className="text-2xl">
                We provide <strong>non-technical founders</strong> with the
                peace of mind and transparency they need to manage their
                development teams effectively.
              </p>
              <Image
                width={342}
                height={200}
                src="/section1-img.png"
                alt="Section 1"
                className="mt-6 mx-auto"
              />
            </div>

            <div className="my-6 bg-gray h-[1px] w-full" />

            <div className="px-6 flex flex-col-reverse md:flex-row md:items-center md:space-x-10">
              <Image
                width={342}
                height={200}
                src="/section2-img.png"
                alt="Section 1"
                className="mt-6 mx-auto"
              />
              <p className="text-2xl">
                Our rigorous hiring process ensures that{' '}
                <strong>we only work with the top 1%</strong> of engineers
                worldwide, so you can trust that your development team is in
                good hands with us.
              </p>
            </div>
          </div>

          <div className="px-8 mt-10 py-10 bg-[#f8f8f8]">
            <div className="max-w-[1024px] mx-auto">
              <p className="text-lg md:text-2xl max-w-[600px] mx-auto mb-4 text-center">
                We’ll make sure your mobile or web application is built the
                right way. Here is what we check for on a monthly basis to
                ensure your development team is on the right track:
              </p>

              <div className="grid grid-cols-12 gap-4">
                {features.map((feature) => {
                  return (
                    <div
                      key={feature.id}
                      className="col-span-12 md:col-span-4 p-6 flex flex-col justify-center items-center bg-white space-y-1"
                    >
                      {feature.icon}
                      <h3 className="text-base font-bold text-center">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-center">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            <Link href="/begin-hire">
              <Button
                onClick={() => {}}
                className="md:max-w-[500px] mx-auto mt-12"
              >
                <span>
                  <strong>Start:</strong> Tell us about yourself
                </span>
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
