create table projects (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    name varchar(255) not null,
    description text,
    start_date date,
    end_date date,
    repo_url varchar(500),
    deployed boolean not null default false,
    status varchar(32) not null,
    health_score integer,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index idx_projects_user_id on projects (user_id);

create table project_technologies (
    project_id uuid not null references projects(id) on delete cascade,
    list_index integer not null,
    technology varchar(255) not null,
    primary key (project_id, list_index)
);
