import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'
import template from '../../core/email-templates/paymentSuccess'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body
    try {
      const msg = {
        to: email, // Change to your recipient
        from: 'rehanm9181@gmail.com', // Change to your verified sender
        subject: 'Code Cleanse - Payment Successful',
        html: template,
      }
      await sgMail.send(msg)
      res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      })
    } catch (error) {
      res.status(500).json({
        success: true,
        message: 'Unexpected error occurred, please try again',
      })
    }
  }
}

export default handler
