import type { NextApiRequest, NextApiResponse } from 'next'
import CookieService from '../../utils/cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  try {
    const token = CookieService.getAuthToken(req.cookies)
    user = await CookieService.getUser(token)

    // TODO if cookie is more than 1 day old refresh token

    // now we have access to the data inside of user
    // and we could make database calls or just send back what we have
    // in the token.
    if (user) {
      res.json(user)
    } else {
      res.status(401).end()
    }

  } catch (error) {
    res.status(401).end()
  }
}

export default handler
