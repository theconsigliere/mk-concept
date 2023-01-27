<script>
	import '../styles/app.scss';
	import DynamicIsland from '$lib/components/header/dynamicIsland.svelte';
	import { Scroll } from '$lib/scroll.js';
	import Footer from '$lib/components/footer/footer.svelte';
	import { updateDynamicIslandByRoute } from '../store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let wrapper;
	let content;

	onMount(() => {
		// set up smooth scroll
		Scroll(wrapper, content);
	});

	// change the state of the dynamic island based on the route
	$: updateDynamicIslandByRoute($page.route.id);
</script>

<DynamicIsland />

<div class="SmoothWrapper" bind:this={wrapper}>
	<div class="SmoothContent" bind:this={content}>
		<slot />
		<Footer />
	</div>
</div>
