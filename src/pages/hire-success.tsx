import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/shared/Header/Header'
import { cn } from '../utils/style'

const HireSuccessPage: NextPage = () => {
  const haveDeveloper = 'NO'
  return (
    <div>
      <Header>
        <div className="">
          <div className="text-white flex flex-col items-center p-6">
            <Image src="/check_circle.png" height={56} width={56} alt="check" />
            <h2 className="font-normal text-2xl text-center mt-2">
              Thank you. We&lsquo;ll also contact your developer to make sure
              your code lives up to its full potential.
            </h2>
            <Link href="/contact" className="mt-6 uppercase text-xs font-bold">
              <p>View all information provided</p>
            </Link>
          </div>
        </div>
        <div />
      </Header>
    </div>
  )
}

export default HireSuccessPage
