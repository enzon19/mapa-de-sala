import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load({ params }) {
  const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);
  let classroomMapData = (await supabase.from("classroomMap").select("*").eq("day", requestedDate.toString()).limit(1)).data[0] || [];
  const layout = classroomMapData.columns;
  const studentsData = (await supabase.from("students").select("id,name").order("name")).data;
  studentsData.push({ "id": "clssrmmp_empty", "name": "" }, { "id": "clssrmmp_space", "name": null });
  classroomMapData.layout = layout?.map((column) => column.map((id) => studentsData.find((student) => student.id === id)));
  return { params, classroomMapData, studentsData };
}
const actions = {
  // salvar alterações
  default: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password");
    const layout = data.get("layout");
    const tags = data.get("tags");
    const date = data.get("date");
    if (password == "3QkN76y@YPn") {
      return (await supabase.from("classroomMap").upsert({ day: date.toString(), columns: JSON.parse(layout), tags: JSON.parse(tags) }).select()).status;
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-a8c2d9d8.js')).default;
const server_id = "src/routes/editar/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/nodes/6.40d75cf0.js","_app/immutable/chunks/index.c02989e7.js","_app/immutable/chunks/datetime.1af9332f.js","_app/immutable/chunks/tags.f6107437.js","_app/immutable/chunks/singletons.6aa540e0.js","_app/immutable/chunks/_commonjsHelpers.4b9100c2.js","_app/immutable/chunks/InformationCircle.8a99ceca.js","_app/immutable/chunks/Button.9b278046.js"];
const stylesheets = ["_app/immutable/assets/tags.c8237469.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-5c5e6c8a.js.map
