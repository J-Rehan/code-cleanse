import React, { createContext, PropsWithChildren, useReducer } from 'react'

const initialState = {
  currentStep: 0,
  steps: [
    {
      index: 0,
      name: 'Sign Up',
      fields: ['fullName', 'email', 'phone'],
    },
    {
      index: 1,
      name: 'Your project',
      fields: ['productCategory', 'description'],
    },
    {
      index: 2,
      name: 'Select plan',
      fields: ['plan', 'cardNumber', 'expirationDate', 'cvc'],
    },
    {
      index: 3,
      name: 'Payment',
      fields: [],
    },
  ],
}

type InitialState = typeof initialState
type ActionTypes = 'NEXT_STEP' | 'SET_STEP'

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
    case 'SET_STEP':
      return { ...state, currentStep: action.payload }
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
