import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(
  'sk_test_51MT6H0Ew4G60H813csy8QFwjwaF82ZT69xWvNdwt19s3mTCWvTmO40bsrdiclleRA5mUKN97dT2kvK0HIla0JAWh00ctIxOhMz',
  {
    apiVersion: '2022-08-01',
  },
)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  try {
    const { amount } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (e) {
    return res.status(400).send({
      error: {
        message: (e as any).message,
      },
    })
  }
}

export default handler
