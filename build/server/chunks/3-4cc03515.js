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
const component = async () => (await import('./_page.svelte-2f60cb72.js')).default;
const server_id = "src/routes/aluno/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/3.ce10e377.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/tags.c645b6ab.js","_app/immutable/chunks/datetime.7428e89c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/SortController.9276eb37.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/Button.6ca16e21.js"];
const stylesheets = ["_app/immutable/assets/3.d44cf1ee.css","_app/immutable/assets/tags.6b681f0c.css","_app/immutable/assets/SortController.ed16e8ea.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-4cc03515.js.map
