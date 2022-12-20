<script>
	import { onMount } from 'svelte';

	const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
	const LOCATION = 'Torquay,gb';
	let weather = {};

	export const getTorbayWeather = async () => {
		return fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}&units=metric`
		)
			.then((response) => response.json())
			.then((data) => {
				// data.dt is the current timestamp in Unix format
				const date = new Date(data.dt * 1000); // convert to milliseconds

				return (weather = {
					temperature: data.main.temp,
					date: date.toLocaleString('en-US', {
						month: 'short',
						day: 'numeric'
					}),
					time: date.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true
					})
				});
			})
			.catch((error) => console.error(error));
	};

	onMount(async () => await getTorbayWeather());
</script>

<div class="WeatherComponent">
	<p class="white p--small WeatherComponent__text">Torbay, England</p>

	{#if weather}
		<p class="font-bolder white WeatherComponent__info p--small">
			<span>
				{weather.date}
			</span>

			<span>
				{weather.time}
			</span>

			<span>
				{weather.temperature}°C
			</span>
		</p>
	{/if}
	{#if !weather}
		<p class="p--small white WeatherComponent__info">Loading...</p>
	{/if}
</div>

<style lang="scss">
	.WeatherComponent__text {
		margin-bottom: 0.25rem;
	}

	.WeatherComponent__info {
		margin-bottom: 0;
	}
</style>
