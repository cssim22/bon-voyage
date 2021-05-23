

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.trips (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
  "start_date" DATE,
  "end_date" DATE, 
	"people" varchar,
  "location" varchar NOT NULL,
	CONSTRAINT "trips_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
); 

CREATE TABLE public.days(
	"_id" serial NOT NULL,
	"day_of_trip" INT NOT NULL,
  "trip_id" BIGINT NOT NULL, 
	CONSTRAINT "days_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.events (
	"_id" serial NOT NULL,
	"time" varchar NOT NULL,
	"location" varchar NOT NULL,
	"description" varchar,
	"people" varchar,
	"links" varchar,
  "day_id" BIGINT NOT NULL,
	CONSTRAINT "events_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.days ADD CONSTRAINT "days_fk0" FOREIGN KEY ("trip_id") REFERENCES  public.trips("_id");
ALTER TABLE public.events ADD CONSTRAINT "events_fk0" FOREIGN KEY ("day_id") REFERENCES  public.days("_id");

INSERT INTO public.trips VALUES (1, 'Tokyo Trip', '2020-01-08','2020-01-21','Orion Mun, Lebron James','Tokyo, Japan');
-- INSERT INTO public.trips VALUES (2, 'Oui Oui', '2021-08-21','2021-09-02','Tina Fey, Ken Litton','Paris, France');

INSERT INTO public.days VALUES (1, 1, 1);
INSERT INTO public.days VALUES (2, 2, 1);
INSERT INTO public.days VALUES (3, 3, 1);

INSERT INTO public.events VALUES (1, '10:00 AM', 'Ivy Place Restaurant', 'Ate breakfast at Ivy Place restaurant. It was delicious.','Lebron James',NULL,1);
INSERT INTO public.events VALUES (2, '1:00 PM', 'Sky Tree', 'Went up in Sky Tree. The view was Amazing','Orion',NULL,1);
INSERT INTO public.events VALUES (3, '5:00 PM', 'Suke6 Diner', 'Had dinner','Orion',NULL,1);
INSERT INTO public.events VALUES (4, '11:00 AM', 'Ivy Place Restaurant', 'slept in was tired from previous day','Orion',NULL,2);
INSERT INTO public.events VALUES (5, '12:00 PM', 'Emperors palace', 'went to tokyo palace. it was amazing','Orion',NULL,2);
INSERT INTO public.events VALUES (6, '7:00 AM', 'Shibuya Crossing', 'Went to Shibuya Crossing','Lebron James',NULL,3);
INSERT INTO public.events VALUES (7, '10:30 AM', 'Akihabara', 'Saw the cool colored buildings in Akihabara','Lebron James',NULL,3);
INSERT INTO public.events VALUES (8, '3:00 PM', 'Ivy Place Restaurant', 'Went back for more.','Lebron James,Orion Mun',NULL,3);
INSERT INTO public.events VALUES (9, '7:00 PM', 'Flight Home', 'Flew Home. It was sad.','Orion Mun',NULL,3);




