import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from('classroomMap').select('*').order('day')).data;
	const studentsData = (await supabase.from('students').select('id,name,left,late')).data;

	return {studentsData, allClassroomMapData};
}