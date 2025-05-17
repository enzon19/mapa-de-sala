import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";

export async function load({ params }) {
	// os parâmetros (/07-06) fornecem o dia e o mês escolhidos pelo usuário e informados na URL
	const requestedDate = DateTime.local(Number(params.year), Number(params.month), Number(params.day), 0, 0);

	let classroomMapData = (await supabase.from("classroomMap").select('*').eq('day', requestedDate.toISODate()).limit(1)).data[0] || []; // day, layout, tags
	const layout = classroomMapData.columns; // informações sobre as fileiras e colunas (mapa de sala em si)

	const studentsData = (await supabase.from('students').select('id,name,year').order('name')).data; // puxar o nome de todo mundo em ordem alfabética
	studentsData.push({"id": "clssrmmp_empty", "name": "", "year": [2023, 2024]}, {"id": "clssrmmp_space", "name": null, "year": [2023, 2024]});
	classroomMapData.layout = layout?.map(column => column.map(id => studentsData.find(student => student.id === id))); // se já tiver um layout salvo, substituir cada ID do layout pelo objeto com nome e ID
	return {params, classroomMapData, studentsData};
}

export const actions = {
	// salvar alterações
  default: async ({request}) => {
		const data = await request.formData();
    const password = data.get('password');
    const layout = data.get('layout');
    const tags = data.get('tags');
    const date = data.get('date');

		if (password == import.meta.env.VITE_EDIT_PASSWORD) {
			return (await supabase
				.from('classroomMap')
				.upsert({ day: date.toString(), columns: JSON.parse(layout), tags: JSON.parse(tags) })
				.select()
			).status;
		}
  }
};