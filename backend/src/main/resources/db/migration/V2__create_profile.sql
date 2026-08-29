create table profiles (
    user_id uuid primary key references users(id) on delete cascade,
    phone varchar(255),
    location varchar(255),
    remote_work_preference varchar(20),
    experience_band_min integer,
    experience_band_max integer,
    notice_period varchar(255),
    salary_expectation_min bigint,
    salary_expectation_max bigint,
    summary text,
    github_url varchar(255),
    linkedin_url varchar(255),
    portfolio_url varchar(255),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table profile_target_roles (
    profile_user_id uuid not null references profiles(user_id) on delete cascade,
    target_role varchar(255) not null
);

create index idx_profile_target_roles_profile_user_id on profile_target_roles(profile_user_id);

create table profile_preferred_locations (
    profile_user_id uuid not null references profiles(user_id) on delete cascade,
    preferred_location varchar(255) not null
);

create index idx_profile_preferred_locations_profile_user_id on profile_preferred_locations(profile_user_id);

create table experiences (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    title varchar(255) not null,
    organization varchar(255) not null,
    start_date date not null,
    end_date date,
    description text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index idx_experiences_user_id on experiences(user_id);

create table experience_technologies (
    experience_id uuid not null references experiences(id) on delete cascade,
    technology varchar(255) not null
);

create index idx_experience_technologies_experience_id on experience_technologies(experience_id);

create table educations (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    institution varchar(255) not null,
    degree varchar(255) not null,
    field_of_study varchar(255) not null,
    start_year integer not null,
    end_year integer,
    gpa numeric(4,2),
    verified boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index idx_educations_user_id on educations(user_id);
