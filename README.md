<p align="center">
  <img src="./static/apple-touch-icon.png" alt="Mapa de Sala Logo" />
  <h1 align="center">
    Mapa de Sala
  </h1>

  <p align="center">
    A project to collect data about each student's position in the classroom. As an extra, other data can be provided: absences, presences, position streak and so on.
    <br />
    <a href="https://mapadesala.enzon19.com"><strong>Visit website »</strong></a>
    <br />
  </p>

</p>

## Screenshots  
Click an image to view full size.
<div align="center">
  <img src="https://github.com/user-attachments/assets/33a92acc-b1a2-4e56-ba8f-dbc40a7fa601" height="220" style="vertical-align: middle; margin: 5px;" />
  <img src="https://github.com/user-attachments/assets/9cb972d3-43c2-42ad-bcde-fc96dd9d2fdb" height="220" style="vertical-align: middle; margin: 5px;" />
  <img src="https://github.com/user-attachments/assets/6a30e3d1-086f-412d-a8ad-f0bff2e93f1e" height="220" style="vertical-align: middle; margin: 5px;" />
  <img src="https://github.com/user-attachments/assets/d7ed766f-a80b-4d36-9346-392b19f41815" height="220" style="vertical-align: middle; margin: 5px;" />
</div>


## Why?

**This is my first Svelte project shipped to production!** And I don't think the code is good enough...

A friend and I had this cool idea to track where each person sits in class every day. The main goal was to visualize how seating positions change over time — especially by the end of the year. People usually sit near their friends, but friendships evolve: some fade, new ones form, and that often leads to people changing where they sit.

As we collected more data, I realized I could also track attendance — absences and presences — and display that info to help students avoid reaching attendance limits imposed by the school. From there, I added even more features: heatmaps, rankings and position streaks.

## Database definition
Before reproducing this repo, change the `supabaseClient.js` and do that on your db:

```sql
create table public."classroomMap" (
  day date not null,
  columns jsonb null default '[]'::jsonb,
  tags text[] null default '{}'::text[],
  constraint classroomMap_pkey primary key (day),
  constraint classroomMap_day_key unique (day)
) TABLESPACE pg_default;

create table public.students (
  id uuid not null default extensions.uuid_generate_v4 (),
  created_at timestamp with time zone null default now(),
  name text null,
  year smallint[] null default '{2023,2024}'::smallint[],
  hidden_name text null,
  left smallint null,
  late smallint null,
  constraint students_pkey primary key (id)
) TABLESPACE pg_default;
``` 
