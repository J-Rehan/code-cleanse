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
        <meta
          name="description"
          content="Hire the top 1% engineers to Review your code, Manage your development team, Ensure your app is scalable, Ensure transparency in your development."
        />
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
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_601_917" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.1465 8.26777C36.1304 7.29146 36.1304 5.70854 35.1465 4.73223C34.1627 3.75592 32.5675 3.75592 31.5837 4.73223L17.8444 18.3662L11.3315 11.9032C10.3477 10.9269 8.75251 10.9269 7.76865 11.9032C6.7848 12.8795 6.7848 14.4625 7.76866 15.4388L15.92 23.5276C16.5844 24.1869 17.5277 24.401 18.3732 24.1697C18.9094 24.1031 19.4282 23.8655 19.84 23.457L35.1465 8.26777Z"
              />
            </mask>
            <path
              d="M35.1465 4.73223L35.8509 4.02241L35.8509 4.02241L35.1465 4.73223ZM35.1465 8.26777L34.4422 7.55795V7.55795L35.1465 8.26777ZM31.5837 4.73223L30.8793 4.02241V4.02241L31.5837 4.73223ZM17.8444 18.3662L17.14 19.076L17.8444 19.775L18.5488 19.076L17.8444 18.3662ZM11.3315 11.9032L10.6271 12.6131L11.3315 11.9032ZM7.76865 11.9032L7.06427 11.1934H7.06427L7.76865 11.9032ZM7.76866 15.4388L7.06428 16.1486H7.06428L7.76866 15.4388ZM15.92 23.5276L15.2156 24.2374H15.2156L15.92 23.5276ZM18.3732 24.1697L18.2499 23.1774L18.1786 23.1862L18.1093 23.2052L18.3732 24.1697ZM19.84 23.457L20.5443 24.1668L19.84 23.457ZM34.4422 5.44206C35.0319 6.02723 35.0319 6.97277 34.4422 7.55795L35.8509 8.97759C37.2289 7.61014 37.2289 5.38986 35.8509 4.02241L34.4422 5.44206ZM32.2881 5.44206C32.882 4.85265 33.8482 4.85265 34.4422 5.44206L35.8509 4.02241C34.4772 2.6592 32.2531 2.6592 30.8793 4.02241L32.2881 5.44206ZM18.5488 19.076L32.2881 5.44206L30.8793 4.02241L17.14 17.6563L18.5488 19.076ZM10.6271 12.6131L17.14 19.076L18.5488 17.6563L12.0359 11.1934L10.6271 12.6131ZM8.47303 12.6131C9.067 12.0237 10.0332 12.0237 10.6271 12.6131L12.0359 11.1934C10.6621 9.8302 8.43802 9.8302 7.06427 11.1934L8.47303 12.6131ZM8.47303 14.7289C7.88334 14.1438 7.88334 13.1982 8.47303 12.6131L7.06427 11.1934C5.68626 12.5609 5.68626 14.7811 7.06428 16.1486L8.47303 14.7289ZM16.6243 22.8177L8.47303 14.7289L7.06428 16.1486L15.2156 24.2374L16.6243 22.8177ZM18.1093 23.2052C17.5934 23.3463 17.0237 23.214 16.6243 22.8177L15.2156 24.2374C16.1452 25.1598 17.4619 25.4557 18.637 25.1343L18.1093 23.2052ZM19.1356 22.7471C18.887 22.9938 18.5752 23.137 18.2499 23.1774L18.4964 25.1621C19.2436 25.0693 19.9694 24.7373 20.5443 24.1668L19.1356 22.7471ZM34.4422 7.55795L19.1356 22.7471L20.5443 24.1668L35.8509 8.97759L34.4422 7.55795Z"
              fill="white"
              mask="url(#path-1-inside-1_601_917)"
            />
            <mask id="path-3-inside-2_601_917" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9514 13.4399L9.426 10.2556C5.55784 12.7523 3 17.0797 3 22C3 29.732 9.31646 36 17.1082 36C24.9 36 31.2164 29.732 31.2164 22C31.2164 17.4167 28.9969 13.3478 25.5664 10.794L22.2293 13.9721C24.9054 15.6566 26.6816 18.6225 26.6816 22.0001C26.6816 27.2468 22.3955 31.5001 17.1082 31.5001C11.8209 31.5001 7.53478 27.2468 7.53478 22.0001C7.53478 18.2315 9.7461 14.9754 12.9514 13.4399Z"
              />
            </mask>
            <path
              d="M12.9514 13.4399L13.3834 14.3418L14.7284 13.6974L13.6217 12.6978L12.9514 13.4399ZM9.426 10.2556L10.0963 9.51352L9.52759 8.99984L8.88371 9.41543L9.426 10.2556ZM25.5664 10.794L26.1635 9.99183L25.4872 9.48838L24.8767 10.0698L25.5664 10.794ZM22.2293 13.9721L21.5397 13.248L20.6093 14.134L21.6966 14.8184L22.2293 13.9721ZM13.6217 12.6978L10.0963 9.51352L8.75571 10.9977L12.2811 14.182L13.6217 12.6978ZM8.88371 9.41543C4.74425 12.0872 2 16.7238 2 22H4C4 17.4357 6.37144 13.4174 9.9683 11.0958L8.88371 9.41543ZM2 22C2 30.2916 8.77145 37 17.1082 37V35C9.86147 35 4 29.1725 4 22H2ZM17.1082 37C25.445 37 32.2164 30.2916 32.2164 22H30.2164C30.2164 29.1725 24.3549 35 17.1082 35V37ZM32.2164 22C32.2164 17.0855 29.8351 12.7251 26.1635 9.99183L24.9692 11.5961C28.1588 13.9705 30.2164 17.748 30.2164 22H32.2164ZM24.8767 10.0698L21.5397 13.248L22.919 14.6962L26.256 11.5181L24.8767 10.0698ZM27.6816 22.0001C27.6816 18.2623 25.7147 14.9844 22.762 13.1258L21.6966 14.8184C24.0961 16.3288 25.6816 18.9827 25.6816 22.0001H27.6816ZM17.1082 32.5001C22.9405 32.5001 27.6816 27.8063 27.6816 22.0001H25.6816C25.6816 26.6872 21.8505 30.5001 17.1082 30.5001V32.5001ZM6.53478 22.0001C6.53478 27.8063 11.2759 32.5001 17.1082 32.5001V30.5001C12.366 30.5001 8.53478 26.6872 8.53478 22.0001H6.53478ZM12.5193 12.538C8.98305 14.2321 6.53478 17.8291 6.53478 22.0001H8.53478C8.53478 18.6339 10.5092 15.7187 13.3834 14.3418L12.5193 12.538Z"
              fill="white"
              mask="url(#path-3-inside-2_601_917)"
            />
            <path
              d="M24.1239 15.1328C23.5096 14.4032 23.5769 13.3246 24.2772 12.6765C25.0328 11.9773 26.2251 12.0503 26.8891 12.8365L28.2692 14.4702L25.707 17.0127L24.1239 15.1328Z"
              stroke="white"
            />
            <path
              d="M7.89575 12.0435C8.68359 11.2617 9.96094 11.2617 10.7488 12.0435L10.7992 12.0936C11.4885 12.7776 11.4885 13.8865 10.7992 14.5704L9.19417 16.1632L7.89575 14.8747C7.1079 14.0929 7.1079 12.8253 7.89575 12.0435Z"
              stroke="white"
            />
            <path
              d="M17.7956 19.1033C17.8419 19.0385 17.9166 19 17.9962 19C18.0735 19 18.1463 19.0362 18.1929 19.0979L19.5686 20.9182C20.5259 22.1847 19.6224 24 18.0348 24C16.4713 24 15.5616 22.233 16.47 20.9604L17.7956 19.1033Z"
              stroke="white"
            />
          </svg>

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.875C14.0711 16.875 15.75 15.1961 15.75 13.125C15.75 11.0539 14.0711 9.375 12 9.375C9.92893 9.375 8.25 11.0539 8.25 13.125C8.25 15.1961 9.92893 16.875 12 16.875Z"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.375 10.875C19.2485 10.8735 20.1103 11.0762 20.8916 11.4669C21.6729 11.8575 22.3521 12.4253 22.875 13.125"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.125 13.125C1.64794 12.4253 2.32714 11.8575 3.10843 11.4669C3.88972 11.0762 4.75149 10.8735 5.625 10.875"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.59998 20.25C7.09387 19.2386 7.86193 18.3861 8.81664 17.7899C9.77136 17.1936 10.8744 16.8774 12 16.8774C13.1256 16.8774 14.2286 17.1936 15.1833 17.7899C16.138 18.3861 16.9061 19.2386 17.4 20.25"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.62499 10.875C5.0556 10.8756 4.49779 10.7141 4.01676 10.4094C3.53572 10.1048 3.15133 9.6695 2.90848 9.15449C2.66563 8.63947 2.57437 8.06598 2.64535 7.50102C2.71633 6.93607 2.94663 6.40298 3.30932 5.96404C3.67202 5.52511 4.15215 5.19845 4.6936 5.02225C5.23505 4.84605 5.81546 4.82758 6.36702 4.96899C6.91858 5.11041 7.4185 5.40587 7.80838 5.82085C8.19825 6.23583 8.46198 6.7532 8.56874 7.3125"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4313 7.3125C15.538 6.7532 15.8018 6.23583 16.1916 5.82085C16.5815 5.40587 17.0814 5.11041 17.633 4.96899C18.1846 4.82758 18.765 4.84605 19.3064 5.02225C19.8479 5.19845 20.328 5.52511 20.6907 5.96404C21.0534 6.40298 21.2837 6.93607 21.3547 7.50102C21.4256 8.06598 21.3344 8.63947 21.0915 9.15449C20.8487 9.6695 20.4643 10.1048 19.9833 10.4094C19.5022 10.7141 18.9444 10.8756 18.375 10.875"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ml-2 text-sm font-light">500+ Clients</span>
              </div>

              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.375 20.25C7.82475 20.25 9 19.0747 9 17.625C9 16.1753 7.82475 15 6.375 15C4.92525 15 3.75 16.1753 3.75 17.625C3.75 19.0747 4.92525 20.25 6.375 20.25Z"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.625 9C19.0747 9 20.25 7.82475 20.25 6.375C20.25 4.92525 19.0747 3.75 17.625 3.75C16.1753 3.75 15 4.92525 15 6.375C15 7.82475 16.1753 9 17.625 9Z"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.375 9C7.82475 9 9 7.82475 9 6.375C9 4.92525 7.82475 3.75 6.375 3.75C4.92525 3.75 3.75 4.92525 3.75 6.375C3.75 7.82475 4.92525 9 6.375 9Z"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.37502 15V14.25C6.37378 13.9542 6.43113 13.661 6.54376 13.3875C6.6564 13.114 6.82208 12.8654 7.03126 12.6562C7.24044 12.4471 7.48897 12.2814 7.76252 12.1687C8.03606 12.0561 8.3292 11.9988 8.62502 12H15.375C15.6708 12.0012 15.964 11.9439 16.2375 11.8313C16.5111 11.7186 16.7596 11.5529 16.9688 11.3438C17.178 11.1346 17.3436 10.886 17.4563 10.6125C17.5689 10.339 17.6263 10.0458 17.625 9.75V9"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.375 9V15"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ml-2 text-sm font-light">
                  1000+ Github repositories
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_377_4115"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_377_4115)">
                    <path
                      d="M12 19.7001C11.15 19.7001 10.371 19.4918 9.663 19.0751C8.95433 18.6584 8.38333 18.0834 7.95 17.3501H5.15V16.6501H7.6C7.41667 16.1168 7.32067 15.5708 7.312 15.0121C7.304 14.4541 7.3 13.9001 7.3 13.3501H5.15V12.6501H7.3C7.3 12.0834 7.296 11.5208 7.288 10.9621C7.27933 10.4041 7.38333 9.86677 7.6 9.3501H5.15V8.6501H7.95C8.2 8.2001 8.51667 7.8041 8.9 7.4621C9.28333 7.12076 9.71667 6.8501 10.2 6.6501L8.35 4.8001L8.8 4.3501L10.9 6.4501C11.2667 6.3501 11.6333 6.3001 12 6.3001C12.3667 6.3001 12.7333 6.3501 13.1 6.4501L15.25 4.3501L15.7 4.8001L13.85 6.6501C14.3333 6.8501 14.7583 7.12076 15.125 7.4621C15.4917 7.8041 15.8 8.2001 16.05 8.6501H18.85V9.3501H16.4C16.6167 9.86677 16.7207 10.4041 16.712 10.9621C16.704 11.5208 16.7 12.0834 16.7 12.6501H18.85V13.3501H16.7C16.7 13.9001 16.696 14.4541 16.688 15.0121C16.6793 15.5708 16.5833 16.1168 16.4 16.6501H18.85V17.3501H16.05C15.6167 18.0834 15.046 18.6584 14.338 19.0751C13.6293 19.4918 12.85 19.7001 12 19.7001ZM12 19.0001C13.1 19.0001 14.0417 18.6084 14.825 17.8251C15.6083 17.0418 16 16.1001 16 15.0001V11.0001C16 9.9001 15.6083 8.95843 14.825 8.1751C14.0417 7.39176 13.1 7.0001 12 7.0001C10.9 7.0001 9.95833 7.39176 9.175 8.1751C8.39167 8.95843 8 9.9001 8 11.0001V15.0001C8 16.1001 8.39167 17.0418 9.175 17.8251C9.95833 18.6084 10.9 19.0001 12 19.0001ZM10.4 15.3501H13.6V14.6501H10.4V15.3501ZM10.4 11.3501H13.6V10.6501H10.4V11.3501Z"
                      fill="#333333"
                    />
                  </g>
                </svg>

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
                  <p className="text-sm text-dark">Top Engineers</p>
                  <p className="mt-3 text-sm text-dark2">Coming from...</p>
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
