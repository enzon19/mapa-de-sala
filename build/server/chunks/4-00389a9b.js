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
const component = async () => (await import('./_page.svelte-bccc5f82.js')).default;
const server_id = "src/routes/dados/+page.server.js";
const imports = ["_app/immutable/nodes/4.ce8ea2eb.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/tags.c645b6ab.js","_app/immutable/chunks/datetime.7428e89c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/SortController.9276eb37.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/Button.6ca16e21.js"];
const stylesheets = ["_app/immutable/assets/tags.6b681f0c.css","_app/immutable/assets/SortController.ed16e8ea.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-00389a9b.js.map
