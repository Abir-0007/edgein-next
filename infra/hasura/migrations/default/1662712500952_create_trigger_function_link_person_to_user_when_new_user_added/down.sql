-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION link_person_to_user_when_new_user_added() RETURNS TRIGGER AS
-- $BODY$
-- BEGIN
--     UPDATE public.users
--         SET person_id=personQuery.id
--         FROM (
--             SELECT id FROM public.people
--             WHERE work_email=NEW.email
--         ) AS personQuery
--         WHERE id=NEW.id;
--
--            RETURN NEW;
-- END;
-- $BODY$
-- language plpgsql;
