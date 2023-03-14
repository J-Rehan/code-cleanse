/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Script from 'next/script'

import Stripe from 'stripe'
import { PopupButton } from 'react-calendly'
import CloseHeader from '../components/shared/CloseHeader/CloseHeader'
import * as admin from 'firebase-admin'
import sgMail from '@sendgrid/mail'
import template from '../core/email-templates/paymentSuccess'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK as string)
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    }
    const firestore = admin.firestore()
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    })
    const { session_id } = query
    const session = await stripe.checkout.sessions.retrieve(
      session_id as string,
    )

    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: '/hire-cancel',
        },
        props: {},
      }
    }

    const { firebaseUserId } = session.metadata
    const collectionName =
      process.env.NODE_ENV === 'production' ? 'users' : 'dev-users'

    await firestore
      .collection(collectionName)
      .doc(firebaseUserId)
      .update({ paid: true })

    const docRes = await firestore
      .collection(collectionName)
      .doc(firebaseUserId)
      .get()
    const doc = docRes.data()

    const msg = {
      to: doc.email,
      from: 'welcome@codecleanse.com',
      subject: `Welcome ${
        doc.name.split(' ')[0]
      }! Next Steps for Your Code Cleanse Service`,
      html: template
        .replace('{firstName}', doc.name.split(' ')[0])
        .replace('{projectName}', doc.projectName),
    }
    await sgMail.send(msg)

    return {
      props: {},
    }
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        permanent: false,
        destination: '/hire-cancel',
      },
      props: {},
    }
  }
}

const HireSuccessPage: NextPage = () => {
  return (
    <div>
      <Script id="conversion">
        {`
            var urlParams = new URLSearchParams(window.location.search);
            gtag('event', 'conversion', {
          'send_to': 'AW-11096552971/CxWlCO3m4IwYEIvsn6sp',
          'value': parseInt(urlParams.get('price')) / 100,
          'currency': 'USD',
          'transaction_id': urlParams.get('session_id')
        })`}
      </Script>
      <CloseHeader />

      <div className="max-w-[680px] mx-auto py-10 text-dark">
        <h2 className="text-4xl font-semibold text-center">Thank you.</h2>
        <p className="text-3xl text-center mt-4">Now let&apos;s chat.</p>
        <p className="text-3xl text-center mt-1 mb-6">
          Schedule a call to prepare your first report
        </p>
        <div id="calendly-widget"></div>
        <div className="max-w-[384px] mx-auto">
          <PopupButton
            className="bg-black flex items-center justify-center rounded-lg w-full p-4 text-white"
            url="https://calendly.com/codecleanse"
            rootElement={
              typeof window !== 'undefined'
                ? document.getElementById('__next')
                : null
            }
            text="Click here to schedule!"
          />
        </div>
        <p className="mt-12 mb-6 text-center">
          Watch our video to know what to expect when you speak with our team.
          We look forward to speaking with you.
        </p>
        <video
          height="100%"
          className="h-[603px] w-[340px] mx-auto rounded-2xl border border-blue"
          poster="/jawahar-thumbnail.png"
          controls
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/codecleanse-44375.appspot.com/o/Jawaher%20final.mp4?alt=media&token=9d82a4f6-5b78-4b7b-8cb4-9210ed39103c"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="pt-8 border-t border-t-gray flex flex-col items-center">
        <p>In the meantime add us to your code base</p>
        <div className="flex space-x-4 items-center mt-4">
          <Image src="/icons/github.png" width={100} height={40} alt="Github" />
        </div>
        <p className="text-2xl font-light mt-2">@codecleanse</p>
        <p className="mt-2 font-light">
          If you prefer, you can email us your code.
        </p>
      </div>
    </div>
  )
}

export default HireSuccessPage
