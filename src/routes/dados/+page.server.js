import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";
import { getAttendancesAndAbsences, countAttendancesAndAbsences } from '$lib/getStats.js';

export async function load({ params }) {
	const classroomMapAllData = (await supabase.from('classroomMap').select('*')).data;
	const studentsData = (await supabase.from('students').select('id,name,left,late')).data;

	const attendancesAndAbsencesWithStudentData = studentsData.map(student => getAttendancesAndAbsencesFixedAndWithStudentData(classroomMapAllData, student));
	return {attendancesAndAbsencesWithStudentData};
}

function getAttendancesAndAbsencesFixedAndWithStudentData(classroomMapAllData, student) {
	let { attendances, absences } = getAttendancesAndAbsences(classroomMapAllData, student.id);

  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);

  if (student.left) absences = absences.filter(date => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late) absences = absences.filter(date => DateTime.fromISO(date) >= firstAttendanceAsDateTime);

	return {...student, ...countAttendancesAndAbsences(attendances, absences)};
}