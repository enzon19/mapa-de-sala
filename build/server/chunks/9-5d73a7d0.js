import { s as supabase } from './supabaseClient-3a988c3e.js';
import '@supabase/supabase-js';

async function load() {
  const allClassroomMapData = (await supabase.from("classroomMap").select("*").order("day")).data;
  const tagDays = allClassroomMapData.filter(({ tags }) => tags.length > 0);
  return { tagDays };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8931b320.js')).default;
const server_id = "src/routes/tags/+page.server.js";
const imports = ["_app/immutable/nodes/9.936ff112.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/tags.b24d4422.js","_app/immutable/chunks/datetime.c484f364.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-5d73a7d0.js.map
