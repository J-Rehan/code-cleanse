import { NextApiRequest, NextApiResponse } from 'next'
import * as bizSdk from 'facebook-nodejs-business-sdk'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { firstName, lastName, email, phone } = req.body

  const { EventRequest, UserData, ServerEvent } = bizSdk
  const fbConversionAccessToken = process.env.FB_CONVERSION_ACCESS_TOKEN
  const pixelId = process.env.FB_PIXEL_ID

  bizSdk.FacebookAdsApi.init(fbConversionAccessToken)
  let currentTimestamp = Math.floor(new Date().getTime() / 1000)
  const userData = new UserData()
    .setLastName(lastName)
    .setClientUserAgent(req.headers['user-agent'])
    .setEmail(email)
    .setFirstName(firstName)
    .setClientIpAddress(
      req.socket.remoteAddress || req.connection.remoteAddress,
    )
    .setPhone(phone)
    .setFbp(`fb.1.${currentTimestamp}.1098115397`)
    .setFbc(`fb.1.${currentTimestamp}.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`)

  const serverEvent = new ServerEvent()
    .setEventTime(currentTimestamp)
    .setEventName('Schedule')
    .setEventSourceUrl('https://www.codecleanse.com')
    .setActionSource('website')
    .setEventId('Schedule')
    .setUserData(userData)

  const eventsData = [serverEvent]
  const eventRequest = new EventRequest(
    fbConversionAccessToken,
    pixelId,
  ).setEvents(eventsData)
  await eventRequest.execute()

  res.status(200).json({
    success: true,
  })
}

export default handler
