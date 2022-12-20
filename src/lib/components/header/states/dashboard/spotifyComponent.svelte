<script>
	import { onMount } from 'svelte';
	import { getRecentlyPlayed } from '$lib/components/header/endpoints/spotify.json';
	import SpotifyLogo from '$lib/images/svgs/spotifyLogo.svelte';
	// https://dev.to/koenraijer/using-spotify-web-api-with-sveltekit-endpoints-to-create-a-now-playing-component-24lf

	let song;

	async function runSpotify() {
		const response = await getRecentlyPlayed();
		const data = await response.json();

		// if response retruns an error
		if (!response.ok) {
			const error = (data && data.message) || response.status;
			return error;
		}
		const { items } = data;

		song = {
			title: items[0].track.name,
			url: items[0].track.external_urls.spotify,
			artist: items[0].track.artists.map((artist) => artist.name)
		};

		// if song.artist is an array, join it with a comma
		if (Array.isArray(song.artist)) {
			song.artist = song.artist.join(' & ');
		}

		return song;
	}

	onMount(async () => await runSpotify());
</script>

<div class="DynamicIsland__spotify-component">
	<SpotifyLogo />

	<p class="white p--small DynamicIsland__spotify-text">
		<span class="font-bolder">Last Played </span>
		{#if song}
			<span
				><a href={song.url} target="_self" rel="noopener" class="white p--small"> {song.title}</a>
				- {song.artist}</span
			>
		{/if}
		{#if !song}
			<span>Loading...</span>
		{/if}
	</p>
</div>

<style lang="scss">
	.DynamicIsland__spotify-component {
		display: flex;
		align-items: center;
	}

	.DynamicIsland__spotify-text {
		margin-left: 1rem;
		margin-bottom: 0;
	}
</style>
