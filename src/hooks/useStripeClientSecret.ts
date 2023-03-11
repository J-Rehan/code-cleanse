import { useEffect, useState } from 'react'

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
    setClientSecret(clientSecret)
  }

  useEffect(() => {
    fetchClientSecret(2999)
  }, [])

  return {
    clientSecret,
    fetchClientSecret,
  }
}

export default useStripeClientSecret
