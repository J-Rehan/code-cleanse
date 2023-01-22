import useSteps from '../../../hooks/useSteps'

const Steps: React.FC = () => {
  const { state } = useSteps()

  return (
    <div className="bg-white steps-container flex justify-around">
      {state.steps.map((step, index) => {
        return (
          <div
            key={step.name}
            className={`flex flex-col items-center border-b-[3px] w-full py-4 border-transparent hover:border-[#33333380] transition-all duration-300 cursor-pointer ${
              state.currentStep === step.index ? 'border-[#333333]' : ''
            }`}
          >
            <div className="text-white text-sm text-center flex items-center justify-center w-5 h-5 rounded-full bg-dark2">
              {index + 1}
            </div>
            <span className="text-dark2 text-sm mt-[6px] font-normal">
              {step.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Steps
