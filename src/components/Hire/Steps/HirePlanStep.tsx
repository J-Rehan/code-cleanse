import { useFormikContext } from 'formik'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import useSteps from '../../../hooks/useSteps'
import { initialValues } from '../../../pages/hire'
import Button from '../../shared/Button/Button'
import FormikRadioGroup from '../../shared/Formik/FormikRadioGroup/FormikRadioGroup'
import { useEffect, useState } from 'react'
import { cn } from '../../../utils/style'
import PricingCard from '../PricingCard/PricingCard'
import useStripeContext from '../../../hooks/useStripeContext'
import API from '../../../core/services'
import { SubscriptionType } from '../../../@types/common'

const plans = [
  {
    id: '1',
    value: 'OneTime' as SubscriptionType,
    title: 'One Time Review',
    cost: 2999,
    total: 2999,
    isOneTime: true,
    costFrequency: 'One off payment',
    callout: '',
    description:
      "Optimize your code's quality with our comprehensive one-time review. Quickly identify and address any issues to ensure success.",
  },
  {
    id: '3',
    value: 'Monthly' as SubscriptionType,
    title: 'Monthly Plan',
    cost: 1999,
    total: 2999,
    isOneTime: false,
    costFrequency: 'After 1st payment of $2,999',
    callout: 'Most Flexible',
    description:
      'Stay ahead of the competition with our monthly review service. Our experts provide insightful feedback to keep your code in top shape.',
  },
  {
    id: '2',
    value: 'Annual' as SubscriptionType,
    title: 'Annual Plan',
    cost: 999,
    total: 12 * 999,
    isOneTime: false,
    discountPercent: 50,
    costFrequency: 'Paid yearly',
    callout: 'Most Economic',
    description:
      'Save big with our annual plan. Monthly code reviews keep your code optimized for success year-round, without breaking the bank.',
  },
]

const HirePlanStep: React.FC = () => {
  const formik = useFormikContext<typeof initialValues>()
  const { dispatch } = useSteps()
  const [currentStep, setCurrentStep] = useState(1)
  const [recommended, setRecommended] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      let step = 0
      if (formik.values.helpMethod.join('').includes('on-going')) {
        step = 1
      } else {
        step = 0
      }

      setRecommended(step)
      setCurrentStep(step)
      formik.setFieldValue('plan', plans[step].value)
    })()
  }, [])

  const handleSelect = async () => {
    const selectedPlan = plans[currentStep]
    formik.setFieldValue('plan', selectedPlan.value)

    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-black text-2xl font-semibold text-center">
        You focus on your business,
      </h2>

      <h4 className="text-black text-2xl font-normal mb-4 text-center">
        we&apos;ll focus on your software & technical team
      </h4>

      <div className="bg-[#ddd] w-full h-[1px] max-w-[852px] mx-auto mb-6" />

      <p className="text-center mb-8">
        Our Team Recommends the <strong>{plans[recommended]?.title}</strong> for{' '}
        <strong>{formik.values.projectName}</strong>
      </p>

      <div>
        <div className="hidden md:flex items-start justify-center">
          {plans.map((plan, index) => {
            const handleCardSelect = async () => {
              formik.setFieldValue('plan', plan.value)
            }

            return (
              <PricingCard
                isRecommended={recommended === index}
                {...plan}
                key={plan.id}
                className="max-w-[268px]"
                onClick={handleCardSelect}
                selected={formik.values.plan === plan.value}
                onSelect={() => dispatch({ type: 'NEXT_STEP' })}
              />
            )
          })}
        </div>

        <div className="md:hidden">
          <Carousel
            centerMode
            centerSlidePercentage={80}
            showThumbs={false}
            onChange={(index) => {
              formik.setFieldValue('plan', plans[index].value)
              setCurrentStep(index)
            }}
            renderIndicator={(goTo, selected) => {
              return (
                <div
                  onClick={goTo}
                  className={cn(
                    'cursor-pointer w-2 h-2 bg-dark2 rounded-full',
                    selected && '!w-8 bg-[#000]',
                  )}
                />
              )
            }}
            showArrows={false}
            showStatus={false}
            onClickItem={(index) => {
              formik.setFieldValue('plan', plans[index].value)
              setCurrentStep(index)
            }}
            selectedItem={currentStep}
          >
            {plans.map((plan, index) => {
              return (
                <PricingCard
                  {...plan}
                  key={plan.id}
                  onSelect={handleSelect}
                  selected={index === currentStep}
                  isRecommended={recommended === currentStep}
                />
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HirePlanStep
