CREATE TABLE "public"."leads" (
"id" serial NOT NULL,
"first_name" text NULL,
"last_name" text NULL,
"email" text NOT NULL,
"phone" text NULL,
"company_name" text NULL,
"website" text NULL,
"status" text NOT NULL DEFAULT 'draft'::text,
"created_at" date NOT NULL DEFAULT now(),
"updated_at" date NOT NULL DEFAULT now(),
PRIMARY KEY ("id"),
UNIQUE ("email")
);

CREATE trigger set_public_leads_updated_at before
UPDATE
    ON
    public.leads for each row execute function set_current_timestamp_updated_at();
