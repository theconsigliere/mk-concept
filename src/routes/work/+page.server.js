import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getSingle('my_work_page');

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
