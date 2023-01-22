import { useContext } from 'react'
import { StepsContext } from '../contexts/StepsContext'

const useSteps = () => {
  const context = useContext(StepsContext)
  if (!context) {
    throw new Error('useSteps must be used within a StepsProvider')
  }
  return context
}

export default useSteps
