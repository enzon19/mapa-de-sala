import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const allClassroomMapData = (await supabase.from("classroomMap").select('*').lt('day', '2023-12-12').order('day')).data;
	const allDays = allClassroomMapData.map(data => data.day);
	const student = (await supabase.from('students').select('*').eq('id', params.id)).data[0];
  if (!student.year.includes(2023)) throw redirect(308, '/aluno/' + student.id);
	return {params, student, allClassroomMapData, allDays};
}