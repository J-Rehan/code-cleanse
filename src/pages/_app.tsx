import type { AppProps } from 'next/app'
import StepsProvider from '../contexts/StepsContext'
import NextNProgress from 'nextjs-progressbar'
import '../core/styles/root.css'
import { Toaster } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <StepsProvider>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.codecleanse.com',
          siteName:
            'Code Cleanse - Simplifying software development for non-technical founders',
          description:
            'Hire the top 1% engineers to Review your code, Manage your development team, Ensure your app is scalable, Ensure transparency in your development.',
          images: [
            {
              url: 'https://www.codecleanse.com/list-item.png',
              width: 800,
              height: 600,
              alt: 'Code Cleanse',
              type: 'image/png',
            },
            {
              url: 'https://www.codecleanse.com/list-item.png',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.codecleanse.com/list-item.png' },
            { url: 'https://www.codecleanse.com/list-item.png' },
          ],
        }}
        twitter={{
          handle: '@Code_cleanse',
          site: '@Code_cleanse',
          cardType: 'summary_large_image',
        }}
      />
      <Toaster />
      <NextNProgress color="#009BE0" />
      <Component {...pageProps} />
    </StepsProvider>
  )
}

export default App
