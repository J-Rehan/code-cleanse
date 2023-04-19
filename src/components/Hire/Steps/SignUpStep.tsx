import { addDoc, collection } from 'firebase/firestore'
import { useFormikContext } from 'formik'
import { useState } from 'react'
import { userCollection } from '../../../core/config/app'
import { firestore } from '../../../core/lib/firebase'
import useSteps from '../../../hooks/useSteps'
import { initialValues } from '../../../pages/hire'
import Button from '../../shared/Button/Button'
import FormikTextInput from '../../shared/Formik/FormikTextInput/FormikTextInput'

const normalizeInput = (value: any, previousValue: any) => {
  if (!value) return value
  const currentValue = value.replace(/[^\d]/g, '')
  const cvLength = currentValue.length

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue
    if (cvLength < 7)
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      6,
    )}-${currentValue.slice(6, 10)}`
  }
}

const SignUp: React.FC = () => {
  const { state, dispatch } = useSteps()
  const [processing, setProcessing] = useState(false)
  const formik = useFormikContext<typeof initialValues>()

  const { values } = formik

  const nextStep = async () => {
    setProcessing(true)
    const firebaseRes = await addDoc(collection(firestore, userCollection), {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      createdAt: new Date().toISOString(),
      paid: false,
    })
    dispatch({ type: 'SET_FIREBASE_DOC_ID', payload: firebaseRes.id })
    dispatch({ type: 'NEXT_STEP' })
    setProcessing(false)
  }

  const step = state.steps.find((step) => step.name === 'Sign Up')

  const disabled = !!Object.keys(formik.errors).find((key) =>
    step?.fields.includes(key),
  )

  return (
    <div className="md:relative md:w-[520px] h-full md:mx-auto md:bg-white md:mt-8 md:rounded-2xl md:border md:border-[#DDDDDD]">
      <div className="py-8 px-6 flex flex-col h-full">
        <h2 className="text-dark text-2xl font-normal text-center">
          Let&apos;s get started
        </h2>

        <div className="mt-11 mb-auto">
          <FormikTextInput
            required
            autoFocus
            type="text"
            label="Your name"
            name="fullName"
            placeholder="Enter your name"
          />
          <FormikTextInput
            required
            type="email"
            label="Your email"
            name="email"
            placeholder="Enter your email"
            className="mt-6"
          />
          <FormikTextInput
            required
            type="tel"
            label="Your cell phone number"
            name="phone"
            placeholder="Enter your cell phone number"
            className="mt-6"
            formatter={(value) => {
              // @ts-ignore
              return normalizeInput(value)
            }}
          />
        </div>

        <Button
          type="button"
          disabled={processing || disabled}
          onClick={nextStep}
          className="mt-4"
        >
          <span>
            {processing ? (
              <span>Processing...</span>
            ) : (
              <span>
                <strong>Next:</strong> Your project
              </span>
            )}
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SignUp
