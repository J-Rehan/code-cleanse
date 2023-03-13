import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'
import template from '../../core/email-templates/paymentSuccess'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, firstName, projectName } = req.body
    if (!email || !firstName || !projectName) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient parameters',
      })
    }
    try {
      const msg = {
        to: email, // Change to your recipient
        from: 'welcome@codecleanse.com',
        subject: `Welcome ${firstName}! Next Steps for Your Code Cleanse Service`,
        html: template
          .replace('{firstName}', firstName)
          .replace('{projectName}', projectName),
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
