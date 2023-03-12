import React, { useEffect, useState } from 'react'
import { Elements, PaymentElement } from '@stripe/react-stripe-js'
import { useFormikContext } from 'formik'
import { initialValues } from '../../../pages/hire'
import PaymentForm from './PaymentForm'
import useStripeContext from '../../../hooks/useStripeContext'
import { loadStripe } from '@stripe/stripe-js'

interface PaymentStepProps {}

const PaymentStep: React.FC<PaymentStepProps> = (props) => {
  const [stripePromise, setStripePromise] = useState<any>(null)
  const { clientSecret, setClientSecret } = useStripeContext()

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY))
  }, [])

  let content = <></>

  if (!stripePromise || !clientSecret) {
    content = (
      <div>
        <div className="flex w-full h-[90vh] justify-center items-center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  } else {
    content = (
      <Elements
        key={clientSecret}
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <PaymentForm />
      </Elements>
    )
  }

  return content
}

export default PaymentStep
