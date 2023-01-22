import Image from 'next/image'
import useSteps from '../../../hooks/useSteps'
import Button from '../../shared/Button/Button'

const features = [
  'Code Quality Audit',
  'Peer Review by a Top 1% Engineer',
  'Scalability review',
  'Transparency & Bugs',
  'Actionable Report for your dev team',
]

const BenefitsStep: React.FC = () => {
  const { dispatch } = useSteps()

  const beginJourney = () => {
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <div className="flex flex-col flex-1 justify-between pb-6">
      <div className="py-8 px-6">
        <h2 className="text-dark text-2xl text-center font-normal">
          Schedule your cleanse on a monthly basis.
        </h2>

        <ul className="mt-11">
          {features.map((feature) => (
            <li key={feature} className="flex items-center mb-7">
              <Image
                src="/list-item.png"
                width={16}
                height={16}
                alt="List Item"
              />
              <span className="ml-6 text-base font-normal text-dark">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 px-6 border-gray border-t">
        <p className="text-sm font-normal text-center">
          From only:{' '}
          <span className="text-green">
            <strong>$850</strong> / month
          </span>
        </p>

        <Button onClick={beginJourney} className="mt-4">
          <span>
            <strong>Start:</strong> Tell us about yourself
          </span>
        </Button>
      </div>
    </div>
  )
}

export default BenefitsStep
