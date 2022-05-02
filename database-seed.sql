CREATE Table employees (
    id SERIAL,
    name text,
    title text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO employees (name, title) values
    ('John', 'CEO'),
    ('Jane', 'SEO'),
    ('Babar', 'Manager'),
    ('Rahel', 'Clerk');
