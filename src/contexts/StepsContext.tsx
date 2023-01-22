import React, { createContext, PropsWithChildren, useReducer } from 'react'

const initialState = {
  currentStep: 0,
  steps: [
    { index: 1, name: 'About you' },
    { index: 2, name: 'Your project' },
    { index: 3, name: 'Hire plan' },
  ],
}

type InitialState = typeof initialState
type ActionTypes = 'NEXT_STEP'

export const StepsContext = createContext<{
  state: InitialState
  dispatch: React.Dispatch<{ type: ActionTypes; payload?: any }>
}>({
  state: initialState,
  dispatch: () => null,
})

const stepsReducer = (
  state: InitialState,
  action: { type: ActionTypes; payload?: any },
) => {
  const { type } = action
  switch (type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 }
    default:
      return state
  }
}

interface StepsProviderProps extends PropsWithChildren {}

const StepsProvider: React.FC<StepsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(stepsReducer, initialState)

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  )
}

export default StepsProvider
