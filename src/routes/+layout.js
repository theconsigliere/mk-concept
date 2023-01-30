/* eslint-disable no-unused-vars */

export function load({ page, fetch, session, context }) {
	console.log(page);
	return {
		props: {
			...page,
			...session,
			...context
		}
	};
}
