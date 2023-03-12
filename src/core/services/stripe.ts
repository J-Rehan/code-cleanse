export const fetchClientSecret = async (amount: number) => {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })
  const { clientSecret } = await response.json()
  return clientSecret
}
