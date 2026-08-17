-- FENOMENAUTAS · Base única para cuatro masterclasses
-- Ejecutar completo una sola vez en Supabase → SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.responses (
  id uuid primary key default gen_random_uuid(),
  masterclass_slug text not null check (masterclass_slug in ('oppenheimer','adn','medir','biodiversidad')),
  participant_name text not null check (length(trim(participant_name)) between 2 and 150),
  participant_email text,
  age_range text,
  consent boolean not null check (consent = true),
  score smallint not null check (score between 0 and 10),
  approved boolean not null,
  answers jsonb not null check (jsonb_typeof(answers) = 'array' and jsonb_array_length(answers) = 11),
  opinion_response text,
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint approved_matches_score check (approved = (score >= 5))
);

create index if not exists responses_masterclass_completed_idx
  on public.responses (masterclass_slug, completed_at desc);

alter table public.responses enable row level security;

drop policy if exists "public_can_submit_response" on public.responses;
create policy "public_can_submit_response"
  on public.responses
  for insert
  to anon, authenticated
  with check (
    consent = true
    and masterclass_slug in ('oppenheimer','adn','medir','biodiversidad')
    and approved = (score >= 5)
  );

revoke all on table public.responses from anon, authenticated;
grant insert on table public.responses to anon, authenticated;

create or replace view public.export_masterclasses
with (security_invoker = true)
as
select
  id,
  masterclass_slug,
  participant_name as nombre,
  participant_email as email,
  age_range as rango_edad,
  score as puntaje,
  approved as aprobo,
  completed_at as fecha_finalizacion,
  answers->0->>'selectedText'  as pregunta_1,
  answers->0->>'isCorrect'     as pregunta_1_correcta,
  answers->1->>'selectedText'  as pregunta_2,
  answers->1->>'isCorrect'     as pregunta_2_correcta,
  answers->2->>'selectedText'  as pregunta_3,
  answers->2->>'isCorrect'     as pregunta_3_correcta,
  answers->3->>'selectedText'  as pregunta_4,
  answers->3->>'isCorrect'     as pregunta_4_correcta,
  answers->4->>'selectedText'  as pregunta_5,
  answers->4->>'isCorrect'     as pregunta_5_correcta,
  answers->5->>'selectedText'  as pregunta_6,
  answers->5->>'isCorrect'     as pregunta_6_correcta,
  answers->6->>'selectedText'  as pregunta_7,
  answers->6->>'isCorrect'     as pregunta_7_correcta,
  answers->7->>'selectedText'  as pregunta_8,
  answers->7->>'isCorrect'     as pregunta_8_correcta,
  answers->8->>'selectedText'  as pregunta_9,
  answers->8->>'isCorrect'     as pregunta_9_correcta,
  answers->9->>'selectedText'  as pregunta_10,
  answers->9->>'isCorrect'     as pregunta_10_correcta,
  answers->10->>'selectedText' as pregunta_11_opinion
from public.responses;

create or replace view public.export_oppenheimer as
  select * from public.export_masterclasses where masterclass_slug = 'oppenheimer';
create or replace view public.export_adn as
  select * from public.export_masterclasses where masterclass_slug = 'adn';
create or replace view public.export_medir as
  select * from public.export_masterclasses where masterclass_slug = 'medir';
create or replace view public.export_biodiversidad as
  select * from public.export_masterclasses where masterclass_slug = 'biodiversidad';

-- Las vistas son sólo para el equipo desde el Dashboard/SQL Editor.
revoke all on public.export_masterclasses from anon, authenticated;
revoke all on public.export_oppenheimer from anon, authenticated;
revoke all on public.export_adn from anon, authenticated;
revoke all on public.export_medir from anon, authenticated;
revoke all on public.export_biodiversidad from anon, authenticated;

-- Consultas útiles para verificar la instalación:
-- select masterclass_slug, count(*), round(avg(score), 2) as promedio
-- from public.responses group by masterclass_slug order by masterclass_slug;
