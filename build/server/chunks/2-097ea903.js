import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load() {
  const requestedDate = DateTime.now().setZone("America/Sao_Paulo").startOf("day");
  const params = { day: requestedDate.day, month: requestedDate.month };
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

const index = 2;
const component = async () => (await import('./_page.svelte-0b1a6d56.js')).default;
const file = '_app/immutable/entry/_page.svelte.106be22e.js';
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/entry/_page.svelte.106be22e.js","_app/immutable/chunks/index.19c244fc.js","_app/immutable/chunks/datetime.ecc857da.js","_app/immutable/chunks/tags.49985661.js","_app/immutable/chunks/singletons.22857072.js","_app/immutable/chunks/Warning.b12b1452.js"];
const stylesheets = ["_app/immutable/assets/tags.a045f3e9.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-097ea903.js.map
