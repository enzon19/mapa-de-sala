import { s as supabase } from './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import { g as getAttendancesAndAbsences, c as countAttendancesAndAbsences } from './getStats-d0566680.js';
import '@supabase/supabase-js';

async function load({ params }) {
  const classroomMapAllData = (await supabase.from("classroomMap").select("*")).data;
  const studentsData = (await supabase.from("students").select("id,name,left,late")).data;
  const attendancesAndAbsencesWithStudentData = studentsData.map((student) => getAttendancesAndAbsencesFixedAndWithStudentData(classroomMapAllData, student));
  return { attendancesAndAbsencesWithStudentData };
}
function getAttendancesAndAbsencesFixedAndWithStudentData(classroomMapAllData, student) {
  let { attendances, absences } = getAttendancesAndAbsences(classroomMapAllData, student.id);
  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);
  if (student.left)
    absences = absences.filter((date) => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late)
    absences = absences.filter((date) => DateTime.fromISO(date) >= firstAttendanceAsDateTime);
  return { ...student, ...countAttendancesAndAbsences(attendances, absences) };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-2c799999.js')).default;
const server_id = "src/routes/dados/+page.server.js";
const imports = ["_app/immutable/nodes/4.c4e2e1f2.js","_app/immutable/chunks/index.c02989e7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-5c0f70e8.js.map
