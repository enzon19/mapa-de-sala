import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from("classroomMap").select('*').gt('day', '2024-02-04').order('day')).data;
	const allDays = allClassroomMapData.map(data => data.day);
	const student = (await supabase.from('students').select('*').eq('id', params.id)).data[0];
  if (!student.year.includes(2024)) throw redirect(308, '/aluno/' + student.id + '/2023');
	return {params, student, allClassroomMapData, allDays};
}