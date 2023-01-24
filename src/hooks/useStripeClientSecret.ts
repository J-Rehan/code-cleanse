import { useEffect, useState } from 'react'
import { yearlyCost } from '../core/config/app'

const useStripeClientSecret = () => {
  const [clientSecret, setClientSecret] = useState('')

  const fetchClientSecret = async (amount: number) => {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
    const { clientSecret } = await response.json()
    console.log(clientSecret)
    setClientSecret(clientSecret)
  }

  useEffect(() => {
    fetchClientSecret(yearlyCost)
  }, [])

  return {
    clientSecret,
    fetchClientSecret,
  }
}

export default useStripeClientSecret
