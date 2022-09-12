CREATE TABLE "public"."allowed_emails" ("id" serial NOT NULL, "email" text NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("email"));COMMENT ON TABLE "public"."allowed_emails" IS E'Allowed email Ids';
