import type { AppProps } from 'next/app'
import StepsProvider from '../contexts/StepsContext'
import NextNProgress from 'nextjs-progressbar'
import '../core/styles/root.css'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <div>
      <StepsProvider>
        <NextNProgress color="#009BE0" />
        <Component {...pageProps} />
      </StepsProvider>
    </div>
  )
}

export default App
