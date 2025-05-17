import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from('classroomMap').select('*').gt('day', '2024-02-04').order('day')).data;
	const studentsData = (await supabase.from('students').select('id,name,left,late,year').overlaps('year', ['2024']).order('name')).data;

	return {studentsData, allClassroomMapData};
}