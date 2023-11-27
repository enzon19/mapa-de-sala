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
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c2532a9a.js')).default;
const server_id = "src/routes/editar/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/nodes/6.0e05291c.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/datetime.c484f364.js","_app/immutable/chunks/ChevronBack.c1d68ae3.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/chunks/tags.b24d4422.js","_app/immutable/chunks/DateInput.19b45ed8.js","_app/immutable/chunks/pt.46270c0d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/singletons.1ca8bc12.js","_app/immutable/chunks/Button.6ca16e21.js"];
const stylesheets = ["_app/immutable/assets/ChevronBack.647c3bf1.css","_app/immutable/assets/pt.6b681f0c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-b669a817.js.map
