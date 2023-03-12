import { useContext } from 'react'
import { StripeContext } from '../contexts/StripeContext'

const useStripeContext = () => {
  const context = useContext(StripeContext)
  if (!context) {
    throw new Error(
      'useStripeContext must be used within a StripeContextProvider',
    )
  }
  return context
}

export default useStripeContext
