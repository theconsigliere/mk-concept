<script>
	import '../styles/app.scss';
	import DynamicIsland from '$lib/components/header/dynamicIsland.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import { updateDynamicIslandByRoute } from '../store';
	import { page } from '$app/stores';

	let wrapper;
	let content;

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

<style lang="scss">
</style>
