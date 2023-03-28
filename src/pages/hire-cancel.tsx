import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'

const HireCancelPage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div>
      <Head>
        <title>Payment Failed | Code Cleanse</title>
      </Head>
      <CloseHeader />
      <p className="p-4">Payment failed!, Redirecting in 5 sec.</p>
    </div>
  )
}

export default HireCancelPage
