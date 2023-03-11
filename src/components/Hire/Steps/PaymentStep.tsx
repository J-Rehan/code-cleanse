import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'
import { useFormikContext } from 'formik'
import Image from 'next/image'
import { initialValues } from '../../../pages/hire'
import Button from '../../shared/Button/Button'

interface PaymentStepProps {}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const PaymentStep: React.FC<PaymentStepProps> = (props) => {
  const formik = useFormikContext<typeof initialValues>()

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

          <div className="pt-2 border-t border-t-[#e7e7e7]">
            <Button type="submit" className="mt-4">
              <strong>{formik.isSubmitting ? 'Processing...' : 'Pay'}</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentStep
