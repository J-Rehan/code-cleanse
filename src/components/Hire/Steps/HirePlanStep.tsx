import { useFormikContext } from 'formik'
import Image from 'next/image'
import { PaymentElement } from '@stripe/react-stripe-js'

import useSteps from '../../../hooks/useSteps'
import { initialValues } from '../../../pages/hire'
import Button from '../../shared/Button/Button'
import FormikRadioGroup from '../../shared/Formik/FormikRadioGroup/FormikRadioGroup'

const plans = [
  {
    id: '1',
    value: 'Monthly',
    title: 'Monthly',
    subtitle: '$1000 / month',
    callout: 'Paid monthly',
  },
  {
    id: '2',
    value: 'Yearly',
    title: 'Yearly',
    subtitle: '$850 / month',
    callout: 'Paid annually',
  },
]

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const HirePlanStep: React.FC = () => {
  const formik = useFormikContext<typeof initialValues>()
  const { state, dispatch } = useSteps()

  const step = state.steps.find((step) => step.name === 'Hire plan')

  const disabled =
    !!Object.keys(formik.errors).find((key) => step?.fields.includes(key)) ||
    formik.isSubmitting

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-dark text-2xl font-normal mb-8">Hire Code Cleanse</h2>

      <div>
        <h4 className="uppercase text-xs font-semibold mb-4">
          Choose your plan
        </h4>
        <FormikRadioGroup name="plan" items={plans} />
      </div>

      <div className="mt-10 flex-1">
        <h4 className="uppercase text-xs font-semibold mb-4">
          Enter your credit card details
        </h4>

        {formik.values.errorMessage && (
          <span className="text-red-500 font-bold uppercase">
            {formik.values.errorMessage}
          </span>
        )}

        <PaymentElement id="payment-element" className="h-full" />
      </div>

      <Image
        width={140}
        height={28}
        alt="powered-by-stripe"
        src="/powered-by-stripe.png"
        className="mt-10 mb-6 mx-auto"
      />

      <div className="pt-2 border-t border-t-[#e7e7e7]">
        {formik.values.plan && (
          <p className="text-center">
            <span>
              paying today:{' '}
              <strong className="text-green font-semibold">
                {formatter.format(
                  formik.values.plan === 'Yearly' ? 850 * 12 : 1000,
                )}
              </strong>
            </span>
          </p>
        )}

        <Button type="submit" disabled={disabled} className="mt-4">
          <strong>{formik.isSubmitting ? 'Processing...' : 'Hire plan'}</strong>
        </Button>
      </div>
    </div>
  )
}

export default HirePlanStep
