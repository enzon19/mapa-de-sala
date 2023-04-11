import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";

export async function load() {
	const requestedDate = DateTime.now().setZone('America/Sao_Paulo').startOf('day');
	const params = {day: requestedDate.day, month: requestedDate.month};
	
	let classroomMapData = (await supabase.from("classroomMap").select('*').eq('day', requestedDate.toString()).limit(1)).data[0] || [];
	const columns = classroomMapData.columns;
	if (!columns) return {params, classroomMapData}; // Se não tiver nada no dia mesmo, é melhor só enviar logo
	
	const studentsIDs = columns.flat().filter(student => !['clssrmmp_empty', 'clssrmmp_space'].includes(student))
	const studentsData = (await supabase.from('students').select('id,name').in('id', studentsIDs)).data;
	studentsData.push({"id": "clssrmmp_empty", "name": ""}, {"id": "clssrmmp_space", "name": null});
	classroomMapData.columns = columns.map(column => column.map(id => studentsData.find(student => student.id === id)));
	return {params, classroomMapData, studentsData};
}