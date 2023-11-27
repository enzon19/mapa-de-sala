import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load({ params, url }) {
  const highlight = url.searchParams.get("destacar");
  const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);
  let classroomMapData = (await supabase.from("classroomMap").select("*").eq("day", requestedDate.toString()).limit(1)).data[0] || [];
  const layout = classroomMapData.columns;
  if (!layout)
    return { params, classroomMapData };
  const studentsIDs = layout.flat().filter((student) => !["clssrmmp_empty", "clssrmmp_space"].includes(student));
  const studentsData = (await supabase.from("students").select("id,name").in("id", studentsIDs)).data;
  studentsData.push({ "id": "clssrmmp_empty", "name": "" }, { "id": "clssrmmp_space", "name": null });
  classroomMapData.layout = layout.map((column) => column.map((id) => studentsData.find((student) => student.id === id)));
  return { params, classroomMapData, highlight };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-815de133.js')).default;
const server_id = "src/routes/dia/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/nodes/5.ba08836b.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/datetime.c484f364.js","_app/immutable/chunks/ChevronBack.c1d68ae3.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/tags.b24d4422.js","_app/immutable/chunks/DateInput.19b45ed8.js","_app/immutable/chunks/pt.46270c0d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/singletons.1ca8bc12.js","_app/immutable/chunks/Tag.7b2d8042.js"];
const stylesheets = ["_app/immutable/assets/ChevronBack.647c3bf1.css","_app/immutable/assets/pt.6b681f0c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-febd7fcd.js.map
