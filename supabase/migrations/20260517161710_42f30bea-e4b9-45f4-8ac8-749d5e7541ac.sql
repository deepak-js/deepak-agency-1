
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table public.call_bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  preferred_date text,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;
alter table public.call_bookings enable row level security;

create policy "anyone can insert contact"
  on public.contact_submissions for insert to anon, authenticated with check (true);

create policy "authed can read contact"
  on public.contact_submissions for select to authenticated using (true);

create policy "anyone can insert booking"
  on public.call_bookings for insert to anon, authenticated with check (true);

create policy "authed can read bookings"
  on public.call_bookings for select to authenticated using (true);
