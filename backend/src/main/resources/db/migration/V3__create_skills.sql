create table skills (
    id uuid primary key default gen_random_uuid(),
    name varchar(255) not null unique,
    category varchar(255),
    created_at timestamptz not null default now()
);

-- Case-insensitive uniqueness: "Spring Boot" and "spring boot" must resolve to the same
-- catalog row. The service layer also does a case-insensitive lookup before insert, but this
-- protects against a concurrent-insert race at the database level.
create unique index skills_name_lower_unique_idx on skills (lower(name));

create table profile_skills (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users (id) on delete cascade,
    skill_id uuid not null references skills (id) on delete cascade,
    proficiency varchar(32) not null default 'NONE',
    last_used date,
    interview_ready boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint uq_profile_skills_user_skill unique (user_id, skill_id)
);

-- Backing table for the ProfileSkill.evidence @ElementCollection (free-text evidence strings,
-- order preserved via evidence_order so the list round-trips predictably).
create table profile_skill_evidence (
    profile_skill_id uuid not null references profile_skills (id) on delete cascade,
    evidence_order integer not null,
    evidence text not null,
    primary key (profile_skill_id, evidence_order)
);
