import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HireCancelPage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return <div>Payment failed!, Redirecting in 5 sec.</div>
}

export default HireCancelPage
