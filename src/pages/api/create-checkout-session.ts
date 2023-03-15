import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import * as bizSdk from 'facebook-nodejs-business-sdk'
import * as admin from 'firebase-admin'

const domainUrl = process.env.DOMAIN_URL || 'https://www.codecleanse.com'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

const subscriptions = {
  OneTime: {
    productId:
      process.env.NODE_ENV !== 'production'
        ? 'prod_NW8ACGCE35d51z'
        : 'prod_NWHAQnE0dJ7GOo',
    prices: {
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5tnEw4G60H813WVWpTSVn'
          : 'price_1MlEcQEw4G60H813ahiSjg36',
    },
  },
  Monthly: {
    productId:
      process.env.NODE_ENV !== 'production'
        ? 'prod_NW8CrZoLz3zICt'
        : 'prod_NWHAwLdyxLauCO',
    prices: {
      recurring:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5vrEw4G60H813GUXe9ZTm'
          : 'price_1MlEcKEw4G60H813ArS0vIxA',
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5vrEw4G60H813wwiHfvmQ'
          : 'price_1MlEcKEw4G60H813M8uRrhQW',
    },
  },
  Annual: {
    productId:
      process.env.NODE_ENV !== 'production'
        ? 'prod_NW8DFKk43figos'
        : 'prod_NWHAlaU2I86EaT',
    prices: {
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5wwEw4G60H8132gL1ExuY'
          : 'price_1MlEc0Ew4G60H813ZXaqJqF0',
    },
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  try {
    const { name, email, subscriptionType, firebaseUserId } = req.body as {
      name: string
      email: string
      subscriptionType: keyof typeof subscriptions
      firebaseUserId: string
    }

    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK as string)
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    }

    const collectionName =
      process.env.NODE_ENV === 'production' ? 'users' : 'dev-users'

    const docRes = await admin
      .firestore()
      .collection(collectionName)
      .doc(firebaseUserId)
      .get()
    const doc = docRes.data()

    const { EventRequest, UserData, ServerEvent } = bizSdk
    const fbConversionAccessToken = process.env.FB_CONVERSION_ACCESS_TOKEN
    const pixelId = process.env.FB_PIXEL_ID

    bizSdk.FacebookAdsApi.init(fbConversionAccessToken)
    let currentTimestamp = Math.floor(new Date().getTime() / 1000)
    const userData = new UserData()
      .setLastName(name.split(' ')[0])
      .setClientUserAgent(req.headers['user-agent'])
      .setEmail(email)
      .setFirstName(name.split(' ')[1])
      .setClientIpAddress(
        req.socket.remoteAddress || req.connection.remoteAddress,
      )
      .setPhone(doc.phone)
      .setFbp(`fb.1.${currentTimestamp}.1098115397`)
      .setFbc(`fb.1.${currentTimestamp}.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`)

    const serverEvent = new ServerEvent()
      .setEventTime(currentTimestamp)
      .setEventName('CompleteRegistration')
      .setEventSourceUrl('https://www.codecleanse.com')
      .setActionSource('website')
      .setEventId('CompleteRegistration')
      .setUserData(userData)

    const eventsData = [serverEvent]
    const eventRequest = new EventRequest(
      fbConversionAccessToken,
      pixelId,
    ).setEvents(eventsData)
    await eventRequest.execute()

    if (
      !['Monthly', 'OneTime', 'Annual'].includes(subscriptionType) ||
      !name ||
      !email
    ) {
      return res.status(400).send({
        success: false,
        message: 'Insufficient Parameters',
      })
    }

    const price = await stripe.prices.retrieve(
      subscriptions[subscriptionType].prices.default,
    )

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      metadata: {
        firebaseUserId,
      },
      line_items: [
        {
          price: subscriptions[subscriptionType].prices.default,
          quantity: 1,
        },
      ],
      success_url: `${domainUrl}/hire-success?session_id={CHECKOUT_SESSION_ID}&name=${encodeURIComponent(
        name,
      )}&email=${encodeURIComponent(
        email,
      )}&subscriptionType=${subscriptionType}&price=${
        price.unit_amount
      }&firebaseUserId=${firebaseUserId}`,
      cancel_url: `${domainUrl}/hire-cancel`,
    })

    return res.redirect(303, session.url)
  } catch (e) {
    res.status(400)
    return res.send({
      error: {
        message: e.message,
      },
    })
  }
}

export default handler
