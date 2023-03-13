import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

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
          : 'price_1MlEcKEw4G60H813M8uRrhQW',
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5vrEw4G60H813wwiHfvmQ'
          : 'price_1MlEcKEw4G60H813ArS0vIxA',
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
    const { name, email, subscriptionType } = req.body as {
      name: string
      email: string
      subscriptionType: keyof typeof subscriptions
    }

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

    // const testClock = await stripe.testHelpers.testClocks.create({
    //   frozen_time: Number((new Date().getTime() / 1000).toFixed(0)),
    // })

    const customer = await stripe.customers.create({
      name,
      email,
      // test_clock:
      //   process.env.NODE_ENV === 'production' ? undefined : testClock.id,
    })

    const price = await stripe.prices.retrieve(
      subscriptions[subscriptionType].prices.default,
    )

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      mode: 'subscription',
      metadata: {
        name,
        email,
        subscriptionType,
      },
      discounts: [
        {
          coupon:
            process.env.NODE_ENV === 'production' ? 'AxPxrp0t' : 'sIlIzePy',
        },
      ],
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
      )}&subscriptionType=${subscriptionType}&price=${price.unit_amount}`,
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
