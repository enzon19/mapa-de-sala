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
const component = async () => (await import('./_page.svelte-13b3b4ef.js')).default;
const server_id = "src/routes/aluno/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/3.44d6b782.js","_app/immutable/chunks/index.c02989e7.js","_app/immutable/chunks/datetime.1af9332f.js","_app/immutable/chunks/_commonjsHelpers.4b9100c2.js","_app/immutable/chunks/Button.9b278046.js"];
const stylesheets = ["_app/immutable/assets/3.d44cf1ee.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-a55cae33.js.map
