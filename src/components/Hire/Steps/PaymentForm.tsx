import React from 'react'
import Image from 'next/image'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useFormikContext } from 'formik'
import { initialValues } from '../../../pages/hire'
import Button from '../../shared/Button/Button'
import toast from 'react-hot-toast'

interface PaymentFormProps {}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const PaymentForm: React.FC<PaymentFormProps> = (props) => {
  const formik = useFormikContext<typeof initialValues>()
  const stripe = useStripe()
  const elements = useElements()

  const handleProceed = async () => {
    formik.setSubmitting(true)
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
      formik.submitForm()
    }
  }

  return (
    <div className="md:relative md:w-[520px] md:mx-auto md:bg-white md:mt-8 md:rounded-2xl md:border md:border-[#DDDDDD]">
      <div className="py-8 px-6 flex flex-col h-full">
        <div className="flex items-center mb-8 justify-between">
          <h2 className="text-dark text-2xl font-normal">Payment</h2>
          <Image
            width={140}
            height={28}
            alt="powered-by-stripe"
            src="/powered-by-stripe.png"
          />
        </div>

        <h4 className="uppercase text-xs font-semibold">
          Enter you credit card details
        </h4>

        <PaymentElement id="payment-element" className="h-full" />

        <div className="pt-2 border-t border-t-[#e7e7e7]">
          {formik.values.plan && (
            <p className="text-center my-4">
              <span>
                paying today:{' '}
                <strong className="text-green font-semibold">
                  {formatter.format(
                    formik.values.plan === 'OneTime'
                      ? 2999
                      : formik.values.plan === 'Annual'
                      ? 999 * 12
                      : 2999,
                  )}
                </strong>
              </span>
            </p>
          )}

          <div className="mt-10 flex-1">
            {formik.values.errorMessage && (
              <span className="text-red-500 font-bold uppercase">
                {formik.values.errorMessage}
              </span>
            )}
          </div>

          <div className="pt-2 border-t border-t-[#e7e7e7]">
            <Button type="button" className="mt-4" onClick={handleProceed}>
              <strong>{formik.isSubmitting ? 'Processing...' : 'Pay'}</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentForm
