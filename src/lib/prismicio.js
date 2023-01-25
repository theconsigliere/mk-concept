import * as prismic from '@prismicio/client';
const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN;

const repoName = 'maxwellkirwin'; // Fill in your repository name

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
	{
		type: 'homepage',
		uid: 'home',
		path: '/'
	},
	{
		type: 'my_work_page',
		uid: 'work',
		path: '/work'
	}
];

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
