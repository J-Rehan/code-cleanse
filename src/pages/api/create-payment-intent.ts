import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

const OneTimeProductId =
  process.env.NODE_ENV !== 'production' ? 'prod_NW8ACGCE35d51z' : ''

const MonthlyProductId =
  process.env.NODE_ENV !== 'production' ? 'prod_NW8CrZoLz3zICt' : ''

const AnnualProductId =
  process.env.NODE_ENV !== 'production' ? 'prod_NW8DFKk43figos' : ''

const subscriptions = {
  OneTime: {
    productId:
      process.env.NODE_ENV !== 'production' ? 'prod_NW8ACGCE35d51z' : '',
    prices: {
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5tnEw4G60H813WVWpTSVn'
          : '',
    },
  },
  Monthly: {
    productId:
      process.env.NODE_ENV !== 'production' ? 'prod_NW8CrZoLz3zICt' : '',
    prices: {
      oneTime:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5vrEw4G60H813wwiHfvmQ'
          : '',
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5vrEw4G60H813GUXe9ZTm'
          : '',
    },
  },
  Annual: {
    productId:
      process.env.NODE_ENV !== 'production' ? 'prod_NW8DFKk43figos' : '',
    prices: {
      default:
        process.env.NODE_ENV !== 'production'
          ? 'price_1Ml5wwEw4G60H8132gL1ExuY'
          : '',
    },
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  try {
    const { name, email, amount, subscriptionType } = req.body as {
      name: string
      email: string
      amount: number
      subscriptionType: keyof typeof subscriptions
    }

    if (!['Monthly', 'OneTime', 'Annual'].includes(subscriptionType)) {
      return res.status(400).send({
        success: false,
        message: 'Insufficient Parameters',
      })
    }

    if (subscriptionType === 'Monthly' && (!name || !email)) {
      return res.status(400).send({
        success: false,
        message: 'Insufficient Parameters',
      })
    }

    const customer = await stripe.customers.create({
      email,
      name,
    })

    let phases: Stripe.SubscriptionScheduleCreateParams.Phase[] = []

    if (subscriptionType === 'Monthly') {
      // first one time of 2999
      phases.push({
        iterations: 1,
        items: [
          {
            price: subscriptions.Monthly.prices.oneTime,
          },
        ],
      })
    }

    let schedule = await stripe.subscriptionSchedules.create({
      customer: customer.id,
      start_date: 'now',
      phases: [
        ...phases,
        {
          iterations: subscriptionType === 'Monthly' ? 11 : 1,
          items: [{ price: subscriptions[subscriptionType].prices.default }],
        },
      ],
      expand: ['subscription'],
    })

    res.status(200).json({
      clientSecret: (schedule as any).latest_invoice.payment_intent
        .client_secret,
    })
  } catch (e) {
    return res.status(400).send({
      success: false,
      message: (e as any).message,
    })
  }
}

export default handler
