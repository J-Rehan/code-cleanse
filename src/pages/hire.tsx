import { NextPage } from 'next'
import StepsHeader from '../components/Hire/StepsHeader/StepsHeader'
import { Form, FormikProvider, useFormik } from 'formik'
import { hireValidationSchema } from '../core/validation/hire'
import { steps } from '../core/config/Steps'
import useSteps from '../hooks/useSteps'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import { firestore } from '../core/lib/firebase'
import { addDoc, collection } from 'firebase/firestore'
import StripeContextProvider from '../contexts/StripeContext'
import { useEffect } from 'react'

export const initialValues = {
  fullName: process.env.NODE_ENV === 'development' ? 'John Doe' : '',
  email: process.env.NODE_ENV === 'development' ? 'johndoe@example.com' : '',
  phone: process.env.NODE_ENV === 'development' ? '3333333334' : '',
  productCategory: process.env.NODE_ENV === 'development' ? 'iOS App' : '',
  description:
    process.env.NODE_ENV === 'development'
      ? 'TruDoc is a platform that connect Doctors and patients'
      : '',
  plan: 'Monthly',
  projectName: process.env.NODE_ENV === 'development' ? 'TruDoc' : '',
  errorMessage: '',
  helpMethod: [],
  developers: [{ name: '', email: '', role: '' }],
}

const HirePage: NextPage = () => {
  const router = useRouter()
  const { state, dispatch } = useSteps()

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: hireValidationSchema,
    async onSubmit(values, formik) {},
  })

  useEffect(() => {
    dispatch({ type: 'SET_STEP', payload: 0 })
    formik.resetForm()
  }, [])

  return (
    <StripeContextProvider>
      <Head>
        <title>
          Hire Experts - {state.steps[state.currentStep].name} | Code Cleanse
        </title>
      </Head>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className="h-screen flex flex-col md:bg-[#F8F8F8]">
            <CloseHeader />
            <StepsHeader />
            {steps[state.currentStep]?.component}
          </div>
        </Form>
      </FormikProvider>
    </StripeContextProvider>
  )
}

export default HirePage
