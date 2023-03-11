import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'
import useSteps from '../../../hooks/useSteps'

const Steps: React.FC = () => {
  const { state, dispatch } = useSteps()
  const formik = useFormikContext()
  const router = useRouter()

  const goBack = () => {
    dispatch({ type: 'SET_STEP', payload: 2 })
  }

  return (
    <div className="bg-white steps-container flex justify-center">
      {state.currentStep === 3 ? (
        <div className="flex items-center my-6 max-w-[520px] justify-between w-full px-6">
          <svg
            onClick={goBack}
            className="cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z"
              fill="#1C1B1F"
            />
          </svg>

          <p className="text-2xl text-dark">One last Step</p>
          <p />
        </div>
      ) : (
        state.steps.map((step, index) => {
          const isInvalid = Object.keys(formik.errors).find((key) =>
            step.fields?.includes(key),
          )

          let color = 'bg-blue'
          if (isInvalid) {
            if (state.currentStep > step.index) {
              color = 'bg-red-500'
            } else {
              color = 'bg-dark2'
            }
          }

          if (step.name === 'Select plan') color = 'bg-dark2'

          return (
            <div
              key={step.name}
              onClick={() =>
                dispatch({ type: 'SET_STEP', payload: step.index })
              }
              className={`flex md:max-w-[130px] flex-col items-center border-b-[3px] w-full py-4 border-transparent hover:border-[#33333380] transition-all duration-300 cursor-pointer ${
                state.currentStep === step.index ? 'border-[#333333]' : ''
              }`}
            >
              <div
                className={`text-white text-sm text-center flex items-center justify-center w-5 h-5 rounded-full ${color}`}
              >
                {isInvalid || step.name === 'Select plan' ? (
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
                className={`text-dark2 text-sm mt-[6px] font-normal text-${color.replace(
                  'bg-',
                  '',
                )}`}
              >
                {step.name}
              </span>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Steps
