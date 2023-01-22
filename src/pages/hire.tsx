import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import StepsHeader from '../components/Hire/StepsHeader/StepsHeader'
import Button from '../components/shared/Button/Button'
import { Form, FormikProvider, useFormik } from 'formik'
import { hireValidationSchema } from '../core/validation/hire'
import { steps } from '../core/config/Steps'
import useSteps from '../hooks/useSteps'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
}

const HirePage: NextPage = () => {
  const { state, dispatch } = useSteps()
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: hireValidationSchema,
    onSubmit(values) {
      console.log(values)
    },
  })

  console.log('Errors: ', formik.errors)
  console.log('Values: ', formik.values)

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
