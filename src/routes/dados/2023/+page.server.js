import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from('classroomMap').select('*').lt('day', '2023-12-12').order('day')).data;
	const studentsData = (await supabase.from('students').select('id,name,left,late,year').overlaps('year', ['2023']).order('name')).data;

	return {studentsData, allClassroomMapData};
}