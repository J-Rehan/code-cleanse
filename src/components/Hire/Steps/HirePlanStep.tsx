import { useFormikContext } from 'formik'
import Image from 'next/image'
import useSteps from '../../../hooks/useSteps'
import { initialValues } from '../../../pages/hire'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../../../utils/formatter'
import Button from '../../shared/Button/Button'
import FormikRadioGroup from '../../shared/Formik/FormikRadioGroup/FormikRadioGroup'
import FormikTextInput from '../../shared/Formik/FormikTextInput/FormikTextInput'

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

  const disabled = !!Object.keys(formik.errors).find((key) =>
    step?.fields.includes(key),
  )

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-dark text-2xl font-normal mb-8">Hire Code Cleanse</h2>

      <div>
        <h4 className="uppercase text-xs font-semibold mb-4">
          Choose your plan
        </h4>
        <FormikRadioGroup name="plan" items={plans} />
      </div>

      <div className="mt-10 mb-auto">
        <h4 className="uppercase text-xs font-semibold mb-4">
          Enter your credit card details
        </h4>

        <FormikTextInput
          label="Card number"
          name="cardNumber"
          pattern="[\d| ]{16,22}"
          maxLength={19}
          formatter={formatCreditCardNumber}
          placeholder="Enter your card number"
        />

        <div className="flex space-x-4 mt-8">
          <FormikTextInput
            label="Expiration date"
            name="expirationDate"
            placeholder="MM/YY"
            formatter={formatExpirationDate}
          />

          <FormikTextInput
            label="Expiration date"
            name="cvc"
            placeholder="XXX"
            formatter={formatCVC}
          />
        </div>

        <Image
          src="/powered-by-stripe.png"
          width={140}
          height={28}
          alt="powered-by-stripe"
          className="mt-10 mb-6 mx-auto"
        />
      </div>

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
        <Button disabled={disabled} onClick={nextStep} className="mt-4">
          <span>
            <strong>Hire plan</strong>
          </span>
        </Button>
      </div>
    </div>
  )
}

export default HirePlanStep
