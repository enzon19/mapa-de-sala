import { s as supabase } from './supabaseClient-3a988c3e.js';
import '@supabase/supabase-js';

async function load({ params }) {
  const allClassroomMapData = (await supabase.from("classroomMap").select("*").order("day")).data;
  const allDays = allClassroomMapData.map((data) => data.day);
  const student = (await supabase.from("students").select("*").eq("id", params.id)).data[0];
  return { params, student, allClassroomMapData, allDays };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9dafe445.js')).default;
const server_id = "src/routes/aluno/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/3.5694c6f9.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/pt.46270c0d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/datetime.c484f364.js","_app/immutable/chunks/tags.b24d4422.js","_app/immutable/chunks/SortController.0f145d82.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/Button.6ca16e21.js"];
const stylesheets = ["_app/immutable/assets/3.49c68b2b.css","_app/immutable/assets/pt.6b681f0c.css","_app/immutable/assets/SortController.28a01977.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-2a3f998d.js.map
