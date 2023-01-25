/* eslint-disable no-unused-vars */

export function load({ page, fetch, session, context }) {
	// console.log(lenis);
	return {
		props: {
			...page,
			...session,
			...context
		}
	};
}
