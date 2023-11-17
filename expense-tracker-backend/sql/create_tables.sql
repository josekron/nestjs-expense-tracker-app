CREATE TABLE IF NOT EXISTS public.user (
    user_id serial PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS public.expensedo (
    expense_id serial NOT NULL,
    user_user_id integer REFERENCES public.user(user_id),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    total NUMERIC(10,5) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    PRIMARY KEY (expense_id, user_user_id)
);

CREATE TABLE IF NOT EXISTS public.userbucket {
    bucket_id serial NOT NULL,
    user_user_id integer REFERENCES public.user(user_id),
    name VARCHAR(255) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    PRIMARY KEY (bucket_id, user_user_id)
}
