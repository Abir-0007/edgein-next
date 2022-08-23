CREATE
OR REPLACE VIEW "public"."follows_vc_firms" AS
SELECT
  follows.created_by_user_id,
  follows.resource_id,
  follows.id,
  follows.resource_type,
  follows.list_id
FROM
  follows
WHERE
  (follows.resource_type = 'vc_firms' :: text);
