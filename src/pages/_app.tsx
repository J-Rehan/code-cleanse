import type { AppProps } from 'next/app'
import StepsProvider from '../contexts/StepsContext'
import NextNProgress from 'nextjs-progressbar'
import '../core/styles/root.css'
import 'node_modules/react-modal-video/css/modal-video.min.css'
import { Toaster } from 'react-hot-toast'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <div>
      <StepsProvider>
        <Toaster />
        <NextNProgress color="#009BE0" />
        <Component {...pageProps} />
      </StepsProvider>
    </div>
  )
}

export default App
