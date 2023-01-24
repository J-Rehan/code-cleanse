import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import StepsHeader from '../components/Hire/StepsHeader/StepsHeader'
import { Form, FormikProvider, useFormik } from 'formik'
import { hireValidationSchema } from '../core/validation/hire'
import { steps } from '../core/config/Steps'
import useSteps from '../hooks/useSteps'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  productCategory: '',
  description: '',
  plan: '',
}

const HirePage: NextPage = () => {
  const router = useRouter()
  const { state, dispatch } = useSteps()
  const stripe = useStripe()
  const elements = useElements()
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: hireValidationSchema,
    async onSubmit(values, formik) {
      formik.setSubmitting(true)
      const { error } = await stripe!.confirmPayment({
        elements: elements!,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}/developer-detail`,
        },
        redirect: 'if_required',
      })

      if (error) {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          alert(error.message)
          // setMessage(error.message)
        } else {
          alert('An unexpected error occured.')
        }
      }
    },
  })

  useEffect(() => {
    const step = window.location.hash.split('#')[1]
    if (step) {
      dispatch({ type: 'SET_STEP', payload: Number(step) })
    }
  }, [dispatch])

  // console.log('Errors: ', formik.errors)
  // console.log('Values: ', formik.values)

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Head>
          <title>Hire Code Cleanse</title>
        </Head>
        <div className="h-screen flex flex-col">
          <div className="hire-header w-full bg-black p-6">
            <div className="flex justify-between items-center">
              <div />
              <Link href="/">
                <Image
                  src="/logo-full.png"
                  width={200}
                  height={32}
                  alt="logo"
                />
              </Link>
              <Link href="/">
                <Image src="/close.png" width={24} height={24} alt="close" />
              </Link>
            </div>
          </div>

          <StepsHeader />

          {steps[state.currentStep]?.component}
        </div>
      </Form>
    </FormikProvider>
  )
}

const HireRoot: React.FC = () => {
  const [stripePromise, setStripePromise] = useState<any>(null)
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    setStripePromise(
      loadStripe(
        'pk_test_51MT6H0Ew4G60H813u3itsxedG5YDQ4GlIqiOPk41BhwbWV2GcZ7kWMHMWVOSs12y7ePXlTvRvIvWNVE3b8IVqBZV00sJ0iRZ18',
      ),
    )
  }, [])

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify({
        amount: 500,
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json()
      setClientSecret(clientSecret)
    })
  }, [])

  if (!stripePromise || !clientSecret) {
    // TODO: Replace with loader...
    return <div />
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <HirePage />
    </Elements>
  )
}

export default HireRoot
