import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let data
  let eventType
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event
    let signature = req.headers['stripe-signature']
    const buff = await buffer(req)

    try {
      event = stripe.webhooks.constructEvent(
        buff,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      )
    } catch (err) {
      return res.status(400).send('')
    }
    // Extract the object from the event.
    data = event.data
    eventType = event.type
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data
    eventType = req.body.type
  }

  if (eventType === 'checkout.session.completed') {
    try {
      const checkoutSession = data.object
      let schedule = await stripe.subscriptionSchedules.create({
        from_subscription: checkoutSession.subscription,
      })
      const phases = schedule.phases.map((phase) => ({
        start_date: phase.start_date,
        end_date: phase.end_date,
        items: phase.items,
      }))

      if (checkoutSession.metadata?.subscriptionType === 'OneTime') {
        await stripe.subscriptionSchedules.cancel(schedule.id)
      } else if (checkoutSession.metadata?.subscriptionType === 'Monthly') {
        schedule = await stripe.subscriptionSchedules.update(schedule.id, {
          end_behavior: 'cancel',
          phases: [
            ...(phases as any),
            {
              items: [
                {
                  price: 'price_1Ml5vrEw4G60H813GUXe9ZTm',
                  quantity: 1,
                },
              ],
              iterations: 11,
            },
          ],
        })
      }

      return res.status(200).send('')
    } catch (error) {
      console.log(error)
    }
  }

  res.status(200).send('')
}

export default handler
