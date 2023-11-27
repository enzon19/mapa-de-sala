import { s as supabase } from './supabaseClient-3a988c3e.js';
import '@supabase/supabase-js';

async function load({ params }) {
  const allClassroomMapData = (await supabase.from("classroomMap").select("*").order("day")).data;
  const studentsData = (await supabase.from("students").select("id,name,left,late")).data;
  return { studentsData, allClassroomMapData };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-938c70c3.js')).default;
const server_id = "src/routes/dados/+page.server.js";
const imports = ["_app/immutable/nodes/4.30315238.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/pt.46270c0d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/tags.b24d4422.js","_app/immutable/chunks/datetime.c484f364.js","_app/immutable/chunks/SortController.0f145d82.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/ChevronBack.c1d68ae3.js","_app/immutable/chunks/Button.6ca16e21.js"];
const stylesheets = ["_app/immutable/assets/pt.6b681f0c.css","_app/immutable/assets/SortController.28a01977.css","_app/immutable/assets/ChevronBack.647c3bf1.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-0de10180.js.map
