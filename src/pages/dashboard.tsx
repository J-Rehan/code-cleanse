import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const DashboardPage: NextPage = () => {
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

      <div className="w-full flex h-[200px] justify-center items-center">
        <h2 className="font-semibold text-3xl">Coming soon</h2>
      </div>
    </div>
  )
}

export default DashboardPage
