/* eslint-disable no-unused-vars */
export function load({ page, fetch, session, context }) {
	return {
		props: {
			...page,
			...session,
			...context
		}
	};
}
