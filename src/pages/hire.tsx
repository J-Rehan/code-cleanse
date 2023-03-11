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
import { toast } from 'react-hot-toast'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import { firestore } from '../core/lib/firebase'
import { addDoc, collection } from 'firebase/firestore'

export const initialValues = {
  fullName: process.env.NODE_ENV === 'development' ? 'asdf' : '',
  email: process.env.NODE_ENV === 'development' ? 'asdf@ok.com' : '',
  phone: process.env.NODE_ENV === 'development' ? '123123123' : '',
  productCategory: process.env.NODE_ENV === 'development' ? 'iOS App' : '',
  description: process.env.NODE_ENV === 'development' ? 'asdfasdf' : '',
  plan: 'Monthly',
  projectName: process.env.NODE_ENV === 'development' ? 'asdfasd' : '',
  errorMessage: '',
  helpMethod: [],
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
      await addDoc(collection(firestore, 'users'), {
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        projectName: values.projectName,
        helpMethods: values.helpMethod,
        productCategory: values.productCategory.split(','),
        description: values.description,
        developers: values.developers,
        plan: values.plan,
      })
      const { error } = await stripe!.confirmPayment({
        elements: elements!,
        confirmParams: {
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
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            firstName: values.fullName.split(' ')[0],
            projectName: values.projectName,
          }),
        }).then((res) => res.json())

        if (res.success) {
          router.push('/hire-success')
          formik.resetForm()
          formik.setSubmitting(false)
          dispatch({ type: 'SET_STEP', payload: 0 })
        } else {
          console.log(res)
        }
      }
    },
  })

  const { plan } = formik.values

  useEffect(() => {
    let amount = 0
    if (plan) {
      if (plan === 'OneTime') {
        amount = 2999
      } else if (plan === 'Annual') {
        amount = 999 * 12
      } else if (plan === 'Monthly') {
        amount = 2999
      }
      console.log(amount)
      fetchClientSecret(amount)
    }
  }, [plan])

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Head>
          <title>Hire Code Cleanse</title>
        </Head>
        <div className="h-screen flex flex-col md:bg-[#F8F8F8]">
          <CloseHeader />
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
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY))
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
    <Elements
      key={clientSecret}
      stripe={stripePromise}
      options={{ clientSecret }}
    >
      <HirePage />
    </Elements>
  )
}

export default HireRoot
