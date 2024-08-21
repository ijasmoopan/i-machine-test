--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ProfitRecords; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."ProfitRecords" (
    "recordId" integer NOT NULL,
    "productId" integer NOT NULL,
    profit numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ProfitRecords" OWNER TO "user";

--
-- Name: ProfitRecords_recordId_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."ProfitRecords_recordId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProfitRecords_recordId_seq" OWNER TO "user";

--
-- Name: ProfitRecords_recordId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."ProfitRecords_recordId_seq" OWNED BY public."ProfitRecords"."recordId";


--
-- Name: ProfitRecords recordId; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."ProfitRecords" ALTER COLUMN "recordId" SET DEFAULT nextval('public."ProfitRecords_recordId_seq"'::regclass);


--
-- Data for Name: ProfitRecords; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."ProfitRecords" ("recordId", "productId", profit, "createdAt", "updatedAt") FROM stdin;
1	1	-20.00	2024-08-20 14:38:07.07+00	2024-08-20 14:38:07.07+00
2	2	20.00	2024-08-20 14:44:20.771+00	2024-08-20 14:44:20.771+00
3	3	50.00	2024-08-20 15:02:27.1+00	2024-08-20 15:02:27.1+00
4	4	1.00	2024-08-21 08:16:50.94+00	2024-08-21 08:16:50.94+00
5	5	1000.00	2024-08-21 09:24:42.389+00	2024-08-21 09:24:42.389+00
6	6	15.00	2024-08-21 09:27:03.293+00	2024-08-21 09:27:03.293+00
7	7	1000.00	2024-08-21 09:28:21.311+00	2024-08-21 09:28:21.311+00
8	8	500.00	2024-08-21 09:55:43.768+00	2024-08-21 09:55:43.768+00
9	9	500.00	2024-08-21 11:00:09.669+00	2024-08-21 11:00:09.669+00
10	10	0.00	2024-08-21 11:14:43.125+00	2024-08-21 11:14:43.125+00
11	11	3187.00	2024-08-21 12:04:19.538+00	2024-08-21 12:04:19.538+00
12	12	11110.00	2024-08-21 12:05:41.912+00	2024-08-21 12:05:41.912+00
\.


--
-- Name: ProfitRecords_recordId_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."ProfitRecords_recordId_seq"', 12, true);


--
-- Name: ProfitRecords ProfitRecords_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."ProfitRecords"
    ADD CONSTRAINT "ProfitRecords_pkey" PRIMARY KEY ("recordId");


--
-- PostgreSQL database dump complete
--

