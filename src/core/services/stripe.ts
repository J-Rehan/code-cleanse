import { SubscriptionType } from '../../@types/common'

interface FetchClientSecretParams {
  amount: number
  subscriptionType: SubscriptionType
  name?: string
  email?: string
}

export const fetchClientSecret = async (params: FetchClientSecretParams) => {
  const { amount, subscriptionType, name, email } = params
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, amount, subscriptionType }),
  })
  const { clientSecret } = await response.json()
  return clientSecret
}
