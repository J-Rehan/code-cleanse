import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import Head from 'next/head'

const DashboardPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard | Code Cleanse</title>
      </Head>
      <CloseHeader />

      <div className="w-full flex h-[200px] justify-center items-center">
        <h2 className="font-semibold text-3xl">Coming soon</h2>
      </div>
    </div>
  )
}

export default DashboardPage
