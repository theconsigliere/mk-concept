<script>
	import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
	let timeOfDay;

	onMount(() => {
		if (currentHour < 12) {
			timeOfDay = 'Good morning';
		} else if (currentHour < 18) {
			timeOfDay = 'Good afternoon';
		} else {
			timeOfDay = 'Good evening';
		}
		return timeOfDay;
	});
</script>

<div class="Hello">
	<a data-sveltekit-preload-data="tap" href="/" class="p--small white">Dashboard</a>

	<p class="white Hello__introduction">
		{#if timeOfDay}
			<span class="Hello_intro-first-text font-bolder">{timeOfDay}, </span>
		{/if}
		{#if !timeOfDay}
			<span class="Hello_intro-first-text font-bolder">Hello, </span>
		{/if}
		<Typewriter mode={'loop'} delay={500} showCursorOnDelay={true}>
			<span>what would you like to see …</span>
		</Typewriter>
	</p>
</div>

<style lang="scss">
	.Hello__introduction {
		margin-bottom: 0;
		display: flex;
	}

	.Hello_intro-first-text {
		margin-right: 0.5rem;
	}
</style>
