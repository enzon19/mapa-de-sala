import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";

export async function load({ params }) {
	// os parâmetros (/07-06) fornecem o dia e o mês escolhidos pelo usuário e informados na URL
	const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);

	let classroomMapData = (await supabase.from("classroomMap").select('*').eq('day', requestedDate.toString()).limit(1)).data[0] || []; // day, layout, tags
	const layout = classroomMapData.columns; // informações sobre as fileiras e colunas (mapa de sala em si)
	if (!layout) return {params, classroomMapData}; // Se não tiver o layout/mapa de sala do dia, é melhor só retornar o que se tem
	
	const studentsIDs = layout.flat().filter(student => !['clssrmmp_empty', 'clssrmmp_space'].includes(student)); // pegar o ID de todo mundo que foi no dia
	const studentsData = (await supabase.from('students').select('id,name').in('id', studentsIDs)).data; // com base nos IDs, puxar o nome das pessoas
	studentsData.push({"id": "clssrmmp_empty", "name": ""}, {"id": "clssrmmp_space", "name": null});
	classroomMapData.layout = layout.map(column => column.map(id => studentsData.find(student => student.id === id))); // substituir cada ID da array com o layout pelo objeto com o nome e id das pessoas
	return {params, classroomMapData};
}