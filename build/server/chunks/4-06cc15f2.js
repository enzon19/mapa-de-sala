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
    const date = data.get("date");
    if (password == "3QkN76y@YPn") {
      return (await supabase.from("classroomMap").upsert({ day: date.toString(), columns: JSON.parse(columns) }).select()).status;
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-414cce2c.js')).default;
const file = '_app/immutable/entry/editar-_day_day_-_month_month_-page.svelte.59a1b256.js';
const server_id = "src/routes/editar/[day=day]-[month=month]/+page.server.js";
const imports = ["_app/immutable/entry/editar-_day_day_-_month_month_-page.svelte.59a1b256.js","_app/immutable/chunks/index.23c5746a.js","_app/immutable/chunks/datetime.ecc857da.js","_app/immutable/chunks/DateInput.2fd93e93.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-06cc15f2.js.map
