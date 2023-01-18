import type { AppProps } from 'next/app'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'
import '../core/styles/root.css'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default App
