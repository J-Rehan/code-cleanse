import type { AppProps } from 'next/app'
import '../core/styles/root.css'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default App
