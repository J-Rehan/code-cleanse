import type { AppProps } from 'next/app'
import Script from 'next/script'
import StepsProvider from '../contexts/StepsContext'
import NextNProgress from 'nextjs-progressbar'
import '../core/styles/root.css'
import 'animate.css'
import '@szhsin/react-menu/dist/index.css'
import { Toaster } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <StepsProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-257553657-1"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-257553657-1');
      `}
      </Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11096552971"
      />
      <Script id="google-tag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11096552971');
        `}
      </Script>

      <Script id="ms_clarity">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "fvqwj82efx");
        `}
      </Script>

      <Script id="meta-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2085591771641404');
          fbq('track', 'PageView');
        `}
      </Script>

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
