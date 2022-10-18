import { mutate, query } from '@/graphql/hasuraAdmin'
import { deleteFollowIfExists, updateResourceSentimentCount, upsertFollow, upsertList } from '@/utils/lists'
import type { NextApiRequest, NextApiResponse } from 'next'
import CookieService from '../../utils/cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  // params:
  const resourceId: string = req.body.resourceId
  const resourceType: string = req.body.resourceType
  const sentimentType: string = req.body.sentiment
  const pathname: string = req.body.pathname

  const token = CookieService.getAuthToken(req.cookies)
  const user = await CookieService.getUser(token);
  if (!user) return res.status(403).end()

  const listName: string = sentimentType ? `sentiment-${user.id}-${sentimentType}` : req.body.listName

  if (resourceType !== 'companies' && resourceType !== 'vc_firms') {
    return res.status(400).send({ error: `Invalid resource type ${resourceType}`})
  }

  // console.log('starting reaction for user', {token,user,companyId,sentimentType,pathname})
  // check if user has a list for sentiment
  // upsertList
  const list = await upsertList(listName, user, token)

  // check if user already follows
  const existsFollows = await deleteFollowIfExists(list, resourceId, resourceType, user, token)

  // insert follow only if the follows don't exists
  const follow = !existsFollows && await upsertFollow(list, resourceId, resourceType, user, token)

  const { sentiment, revalidatePath } = await updateResourceSentimentCount(resourceType, resourceId, token, sentimentType, Boolean(follow), Boolean(existsFollows))
  // if (revalidatePath) {
  //   await res.unstable_revalidate(revalidatePath)
  // }

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
          sentiment: sentimentType,
        },
        resource_id: resourceId,
        resource: resourceType,
        user: user.id,
      },
    },
  });

  res.send({ ...sentiment })
}

export default handler