CREATE TABLE "public"."data_fields" ("name" text NOT NULL, "path" text NOT NULL, "resource" text NOT NULL, "weight" integer NOT NULL, "regex_transform" text, "description" text, PRIMARY KEY ("path") , UNIQUE ("path"));
