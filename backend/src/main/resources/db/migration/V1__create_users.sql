create extension if not exists pgcrypto;

create table users (
    id uuid primary key default gen_random_uuid(),
    email varchar(255) not null unique,
    password_hash varchar(255) not null,
    role varchar(32) not null default 'USER',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
