import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import StepsHeader from '../components/Hire/StepsHeader/StepsHeader'
import Button from '../components/shared/Button/Button'
import { Form, FormikProvider, useFormik } from 'formik'
import { hireValidationSchema } from '../core/validation/hire'
import { steps } from '../core/config/Steps'
import useSteps from '../hooks/useSteps'
import { useEffect } from 'react'
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
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: hireValidationSchema,
    onSubmit(values) {
      console.log(values)
      formik.setSubmitting(true)
      setTimeout(() => {
        formik.setSubmitting(false)
        router.push('/developer-detail')
      }, 3000)
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

export default HirePage
