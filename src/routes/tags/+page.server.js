import tags from "$lib/data/tags";
import { supabase } from "$lib/supabaseClient";

export async function load() {
	const allClassroomMapData = (await supabase.from('classroomMap').select('*').order('day')).data;
  const tagDays = allClassroomMapData.filter(({tags}) => tags.length > 0);

  return {tagDays};
};