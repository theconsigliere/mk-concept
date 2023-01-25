import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
	//const homepageUID = 'home'; // Update for the UID of your homepage
	const client = createClient({ fetch, request });
	const document = await client.getSingle('homepage');

	console.log(document);
	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
