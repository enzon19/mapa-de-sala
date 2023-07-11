import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load({ params }) {
  const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);
  let classroomMapData = (await supabase.from("classroomMap").select("*").eq("day", requestedDate.toString()).limit(1)).data[0] || [];
  const layout = classroomMapData.columns;
  if (!layout)
    return { params, classroomMapData };
  const studentsIDs = layout.flat().filter((student) => !["clssrmmp_empty", "clssrmmp_space"].includes(student));
  const studentsData = (await supabase.from("students").select("id,name").in("id", studentsIDs)).data;
  studentsData.push({ "id": "clssrmmp_empty", "name": "" }, { "id": "clssrmmp_space", "name": null });
  classroomMapData.layout = layout.map((column) => column.map((id) => studentsData.find((student) => student.id === id)));
  return { params, classroomMapData };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-60be6d03.js')).default;
const server_id = "src/routes/dia/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/nodes/5.46eef733.js","_app/immutable/chunks/index.c02989e7.js","_app/immutable/chunks/datetime.1af9332f.js","_app/immutable/chunks/tags.204c5fa1.js","_app/immutable/chunks/singletons.b3cb6cd2.js","_app/immutable/chunks/_commonjsHelpers.4b9100c2.js","_app/immutable/chunks/InformationCircle.8a99ceca.js","_app/immutable/chunks/Tag.4a7e9b49.js"];
const stylesheets = ["_app/immutable/assets/tags.c8237469.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-b6fac7b8.js.map
