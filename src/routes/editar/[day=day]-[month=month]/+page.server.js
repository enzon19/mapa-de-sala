import { supabase } from "$lib/supabaseClient";
import { DateTime } from "luxon";

export async function load({ params }) {
	const requestedDate = DateTime.local(2023, Number(params.month), Number(params.day), 0, 0);

	let classroomMapData = (await supabase.from("classroomMap").select('*').eq('day', requestedDate.toString()).limit(1)).data[0] || [];
	const columns = classroomMapData.columns;

	const studentsData = (await supabase.from('students').select('id,name').order('name')).data;
	studentsData.push({"id": "clssrmmp_empty", "name": ""}, {"id": "clssrmmp_space", "name": null});
	classroomMapData.columns = columns?.map(column => column.map(id => studentsData.find(student => student.id === id)));
	return {params, classroomMapData, studentsData};
}

export const actions = {
  default: async ({request}) => {
		const data = await request.formData();
    const password = data.get('password');
    const columns = data.get('columns');
    const date = data.get('date');

		if (password == import.meta.env.VITE_EDIT_PASSWORD) {
			return (await supabase
				.from('classroomMap')
				.upsert({ day: date.toString(), columns: JSON.parse(columns) })
				.select()
			).status;
		}
  }
};