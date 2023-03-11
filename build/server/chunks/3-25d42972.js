import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load({ params }) {
  const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);
  let classroomMapData = (await supabase.from("classroomMap").select("*").eq("day", requestedDate.toString()).limit(1)).data[0] || [];
  const columns = classroomMapData.columns;
  if (!columns)
    return { params, classroomMapData };
  const studentsIDs = columns.flat().filter((student) => !["clssrmmp_empty", "clssrmmp_space"].includes(student));
  const studentsData = (await supabase.from("students").select("id,name").in("id", studentsIDs)).data;
  studentsData.push({ "id": "clssrmmp_empty", "name": "" }, { "id": "clssrmmp_space", "name": null });
  classroomMapData.columns = columns.map((column) => column.map((id) => studentsData.find((student) => student.id === id)));
  return { params, classroomMapData, studentsData };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-90e11c20.js')).default;
const file = '_app/immutable/entry/dia-_day_day_-_month_month_-page.svelte.22b10e06.js';
const server_id = "src/routes/dia/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/entry/dia-_day_day_-_month_month_-page.svelte.22b10e06.js","_app/immutable/chunks/index.23c5746a.js","_app/immutable/chunks/datetime.ecc857da.js","_app/immutable/chunks/DateInput.fbc65c3d.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-25d42972.js.map
