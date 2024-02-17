import { redirect } from '@sveltejs/kit';
import { DateTime } from "luxon";

export async function GET() {
	const requestedDate = DateTime.now().setZone('America/Sao_Paulo').startOf('day');
  throw redirect(303, '/editar/' + requestedDate.toFormat('dd-MM-yyyy'));
};