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

const plans = [
  {
    id: '1',
    value: 'OneTime',
    title: 'One Time Review',
    cost: 2999,
    isOneTime: true,
    costFrequency: 'One off payment',
    callout: '',
    description:
      "Optimize your code's quality with our comprehensive one-time review. Quickly identify and address any issues to ensure success.",
  },
  {
    id: '3',
    value: 'Monthly',
    title: 'Monthly Plan',
    cost: 1999,
    isOneTime: false,
    costFrequency: 'After 1st payment of $2,999',
    callout: 'Most Flexible',
    description:
      'Stay ahead of the competition with our monthly review service. Our experts provide insightful feedback to keep your code in top shape.',
  },
  {
    id: '2',
    value: 'Annual',
    title: 'Annual Plan',
    cost: 999,
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
  const { state, dispatch } = useSteps()
  const [currentStep, setCurrentStep] = useState(1)
  const [recommended, setRecommended] = useState<number | null>(null)

  useEffect(() => {
    if (formik.values.helpMethod.join('').includes('on-going')) {
      setRecommended(1)
      setCurrentStep(1)

      formik.setFieldValue('plan', plans[1].value)
    } else {
      setRecommended(0)
      setCurrentStep(0)
      formik.setFieldValue('plan', plans[0].value)
    }
  }, [])

  const handleSelect = () => {
    formik.setFieldValue('plan', plans[currentStep].value)
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-black text-2xl font-semibold text-center">
        Let us manage your technical team
      </h2>

      <h4 className="text-black text-2xl font-normal mb-4 text-center">
        white you focus on growing your business.
      </h4>

      <div className="bg-[#ddd] w-full h-[1px] max-w-[852px] mx-auto mb-6" />

      <p className="text-center mb-8">
        Our Team Recommends the <strong>Annual Plan</strong> for{' '}
        <strong>{formik.values.projectName}</strong>
      </p>

      <div>
        <div className="hidden md:flex items-start justify-center">
          {plans.map((plan, index) => {
            const handleCardSelect = () => {
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
            onChange={setCurrentStep}
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
            onClickItem={setCurrentStep}
            selectedItem={currentStep}
          >
            {plans.map((plan, index) => {
              return (
                <PricingCard
                  {...plan}
                  isRecommended={recommended === currentStep}
                  key={plan.id}
                  selected={index === currentStep}
                  onSelect={handleSelect}
                />
              )
            })}
          </Carousel>
        </div>
      </div>

      <div className="mt-10 flex-1">
        {formik.values.errorMessage && (
          <span className="text-red-500 font-bold uppercase">
            {formik.values.errorMessage}
          </span>
        )}
      </div>
    </div>
  )
}

export default HirePlanStep
