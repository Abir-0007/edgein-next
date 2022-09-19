CREATE TABLE "public"."organization_edit_access" ("id" serial NOT NULL, "resource_id" integer NOT NULL, "user_id" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("resource_id", "user_id"));COMMENT ON TABLE "public"."organization_edit_access" IS E'Add access to user if he has verified the access to organization';
