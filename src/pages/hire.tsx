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
import useStripeClientSecret from '../hooks/useStripeClientSecret'
import { monthlyCost, yearlyCost } from '../core/config/app'
import { toast } from 'react-hot-toast'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'

export const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  productCategory: '',
  description: '',
  plan: 'Monthly',
  errorMessage: '',
  developers: [{ name: '', email: '', role: '' }],
}

const HirePage: NextPage = () => {
  const router = useRouter()
  const { state, dispatch } = useSteps()
  const stripe = useStripe()
  const elements = useElements()
  const { fetchClientSecret } = useStripeClientSecret()

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: hireValidationSchema,
    async onSubmit(values, formik) {
      formik.setSubmitting(true)
      formik.setFieldValue('errorMessage', '')
      const { error } = await stripe!.confirmPayment({
        elements: elements!,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}/hire-success`,
        },
        redirect: 'if_required',
      })

      if (error) {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          formik.setFieldValue('errorMessage', (error as any).message)
        } else {
          formik.setFieldValue('errorMessage', 'An unexpected error occured.')
        }
        toast.error('Payment failed!')
      } else {
        toast.success('Payment successful!')
        fetch('/api/send-email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            if (res.success) {
              router.push('/hire-success')
              dispatch({ type: 'SET_STEP', payload: 0 })
            } else {
              console.log(res)
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
      formik.setSubmitting(false)
    },
  })

  useEffect(() => {
    fetchClientSecret(
      formik.values.plan === 'Monthly' ? monthlyCost : yearlyCost,
    )
  }, [])

  // useEffect(() => {
  //   // @ts-ignore
  //   const url = new URL(window.location)
  //   const step = url.searchParams.get('step')
  //   if (step) dispatch({ type: 'SET_STEP', payload: Number(step) })
  // }, [dispatch, window.location])

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Head>
          <title>Hire Code Cleanse</title>
        </Head>
        <div className="h-screen flex flex-col md:bg-[#F8F8F8]">
          <div className="hire-header w-full bg-black p-6">
            <div className="flex justify-between items-center">
              <div />
              <Link href="/">
                <Image
                  priority
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
  const { clientSecret } = useStripeClientSecret()

  useEffect(() => {
    setStripePromise(
      loadStripe(
        'pk_test_51MT6H0Ew4G60H813u3itsxedG5YDQ4GlIqiOPk41BhwbWV2GcZ7kWMHMWVOSs12y7ePXlTvRvIvWNVE3b8IVqBZV00sJ0iRZ18',
      ),
    )
  }, [])

  if (!stripePromise || !clientSecret) {
    return (
      <div>
        <CloseHeader />

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
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <HirePage />
    </Elements>
  )
}

export default HireRoot
