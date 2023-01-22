import { useFormikContext } from 'formik'
import useSteps from '../../../hooks/useSteps'
import { cn } from '../../../utils/style'

const Steps: React.FC = () => {
  const { state } = useSteps()
  const formik = useFormikContext()

  return (
    <div className="bg-white steps-container flex justify-around">
      {state.steps.map((step, index) => {
        const isInvalid = Object.keys(formik.errors).find((key) =>
          step.fields?.includes(key),
        )
        return (
          <div
            key={step.name}
            className={`flex flex-col items-center border-b-[3px] w-full py-4 border-transparent hover:border-[#33333380] transition-all duration-300 cursor-pointer ${
              state.currentStep === step.index ? 'border-[#333333]' : ''
            }`}
          >
            <div
              className={cn(
                'text-white text-sm text-center flex items-center justify-center w-5 h-5 rounded-full',
                !isInvalid ? 'bg-blue' : 'bg-dark2',
              )}
            >
              {isInvalid ? (
                index + 1
              ) : (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.36665 7.76667L0.81665 4.21667L1.51665 3.5L4.36665 6.35L10.4833 0.233337L11.1833 0.950004L4.36665 7.76667Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-dark2 text-sm mt-[6px] font-normal ${
                !isInvalid ? 'text-blue' : ''
              }`}
            >
              {step.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Steps
