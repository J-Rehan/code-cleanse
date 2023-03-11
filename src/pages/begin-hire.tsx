import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { features } from '../core/config/app'
import Button from '../components/shared/Button/Button'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import StickyAction from '../components/shared/StickyAction/StickyAction'

const BeginHirePage: NextPage = () => {
  return (
    <div>
      <CloseHeader />
      <StickyAction redirectUrl="/hire" scrollThreshold={0} />
      <div className="px-8 mt-10 py-10 bg-[#f8f8f8]">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="text-3xl text-center md:px-20 text-dark font-semibold mb-8">
            Improve your code quality and performance with our expert code
            review service.
          </h2>

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
                  <p className="text-sm text-center">{feature.description}</p>
                </div>
              )
            })}
          </div>
          <Link href="/hire" className="hidden md:block">
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
      </div>

      <div className="pt-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl mb-8 font-semibold">
          Here&apos;s a sample Report
        </h3>
        <Image src="/preview.jpg" width={852} height={600} alt="Preview" />
      </div>
    </div>
  )
}

export default BeginHirePage
