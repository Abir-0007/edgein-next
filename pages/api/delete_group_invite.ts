import { mutate } from "@/graphql/hasuraAdmin";
import GroupService from "@/utils/groups";
import type { NextApiRequest, NextApiResponse } from "next";
import CookieService from "../../utils/cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Delete a group invite
  if (req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const token = CookieService.getAuthToken(req.cookies);
  const user = await CookieService.getUser(token);
  if (!user) return res.status(403).end();

  const id = req.body.id;
  const userGroupInvite = await GroupService.onFindUserGroupInviteById(id);
  const members = await GroupService.onFindUserGroupMembers(userGroupInvite.user_group_id);
  if (!members.some((mem: any) => mem.user_id === user.id)) {
    return res
      .status(403)
      .json({ message: "You don't have permission to delete this invitation" });
  }

  const deleteGroupInviteQuery = `
  mutation DeleteUserGroupInvites($id: Int!) {
    delete_user_group_invites(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }
  `;

  const {
    data: { delete_user_group_invites },
  } = await mutate({
    mutation: deleteGroupInviteQuery,
    variables: {
      id,
    },
  });

  return res.send(delete_user_group_invites.returning[0]);
};

export default handler;
