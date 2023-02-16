import { useFormikContext } from 'formik'
import useSteps from '../../../hooks/useSteps'
import Button from '../../shared/Button/Button'
import FormikTextInput from '../../shared/Formik/FormikTextInput/FormikTextInput'

const AboutYouStep: React.FC = () => {
  const { state, dispatch } = useSteps()
  const formik = useFormikContext()

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' })
  }

  const step = state.steps.find((step) => step.name === 'Sign Up')

  const disabled = !!Object.keys(formik.errors).find((key) =>
    step?.fields.includes(key),
  )

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-dark text-2xl font-normal text-center">
        Create your account
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
        />
        <FormikTextInput
          required
          type="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          className="mt-6"
        />
        <FormikTextInput
          required
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Enter password"
          className="mt-6"
        />
      </div>

      <Button
        type="button"
        disabled={disabled}
        onClick={nextStep}
        className="mt-4"
      >
        <span>
          <strong>Next:</strong> Your project
        </span>
      </Button>
    </div>
  )
}

export default AboutYouStep
