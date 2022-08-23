import { mutate, query } from '@/graphql/hasuraAdmin'
import { increaseResourceSentiment, upsertList } from '@/utils/lists'
import type { NextApiRequest, NextApiResponse } from 'next'
import CookieService from '../../utils/cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  // params:
  const companyId: string = req.body.company
  const vcFirmId: string = req.body.vcfirm
  const sentimentType: string = req.body.sentiment
  const pathname: string = req.body.pathname

  const token = CookieService.getAuthToken(req.cookies)
  const user = await CookieService.getUser(token);
  if (!user) return res.status(403).end()
  
  const resourceType = companyId ? 'companies' : vcFirmId ? 'vc_firms' : ''
  const resourceId = resourceType === 'companies' ? companyId : vcFirmId

  if (resourceType === '') {
    return res.status(400).end()
  }

  // console.log('starting reaction for user', {token,user,companyId,sentimentType,pathname})
  // check if user has a list for sentiment
  const listname = `sentiment-${user.id}-${sentimentType}`
  // upsertList
  const list = await upsertList(listname, user, token)
  // insert follow
  const follow = true || await upsertFollow() // added true to skip error

  const { sentiment, revalidatePath } = await increaseResourceSentiment(resourceType, resourceId, token, sentimentType, Boolean(follow))
  if (revalidatePath) {
    await res.unstable_revalidate(revalidatePath)
  }

  // create action
  mutate({
    mutation: `
      mutation InsertAction($object: actions_insert_input!) {
        insert_actions_one(
          object: $object
        ) {
          id
        }
      }
    `,
    variables: {
      object: {
        action: "Sentiment",
        page: pathname,
        properties: {
          listId: list.id,
          resourceId,
          resourceType,
          sentiment: sentimentType,
        },
        user: user.email,
      },
    },
  });

  res.send({...sentiment})
}

export default handler

function upsertFollow() {
  throw new Error('Function not implemented.')
}
