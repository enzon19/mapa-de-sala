import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";

export async function load({ params, url }) {
  const highlight = url.searchParams.get('destacar');

	// os parâmetros (/07-06-2023) fornecem o dia e o mês escolhidos pelo usuário e informados na URL
	const requestedDate = DateTime.local(Number(params.year), Number(params.month), Number(params.day), 0, 0);

	let classroomMapData = (await supabase.from("classroomMap").select('*').eq('day', requestedDate.toString()).limit(1)).data[0] || []; // day, layout, tags
	const layout = classroomMapData.columns; // informações sobre as fileiras e colunas (mapa de sala em si)
	
	const studentsData = (await supabase.from('students').select('*')).data; // puxar as pessoas
	if (!layout) return {params, classroomMapData, studentsData}; // Se não tiver o layout/mapa de sala do dia, é melhor só retornar o que se tem

	studentsData.push({"id": "clssrmmp_empty", "name": ""}, {"id": "clssrmmp_space", "name": null});
	classroomMapData.layout = layout.map(column => column.map(id => studentsData.find(student => student.id === id))); // substituir cada ID da array com o layout pelo objeto com o nome e id das pessoas
	return {params, classroomMapData, studentsData, highlight};
}