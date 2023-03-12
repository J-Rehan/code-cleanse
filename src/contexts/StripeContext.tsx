import React, { createContext, PropsWithChildren, useState } from 'react'

interface IStripeContext {
  clientSecret: string
  setClientSecret: React.SetStateAction<React.Dispatch<string>>
}

export const StripeContext = createContext<IStripeContext>({
  clientSecret: null,
  setClientSecret: () => {},
})

const StripeContextProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [clientSecret, setClientSecret] = useState('')

  const values = {
    clientSecret,
    setClientSecret,
  }

  return (
    <StripeContext.Provider value={values}>{children}</StripeContext.Provider>
  )
}

export default StripeContextProvider
