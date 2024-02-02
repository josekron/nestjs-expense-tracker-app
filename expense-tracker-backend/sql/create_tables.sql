CREATE TABLE IF NOT EXISTS public.user (
    user_id serial PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS public.expense (
    expense_id serial NOT NULL,
    user_user_id integer REFERENCES public.user(user_id),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    total NUMERIC(10,5) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    PRIMARY KEY (expense_id, user_user_id)
);