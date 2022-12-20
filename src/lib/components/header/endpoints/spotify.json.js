// access_token.json.js
const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://localhost:5173/';
const token_endpoint = 'https://accounts.spotify.com/api/token';
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
	const { access_token } = await fetch(token_endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
			redirect_uri,
			client_id,
			client_secret
		})
	}).then((res) => {
		return res.json();
	});

	return access_token;
};

export const getRecentlyPlayed = async () => {
	const access_token = await getAccessToken();

	return fetch('https://api.spotify.com/v1/me/player/recently-played', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${access_token}`
		}
	});
};
