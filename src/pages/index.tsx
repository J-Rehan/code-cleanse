import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import Section from '../components/Landing/Section/Section'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'

const HomePage: NextPage = () => {
  return (
    <div>
      <Header>
        <div className="flex flex-col items-center p-6">
          <h4 className="text-white text-center text-base font-normal leading-5 px-2 py-1 border-[0.5px] border-white rounded">
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
                deleteSpeed={50}
                words={[
                  'scale your code',
                  'secure your code',
                  'audit your app',
                ]}
              />
            </div>
          </h1>

          <Link href="/hire" className="mt-12">
            <button className="text-base leading-5 font-bold text-dark bg-white min-w-[300px] sm:w-[340px] p-4 rounded-lg">
              Hire Experts Now
            </button>
          </Link>
        </div>
        <div />
      </Header>
      <main className="px-6 py-9">
        <Head>
          <title>Code Cleanse</title>
        </Head>
        <div className="max-w-[394px] flex flex-col w-full items-center mx-auto">
          <h1 className="text-2xl font-normal text-center">
            Trusted by leading organizations
          </h1>

          <div className="flex justify-around mt-6 w-[332px]">
            <Image
              src="/meta.png"
              width={38}
              height={32}
              alt="meta"
              className="object-contain"
            />
            <Image
              src="/upwork.png"
              width={72}
              height={40}
              alt="upwork"
              className="object-contain"
            />
            <Image
              src="/pseg.png"
              width={76}
              height={20}
              alt="pseg"
              className="object-contain"
            />
            <Image
              src="/uber.png"
              width={52}
              height={30}
              alt="uber"
              className="object-contain"
            />
          </div>

          <div className="mt-6 space-y-4 flex flex-col items-center">
            <div className="flex items-center">
              <Image src="/user-three.png" width={24} height={24} alt="user" />
              <span className="ml-2 text-sm font-light">500+ Clients</span>
            </div>

            <div className="flex items-center">
              <Image src="/git-branch.png" width={24} height={24} alt="user" />
              <span className="ml-2 text-sm font-light">
                1000+ Github repositories
              </span>
            </div>

            <div className="flex items-center">
              <Image src="/bug-report.png" width={24} height={24} alt="user" />
              <span className="ml-2 text-sm font-light">
                10,000+ Bugs fixed
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[1024px] mx-auto">
          <div className="my-8 bg-gray h-[1px] w-full" />

          <div className="flex flex-col items-center">
            <Section
              title="About us"
              subtitle="Code Cleanse Lorem ipsum dolar sit amet"
              imageUrl="/section1-image.png"
              desktopImageUrl="/section1-image-desktop.png"
              description="Code Cleanse Lorem ipsuNullam lacus leo, posuere eget mauris ac, scelerisque congue dui duis maximus."
              items={[
                'Nullam porta, augue in tempusj',
                'Hendrerit sapien quam elementum',
                'Vivamus pharetra enim pellentesque.',
                'Nunc sit amet accumsan urna',
              ]}
            />

            <div className="mt-14 mb-8 bg-gray h-[1px] w-full" />

            <Section
              reverse
              title="Our Team"
              subtitle="Our Team Lorem ipsum dolar sit amet"
              imageUrl="/section2-image.png"
              desktopImageUrl="/section2-image-desktop.png"
              description="Code Cleanse Lorem ipsuNullam lacus leo, posuere eget mauris ac, scelerisque congue dui duis maximus."
              items={[
                'Nullam porta, augue in tempusj',
                'Hendrerit sapien quam elementum',
                'Vivamus pharetra enim pellentesque.',
                'Nunc sit amet accumsan urna',
              ]}
            />

            <div className="mt-14 mb-8 bg-gray h-[1px] w-full" />

            <Section
              title="Our Services"
              subtitle="Our services Lorem ipsum dolar sit amet"
              imageUrl="/section3-image.png"
              desktopImageUrl="/section3-image-desktop.png"
              description="Code Cleanse Lorem ipsuNullam lacus leo, posuere eget mauris ac, scelerisque congue dui duis maximus."
              items={[
                'Nullam porta, augue in tempusj',
                'Hendrerit sapien quam elementum',
                'Vivamus pharetra enim pellentesque.',
                'Nunc sit amet accumsan urna',
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
