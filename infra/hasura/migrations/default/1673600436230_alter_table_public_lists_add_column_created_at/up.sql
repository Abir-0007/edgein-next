alter table "public"."lists" add column "created_at" timestamptz
 null default now();
