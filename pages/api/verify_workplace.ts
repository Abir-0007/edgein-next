import { mutate } from "@/graphql/hasuraAdmin";
import { tokenTypes } from "@/utils/constants";
import { deleteToken, findToken } from "@/utils/tokens";
import { jwtVerify } from "jose";
import { NextApiResponse, NextApiRequest } from "next";
import CookieService from '../../utils/cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') return res.status(405).end()

  const token = CookieService.getAuthToken(req.cookies)
  const user = await CookieService.getUser(token);
  if (!user) return res.status(403).end()

  const verificationToken = req.query.token as string

  if (!verificationToken) res.status(400).send({ message: 'Bad request' })

  const verified = await jwtVerify(
    verificationToken,
    new TextEncoder().encode(process.env.ENCRYPTION_SECRET)
  )

  let payload = verified.payload

  if (!payload) res.status(400).send({ message: 'Bad request or token expired' })
  try {
    const existsToken = await findToken(verificationToken, tokenTypes.verifyWorkHereToken, token)

    if (!existsToken) res.status(400).send({ message: 'Verification link already used' })

    await addTeamMember(payload, token)

    await deleteToken(existsToken.id, token)
  } catch (e: any) {
    return res.status(500).send({ message: 'Some error occurred, please contact edgein.io' })
  }

  res.send({ message: 'success' })

}

const addTeamMember = async (payload: any, accessToken: string) => {
  let mutation, variables
  const resourceType = payload.resourceDetails.resourceType
  if (resourceType === 'companies') {
    mutation = `
      mutation InsertTeamMember($personId: Int, $companyId: Int, $vcFirmId: Int) {
        insert_team_members_one(object: {person_id: $personId, company_id: $companyId, vc_firm_id: $vcFirmId}, on_conflict: {constraint: team_members_company_id_person_id_key, update_columns: []}) {
          id
        }
      }
    `
    variables = {
      personId: payload.resourceDetails.personId,
      companyId: payload.resourceDetails.resourceId,
    }
  }
  if (resourceType === 'vc_firms') {
    mutation = `
      mutation InsertTeamMember($personId: Int, $vcFirmId: Int) {
        insert_team_members_one(object: {person_id: $personId vc_firm_id: $vcFirmId}, on_conflict: {constraint: team_members_vc_firm_id_person_id_key, update_columns: []}) {
          id
        }
      }
    `
    variables = {
      personId: payload.resourceDetails.personId,
      vcFirmId: payload.resourceDetails.resourceId,
    }
  }


  mutate({
    mutation: mutation || '',
    variables: variables || {}
  }, accessToken)
}

export default handler