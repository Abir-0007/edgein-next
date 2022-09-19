import { NextApiResponse, NextApiRequest } from "next";
import CookieService from '../../utils/cookie'
import { mutate } from "@/graphql/hasuraAdmin";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') return res.status(405).end()

  const token = CookieService.getAuthToken(req.cookies)
  const user = await CookieService.getUser(token)
  if (!user) return res.status(403).end()

  const data = req.body.company

  try {
    const result = await updateCompany(data, token)
    res.send({ result })
  } catch (e: any) {
    return res.status(500).send({ message: 'some error occurred while saving organization' })
  }

}

const updateCompany = async (payload: any, token: string) => {
  const mutation = `
    mutation UpdateCompanyByPk($companyId: Int!, $data: companies_set_input) {
      update_companies_by_pk(pk_columns: {id: $companyId}, _set: $data) {
        id
      }
    }
  `

  return await mutate({
    mutation,
    variables: {
      data: payload
    }
  }, token)
}

export default handler