import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from("classroomMap").select('*').order('day')).data;
	const allDays = allClassroomMapData.map(data => data.day);
	const student = (await supabase.from('students').select('*').eq('id', params.id)).data[0];
	return {params, student, allClassroomMapData, allDays};
}