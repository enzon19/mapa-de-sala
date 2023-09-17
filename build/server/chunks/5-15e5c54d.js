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
const component = async () => (await import('./_page.svelte-a02ddec1.js')).default;
const server_id = "src/routes/dia/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/nodes/5.a46bf1e1.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/datetime.7428e89c.js","_app/immutable/chunks/DateInput.b9dc3a66.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/tags.c645b6ab.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/singletons.968a7d31.js","_app/immutable/chunks/Tag.502436a1.js"];
const stylesheets = ["_app/immutable/assets/tags.6b681f0c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-15e5c54d.js.map
