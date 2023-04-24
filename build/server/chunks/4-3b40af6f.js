import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import '@supabase/supabase-js';

async function load({ params }) {
  const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);
  let classroomMapData = (await supabase.from("classroomMap").select("*").eq("day", requestedDate.toString()).limit(1)).data[0] || [];
  const columns = classroomMapData.columns;
  const studentsData = (await supabase.from("students").select("id,name").order("name")).data;
  studentsData.push({ "id": "clssrmmp_empty", "name": "" }, { "id": "clssrmmp_space", "name": null });
  classroomMapData.columns = columns?.map((column) => column.map((id) => studentsData.find((student) => student.id === id)));
  return { params, classroomMapData, studentsData };
}
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password");
    const columns = data.get("columns");
    const tags = data.get("tags");
    const date = data.get("date");
    if (password == "3QkN76y@YPn") {
      return (await supabase.from("classroomMap").upsert({ day: date.toString(), columns: JSON.parse(columns), tags: JSON.parse(tags) }).select()).status;
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-f1f15d64.js')).default;
const file = '_app/immutable/entry/editar-_day_day_-_month_month_-page.svelte.98383391.js';
const server_id = "src/routes/editar/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/entry/editar-_day_day_-_month_month_-page.svelte.98383391.js","_app/immutable/chunks/index.19c244fc.js","_app/immutable/chunks/datetime.ecc857da.js","_app/immutable/chunks/tags.49985661.js","_app/immutable/chunks/singletons.22857072.js"];
const stylesheets = ["_app/immutable/assets/tags.a045f3e9.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-3b40af6f.js.map
